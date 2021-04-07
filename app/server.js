require("dotenv").config();

var express = require("express");
var app = express();
const path = require("path");
const redis = require("redis");

const client = redis.createClient({
  host: "aws-eu-west-1-portal.2.dblayer.com",
  port: 21285,
  password: process.env.REDIS_PASSWORD,
});

client.on("error", err => {
  console.log("Error " + err);
});

client.set("student", "Laylaa", function (err, reply) {
  console.log(reply);
});

client.get("student", function (err, reply) {
  console.log(reply);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
