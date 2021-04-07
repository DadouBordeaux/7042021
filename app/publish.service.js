const { clientPublish } = require("./redis");

function startPlayer() {
  clientPublish.publish("start-player", "");
}

function stopPlayer() {
  clientPublish.publish("stop-player", "");
}

module.exports = {
  startPlayer,
  stopPlayer,
};
