const redis = require("redis");
const { promisifyAll } = require("bluebird");

promisifyAll(redis);

const carritoController = {
  getClient: () => {
    const client = redis.createClient({
      port: 6379,
    });

    client.on("error", (error) => {
      console.error(error);
    });
    return client;
  },
  actualizarCarrito: async (req, res) => {
    try {
      let client = carritoController.getClient();
      let carritoAux = {
        loteria: req.body.loteria,
        lotto: req.body.lotto,
        pozo: req.body.pozo,
        carrito: req.body.carrito,
        total: req.body.total,
        reservaId: req.body.reservaId,
        user: req.body.user,
      };
      await client.setAsync(
        `carrito-${carritoAux.user}`,
        JSON.stringify(carritoAux)
      );
      await client.expireAsync(`carrito-${carritoAux.user}`, 60*40);
      let response = await client.getAsync(`carrito-${carritoAux.user}`);
      client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getCarrito: async (req, res) => {
    try {
      let user = req.body.user;
      let client = carritoController.getClient();
      let response = await client.getAsync(`carrito-${user}`);
      if (!response) {
        let carrito = {
          loteria: {},
          lotto: {},
          pozo: {},
          carrito: [],
          total: 0,
          reservaId: 0,
          user,
        };
        await client.setAsync(`carrito-${user}`, JSON.stringify(carrito));
        await client.expireAsync(`carrito-${user}`, 60*40);
        response = await client.getAsync(`carrito-${user}`);
      }
      client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  borrarCarritoHttp: async (req, res) => {
    try {
      let response = await carritoController.borrarCarrito(req.body.user);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  borrarCarrito: async (user) => {
    try {
      let client = carritoController.getClient();
      let carrito = {
        loteria: {},
        lotto: {},
        pozo: {},
        carrito: [],
        total: 0,
        reservaId: 0,
        user,
      };
      await client.setAsync(`carrito-${user}`, JSON.stringify(carrito));

      let response = await client.getAsync(`carrito-${user}`);
      client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

module.exports = carritoController;
