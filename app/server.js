require("dotenv").config();

var express = require("express");
const app = express();
const path = require("path");
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

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
