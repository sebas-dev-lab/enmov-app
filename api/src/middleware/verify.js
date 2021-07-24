const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { SECRET } = require("../config/_env");
const { getStatusCodeMsj } = require("../utils/string");
module.exports = {
  verifyFn: async (req, res, next) => {
    try {
      const token = req.headers["fayser-auth"];
      console.log(token);
      if (!token) {
        return res.status(401).json({
          auth: false,
          msj: "Have not got token",
        });
      }

      const decoded = jwt.verify(token, SECRET);
      req.userId = decoded.id;
      next();
    } catch (e) {
      console.error(e);
      return res.json({ auth: false, type: "expired" });
    }
  },
  checkDuplicateEmail: async function (req, res, next) {
    const { email } = req.body;
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      return res.status(401).json({ message: "Usuario ya registrado" });
    }

    next();
  },

  checkRole: async function (req, res, next) {
    const _id = req.userId;
    const user = await User.findOne({ _id: _id });
    if (!user) {
      return res.status(403).json({ msj: getStatusCodeMsj(403) });
    }
    if (user.role !== "admin" || user.role === "moderator") {
      return res.status(403).json({ msj: getStatusCodeMsj(403) });
    }
    next();
  },
};
