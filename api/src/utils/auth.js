const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require("../config/_env");

class Password {
  constructor() {
    this.secret = SECRET;
  }
  async encryptPassword(pass) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
  }
  async comparePassword(pass, resivePass) {
    return await bcrypt.compare(pass, resivePass);
  }
  createToken(user) {
    const expire = 60 * 60 * 24;
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: expire,
    });
    return token;
  }
}

module.exports = {
  Password,
};
