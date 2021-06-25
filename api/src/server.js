const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config/_env");

// Import routes
const routes = require("./routes/index");
// Setting
const server = express();
server.set("PORT", PORT || 4001);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(morgan("dev"));

// Routes
server.use("/", routes);

// Export
module.exports = server;
