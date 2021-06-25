const { Schema, model } = require("mognoose");

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
    user_id: {
      type: Schema.Types.ObjectId,
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
