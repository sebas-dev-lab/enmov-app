const User = require("../models/User");
const { getStatusCodeMsj } = require("../utils/string");

const updateUserData = async (req, res) => {
  try {
    const { name, lastname, username, email, phone, dni } = req.body;
  } catch (e) {
    console.error(e);
    return res
      .status(e.status)
      .json({ msj: getStatusCodeMsj(e.status), updated: false });
  }
};

module.exports = {
  updateUserData,
};
