const User = require("../models/User");
const { getStatusCodeMsj } = require("../utils/string");
const { Password } = require("../utils/auth");

const singUp = async (req, res) => {
  try {
    const { name, lastname, email, password, role } = req.body;
    if (!name || !lastname || !email || !password || !role) {
      return res
        .status(400)
        .json({ msj: getStatusCodeMsj(400), singup: false, type: "register" });
    }
    const encrypt = new Password();
    const newUser = new User({
      name,
      lastname,
      email,
      role,
      password: await encrypt.encryptPassword(password),
    });
    await newUser.save();

    return res.status(201).json({ msj: getStatusCodeMsj(201), singup: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), singup: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!password) {
      return res.status(400).json({ msj: getStatusCode(400), login: false });
    }
    let find = email ? email : username;
    const user = await User.findOne({ [email ? "email" : "username"]: find });
    console.log(user);
    if (!user) {
      return res.status(404).json({ msj: getStatusCodeMsj(404), login: false });
    }
    const decrypt = new Password();
    const decode = await decrypt.comparePassword(password, user.password);
    console.log(decode);
    if (!decode) {
      return res.status(401).json({ msj: getStatusCodeMsj(401), login: false });
    }
    const token = decrypt.createToken(user);
    return res
      .status(200)
      .json({ msj: getStatusCodeMsj(200), login: true, token: token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), singup: false });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findOne({ _id: _id });
    if (!user) {
      return res
        .status(404)
        .json({ msj: getStatusCodeMsj(404), deleted: false });
    }
    await User.deleteOne({ _id: _id });
    const control = await User.findOne({ _id: _id });
    if (control) {
      return res
        .status(412)
        .json({ msj: getStatusCodeMsj(412), deleted: false });
    }
    return res.status(200).json({ msj: getStatusCodeMsj(200), deleted: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: getStatusCodeMsj(500), deleted: false });
  }
};

module.exports = { singUp, login, deleteUser };
