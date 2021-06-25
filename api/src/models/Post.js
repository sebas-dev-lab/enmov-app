const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  author: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
