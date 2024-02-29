
const redis = require("../../cache");

const cacheController = {
  updateCart: async (carrito) => {
    let timeout = 60 * 40;
    let client = redis.getClient();
    await client.connect();
    await client.set(`carrito-${carrito.user}`, JSON.stringify(carrito));
    await client.expire(`carrito-${carrito.user}`, timeout);
    let response = await client.get(`carrito-${carrito.user}`);
    await client.quit();
    return response;
  },
};

module.exports = cacheController;
