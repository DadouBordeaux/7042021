const { clientSubscribe } = require("./redis");

function initRedisSubscribe() {
  clientSubscribe.subscribe("start-player");
  clientSubscribe.subscribe("stop-player");

  clientSubscribe.on("message", (channel, message) => {
    if (channel === "start-player") {
      // TODO: to implement in api
      console.log("start player !");
    }

    if (channel === "stop-player") {
      // TODO: to implement in api
      console.log("stop player !");
    }
  });
}

module.exports = {
  initRedisSubscribe,
};
