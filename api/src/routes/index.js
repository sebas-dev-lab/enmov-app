const router = require("express").Router();

// Import Routes
const authRouter = require("./authRoutes");
const postRouter = require("./postRoutes");
// routes
router.use("/auth", authRouter);
router.use("/", postRouter);

// Exports
module.exports = router;
