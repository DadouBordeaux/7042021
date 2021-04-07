require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const { startPlayer, stopPlayer } = require("./publish.service");
const { initRedisSubscribe } = require("./subscribe.service");

initRedisSubscribe();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/start-player", (req, res) => {
  startPlayer();
  res.end();
});

app.get("/stop-player", (req, res) => {
  stopPlayer();
  res.end();
});

io.on("connection", socket => {
  console.log("a user connected");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
