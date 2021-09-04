const { Schema, model } = require("mongoose");

const qPostSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
  },
  data: {
    type: Object,
  },
});

const Qpost = model("Qpost", qPostSchema);

module.exports = Qpost;
