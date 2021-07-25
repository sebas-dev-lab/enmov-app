const Image = require("../models/Images");
const Post = require("../models/Post");
const Style = require("../models/Style");
const Review = require("../models/Review");

const fs = require("fs");
const { getStatusCodeMsj } = require("../utils/string");
const { uploadToBucket, deleteFiles } = require("../helpers/s3");
const { averageScore } = require("../helpers/statics");
const { postConstantValues } = require("../utils/constantValues");

const createPost = async (req, res) => {
  try {
    const { date, title, description, resume, style } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ msj: getStatusCodeMsj(400), created: false });
    }

    const newStyle = new Style({
      author: style.author,
      title: style.title,
      resume: style.resume,
      body: style.body,
      footer: style.footer,
    });
    await newStyle.save();
    console.log(newStyle);
    const newPost = new Post({
      author: req.userId,
      date,
      title,
      description,
      resume,
      style: newStyle._id,
    });
    await newPost.save();
    const control = await Post.findOne({ _id: newPost._id });
    if (!control) {
      return res
        .status(404)
        .json({ msj: getStatusCodeMsj(404), created: false });
    }
    return res.status(201).json({ msj: getStatusCodeMsj(201), created: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), created: false });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      return res.status(404).json({ msj: getStatusCodeMsj(404), get: false });
    }
    return res
      .status(200)
      .json({ msj: getStatusCodeMsj(200), get: true, posts: posts });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), get: false });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const post = await await Post.findOne({ _id: post_id });

    if (!post) {
      return res.status(404).json({ msj: getStatusCodeMsj(404), get: false });
    }
    const images = [];
    for (let i in post.image) {
      let image = await Image.findOne({ _id: post.image[i] });
      images.push(image);
    }

    const reviews = [];
    for (let i in post.reviews) {
      let review = await Review.findOne({ _id: post.reviews[i] });
      reviews.push(review);
    }

    const average = averageScore(reviews);

    return res.status(200).json({
      msj: getStatusCodeMsj(200),
      get: true,
      post: post,
      images,
      reviews,
      average,
      referValues: postConstantValues,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), get: false });
  }
};

const uploadImagePost = async (req, res) => {
  try {
    let type = "post";
    const file = req.file;
    const result = await uploadToBucket(file);
    if (!result) {
      fs.unlinkSync(file.path);
      return res
        .status(206)
        .json({ msj: getStatusCodeMsj(206), uploaded: false });
    }
    const newImage = new Image({
      tag_id: result.key,
      type: type,
      user_id: req.userId,
      original_name: file.filename,
      extension: file.mimetype.slice(file.mimetype.indexOf("/") + 1),
      path: result.Location,
    });
    await newImage.save();
    console.log(newImage);
    fs.unlinkSync(file.path);

    return res.status(200).json({
      msj: "ok",
      image: {
        path: newImage.path,
        type: newImage.type,
        _id: newImage._id,
      },
      uploaded: true,
    });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ msj: getStatusCodeMsj(500), uploaded: false });
  }
};

const updatePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const { date, title, description, resume, image, style } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ msj: getStatusCodeMsj(400), updated: false });
    }
    const { image_id, description_image, title_image } = image;
    if (!image_id) {
      return res
        .status(400)
        .json({ msj: getStatusCodeMsj(400), updated: false });
    }
    await Image.findOneAndUpdate(
      { _id: image_id },
      { description: description_image, title: title_image }
    );
    await Style.findOneAndUpdate({ _id: style.style_id }, { style });
    await Post.findOneAndUpdate(
      { _id: post_id },
      {
        author: req.userId,
        date,
        title,
        description,
        resume,
        style,
        date: Date.now(),
      }
    );
    await Post.findOneAndUpdate(
      { _id: post_id },
      { $push: { image: image_id } }
    );
    return res.status(200).json({ msj: getStatusCodeMsj(200), updated: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), updated: false });
  }
};

const deletePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const post = await Post.findOne({ _id: post_id });
    if (!post) {
      return res
        .status(404)
        .json({ msj: getStatusCodeMsj(404), deleted: false });
    }
    const images = [];
    for (let i in post.image) {
      let image = await Image.findOne({ _id: post.image[i] });
      images.push(image);
    }
    const result = await deleteFiles(images);

    if (result && result.Error && result.Error.length > 0) {
      return res
        .status(206)
        .json({ msj: getStatusCodeMsj(206), result, deleted: false });
    }

    for (let i in post.image) {
      await Image.deleteOne({ _id: post.image[i] });
    }
    await Style.deleteOne({ _id: post.style._id });
    await Post.deleteOne({ _id: post_id });

    const control_2 = await Post.findOne({ _id: post_id });
    const control_2_b = await Style.findOne({ _id: post.style._id });
    if (control_2 || control_2_b) {
      return res
        .status(403)
        .json({ msj: getStatusCodeMsj(403), deleted: false });
    }
    return res.status(200).json({ msj: getStatusCodeMsj(200), deleted: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), updated: false });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getOnePost,
  uploadImagePost,
};
