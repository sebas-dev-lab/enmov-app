const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    path: {
      type: String,
      required: true,
    },
    extension: {
      type: String,
      required: true,
    },
    original_name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    posotion: {},
    tag_id: {
      type: String,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["post", "profile"],
      default: "post",
    },
  },
  {
    timestamp: true,
  }
);

const Image = model("Image", imageSchema);

module.exports = Image;
