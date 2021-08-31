const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config/_env");
const path = require("path");
// Import routes
const routes = require("./routes/index");

/*  Setting */

// server-settings
const app = express();
app.set("PORT", PORT || 4001);

// socket-settings
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", routes);

// Socket
io.on("connection", (socket) => {
    console.log("io connected", socket.id);
  });
  
// Export
module.exports = { server, app, io };
