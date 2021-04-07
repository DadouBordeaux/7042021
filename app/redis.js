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

module.exports = {
  clientSubscribe,
  clientPublish,
};
