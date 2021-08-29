const router = require("express").Router();

// controller
const {
  singUp,
  login,
  deleteUser,
  logout,
} = require("../controller/authController");

// middleware
const { checkDuplicateEmail, verifyFn } = require("../middleware/verify");
// routes
router.post("/signup", checkDuplicateEmail, singUp);
router.post("/signin", login);
router.post("/logout", verifyFn, logout);
router.delete("/:_id", verifyFn, deleteUser);
// Exports
module.exports = router;
