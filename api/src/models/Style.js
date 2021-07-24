const { Schema, model } = require("mongoose");

const styleSchema = new Schema({
  title: {
    font_size: {
      type: String,
    },
    font_family: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  resume: {
    font_size: {
      type: String,
    },
    font_family: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  body: {
    font_size: {
      type: String,
    },
    font_family: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  footer: {
    font_size: {
      type: String,
    },
    font_family: {
      type: String,
    },
    color: {
      type: String,
    },
  },
});

const Style = model("Style", styleSchema);

module.exports = Style;
