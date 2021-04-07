const { clientSubscribe } = require("./redis");

function initRedisSubscribe(io) {
  clientSubscribe.subscribe("start-player");
  clientSubscribe.subscribe("stop-player");

  clientSubscribe.on("message", channel => {
    if (channel === "start-player") {
      io.emit("start-player");
    }

    if (channel === "stop-player") {
      io.emit("stop-player");
    }
  });
}

module.exports = {
  initRedisSubscribe,
};
