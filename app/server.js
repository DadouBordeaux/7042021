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

clientSubscribe.subscribe("user-notify");

clientSubscribe.on("message", (channel, message) => {
  console.log("Received data :" + message);
});

app.get("/pub", function (req, res) {
  const user = {
    id: "123456",
    name: "Davis",
  };

  clientPublish.publish("user-notify", JSON.stringify(user));
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
