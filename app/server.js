require("dotenv").config();

var express = require("express");
const app = express();
const path = require("path");
const redis = require("redis");

const clientSubscribe = redis.createClient({
  host: "aws-eu-west-1-portal.2.dblayer.com",
  port: 21285,
  password: process.env.REDIS_PASSWORD,
});

const clientPublish = redis.createClient({
  host: "aws-eu-west-1-portal.2.dblayer.com",
  port: 21285,
  password: process.env.REDIS_PASSWORD,
});

clientSubscribe.subscribe("start-player");
clientSubscribe.subscribe("stop-player");

clientSubscribe.on("message", (channel, message) => {
  if (channel === "start-player") {
    console.log("start player !");
  }

  if (channel === "stop-player") {
    console.log("stop player !");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/start-player", (req, res) => {
  clientPublish.publish("start-player", "");
  res.end();
});

app.get("/stop-player", (req, res) => {
  clientPublish.publish("stop-player", "");
  res.end();
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
