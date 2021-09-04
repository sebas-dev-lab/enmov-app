const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  modify_date: {
    type: Date,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  resume: {
    type: String,
  },
  image: {
    type: [Schema.Types.ObjectId],
    ref: "Image",
  },
  data: {
    type: Object,
  },
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "Review",
  },
  settings: {
    view_reviews: {
      type: Boolean,
    },
    view_score: {
      type: Boolean,
    },
    social: {
      type: Boolean,
    },
  },
});

postSchema.plugin(require("mongoose-autopopulate"));
const Post = model("Post", postSchema);

module.exports = Post;
