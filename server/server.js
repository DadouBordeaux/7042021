var express = require("express");
var app = express();
var musicPath =
  "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"; //change this path to your music file.
var onclickHTML = "var audio = new Audio('" + musicPath + "'); audio.play();";
app.get("/", function (req, res) {
  res.send(
    '<button onclick="' + onclickHTML + '">click me to hear music</button>'
  );
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
