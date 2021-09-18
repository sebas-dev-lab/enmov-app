const router = require("express").Router();

// controller
const {
  singUp,
  login,
  deleteUser,
  logout,
  authControl,
} = require("../controller/authController");

// middleware
const { checkDuplicateEmail, verifyFn } = require("../middleware/verify");
// routes
router.post("/signup", checkDuplicateEmail, singUp);
router.post("/signin", login);
router.post("/logout", verifyFn, logout);
router.delete("/delete/:_id", verifyFn, deleteUser);

// control
router.get("/control", verifyFn, authControl);
// Exports
module.exports = router;
