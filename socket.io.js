const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("a user connected");
});
