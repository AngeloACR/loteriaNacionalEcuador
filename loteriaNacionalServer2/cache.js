const redis = require("redis")
module.exports.getClient = function () {
  // Connect to Database
  const client = redis.createClient({
    port: 6379,
  });

  client.on("error", (error) => {
    console.error(error);
  });
  return client;
};