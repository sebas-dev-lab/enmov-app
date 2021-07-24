const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    autopopulate: true,
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
    type: [Schema.Types.ObjectId],
    ref: "Image",
  },
  style: {
    type: Schema.Types.ObjectId,
    ref: "Style",
    autopopulate: true,
  },
});

postSchema.plugin(require("mongoose-autopopulate"));
const Post = model("Post", postSchema);

module.exports = Post;
