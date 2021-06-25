const router = require("express").Router();

// Import Routes
const authRouter = require("./authRoutes");

// routes
router.use("/auth", authRouter);

// Exports
module.exports = router;
