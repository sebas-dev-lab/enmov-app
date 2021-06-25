const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  title: {
    type: Schema.Types.ObjectId,
  },
  image: {
    type: Schema.Types.ObjectId,
  },
  score: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
