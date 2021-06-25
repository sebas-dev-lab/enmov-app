const router = require("express").Router();

// controller
const { singUp, login, deleteUser } = require("../controller/authController");

// middleware
const { checkDuplicateEmail, verifyFn } = require("../middleware/verify");
// routes
router.post("/singup", checkDuplicateEmail, singUp);
router.post("/login", login);
router.delete("/:_id", verifyFn, deleteUser);
// Exports
module.exports = router;
