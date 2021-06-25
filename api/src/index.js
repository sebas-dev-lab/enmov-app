const server = require("./server");
const mongoose = require("./db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error"));
db.once("open", () => {
  console.log("DB is connected");
});

server.listen(server.get("PORT"), () => {
  console.log(`Server on port ${server.get("PORT")}`);
});
