const Review = require("../models/Review");
const Post = require("../models/Post");
const { getStatusCodeMsj } = require("../utils/string");

const createReview = async (req, res) => {
  try {
    const { review, score } = req.body;
    const { post_id } = req.params;
    if (!review) {
      return res
        .status(400)
        .json({ msj: getStatusCodeMsj(400), created: false });
    }
    const newReview = new Review({
      author: req.userId,
      review,
      score,
      post: post_id,
    });
    await newReview.save();

    const post = await Post.findOne({ _id: post_id });
    if (!post) {
      return res
        .status(404)
        .json({ msj: getStatusCodeMsj(404), created: false });
    }
    post.reviews.push(newReview);
    await post.save();
    return res.status(201).json({ msj: getStatusCodeMsj(201), created: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), created: false });
  }
};

const updateReview = async (req, res) => {
  try {
    const { author, review, score } = req.body;
    const { post_id, review_id } = req.params;
    if (!author || !review) {
      return res.status(400).json({ msj: getStatusCode(400), updated: false });
    }
    await Review.findOneAndUpdate(
      { _id: review_id },
      { author, review, score, date: Date.now() }
    );
    return res.status(200).json({ msj: getStatusCodeMsj(200), updated: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), updated: false });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { post_id, review_id } = req.params;
    const post = await Post.findOne({ _id: post_id });
    if (!post) {
      return res.status(404).json({ msj: getStatusCodeMsj(404), get: false });
    }
    post.reviews = post.reviews.filter((rev) => rev._id !== review_id);
    await post.save();
    await Review.delete({ _id: review_id });
    const control = await Review.findOne({ _id: review_id });
    if (control) {
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
  createReview,
  updateReview,
  deleteReview,
};
