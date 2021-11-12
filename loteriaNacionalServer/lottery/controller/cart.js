const redis = require("redis");
const reservas = require("../../loterianacional/controller/reservas");
const { promisifyAll } = require("bluebird");

promisifyAll(redis);
let timeout = 60 * 40;
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
      await client.expireAsync(`carrito-${carritoAux.user}`, timeout);
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
        await client.expireAsync(`carrito-${user}`, timeout);
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
      await client.expireAsync(`carrito-${user}`, timeout);

      let response = await client.getAsync(`carrito-${user}`);
      client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  validar: async (req, res) => {
    try {
      let user = req.body.user;
      let token = req.body.token;
      let reservaId = req.body.reservaId;
      let client = carritoController.getClient();
      let ip = req.headers["x-forwarded-for"];
      let cacheCart = await client.getAsync(`carrito-${user}`);
      let loteriaCacheLength = Object.keys(cacheCart.loteria).length;
      let lottoCacheLength = Object.keys(cacheCart.lotto).length;
      let pozoCacheLength = Object.keys(cacheCart.pozo).length;
      let carritoCacheLength = cacheCart.carrito.length;
      let carritoCacheAux =
        loteriaCacheLength + lottoCacheLength + pozoCacheLength;

      client.quit();
      let loteriaCart = await reservas.validarReserva(
        token,
        reservaId,
        user,
        ip
      );
      let loteriaLoteriaLength = Object.keys(loteriaCart.loteria).length;
      let lottoLoteriaLength = Object.keys(loteriaCart.lotto).length;
      let pozoLoteriaLength = Object.keys(loteriaCart.pozo).length;
      let carritoLoteriaLength = loteriaCart.carrito.length;
      let carritoLoteriaAux =
        loteriaLoteriaLength + lottoLoteriaLength + pozoLoteriaLength;
      if (carritoCacheLength != carritoLoteriaLength) {
      }
      if (carritoCacheAux != carritoLoteriaAux) {
        if (loteriaCacheLength != loteriaLoteriaLength) {
          if (loteriaCacheLength > loteriaLoteriaLength) {
              //reservar en loteria
          } else {
              //agregar al carrito

          }
        }
        if (lottoCacheLength != lottoLoteriaLength) {
          if (lottoCacheLength > lottLoteriaLength) {
          } else {

          }
      
        }
        if (pozoCacheLength != pozoLoteriaLength) {
          if (pozoCacheLength > pozoLoteriaLength) {
          } else {

          }

        }
      }
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = carritoController;
