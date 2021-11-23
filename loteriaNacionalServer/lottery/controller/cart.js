const redis = require("redis");
const reservas = require("../../loterianacional/controller/reservas");
const { promisifyAll } = require("bluebird");

promisifyAll(redis);
let timeout = 60*40;
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
      let flag = true;
      let user = req.body.user;
      let token = req.body.token;
      let reservaId = req.body.reservaId;
      let client = carritoController.getClient();
      let ip = req.headers["x-forwarded-for"];
      let cacheCart = JSON.parse(await client.getAsync(`carrito-${user}`));
      let loteriaCache;
      let lottoCache;
      let pozoCache;
      if (
        Object.keys(cacheCart.loteria).length !== 0 &&
        Object.getPrototypeOf(cacheCart.loteria) === Object.prototype
      ) {
        loteriaCache = Object.values(cacheCart.loteria);
      } else {
        loteriaCache = [];
      }

      if (
        Object.keys(cacheCart.lotto).length !== 0 &&
        Object.getPrototypeOf(cacheCart.lotto) === Object.prototype
      ) {
        lottoCache = Object.values(cacheCart.lotto);
      } else {
        lottoCache = [];
      }
      if (
        Object.keys(cacheCart.pozo).length !== 0 &&
        Object.getPrototypeOf(cacheCart.pozo) === Object.prototype
      ) {
        pozoCache = Object.values(cacheCart.pozo);
      } else {
        pozoCache = [];
      }

      let loteriaCacheLength = loteriaCache.length;
      let lottoCacheLength = lottoCache.length;
      let pozoCacheLength = pozoCache.length;
      let carritoCacheLength = cacheCart.carrito.length;
      let carritoCacheAux =
        loteriaCacheLength + lottoCacheLength + pozoCacheLength;

      let loteriaCart = await reservas.validarReservas(
        token,
        reservaId,
        user,
        ip
      );
      let loteriaLoteriaLength = loteriaCart.loteria.length;
      let lottoLoteriaLength = loteriaCart.lotto.length;
      let pozoLoteriaLength = loteriaCart.pozo.length;
      let carritoLoteriaLength = loteriaCart.carrito.length;
      let carritoLoteriaAux =
        loteriaLoteriaLength + lottoLoteriaLength + pozoLoteriaLength;
      /*      if (carritoCacheLength != carritoLoteriaLength) {
        if (carritoCacheLength > carritoLoteriaLength) {
          for (let i = 0; i < carritoCacheLength; i++) {
            let item = cacheCart.carrito[i];
            let index = loteriaCart.carrito.findIndex(
              (boleto) => boleto.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              //Reservar en loteria
            }
          }
        } else {
          for (let i = 0; i < carritoLoteriaLength; i++) {
            let item = loteriaCart.carrito[i];
            let index = cacheCart.carrito.findIndex(
              (boleto) => boleto.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      } */
      if (loteriaCacheLength != loteriaLoteriaLength) {
        flag = false;
        if (loteriaCacheLength > loteriaLoteriaLength) {
          for (let i = 0; i < loteriaCacheLength; i++) {
            let item = loteriaCache[i];
            let index = loteriaCart.loteria.findIndex(
              (loteria) => loteria.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              let boleto = [
                {
                  combinacion: item.ticket.combinacion,
                  fracciones: item.seleccionados,
                  sorteo: item.sorteo,
                },
              ];
              await reservas.reservarCombinaciones(
                boleto,
                [],
                [],
                token,
                reservaId,
                user,
                ip
              );

              //Reservar en loteria
            }
          }
        } else {
          for (let i = 0; i < loteriaLoteriaLength; i++) {
            let item = loteriaCart.loteria[i];
            let index = loteriaCache.findIndex(
              (loteria) => loteria.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      } else {
        for (let i = 0; i < loteriaCacheLength; i++) {
          let item = loteriaCache[i];
          let index = loteriaCart.loteria.findIndex(
            (loteria) => loteria.combinacion == item.ticket.combinacion
          );
          if (index != -1) {
            let loteriaItem = loteriaCart.loteria[index];
            let cacheLength = item.ticket.seleccionados.length;
            let loteriaLength = loteriaItem.fracciones.length;
            if (loteriaLength != cacheLength) {
              flag = false;
              if (cacheLength > loteriaLength) {
                for (let j = 0; j < cacheLength; j++) {
                  let itemB = item.ticket.seleccionados[j];
                  let indexB = loteriaItem.fracciones.indexOf(itemB);
                  if (indexB == -1) {
                    let boleto = [
                      {
                        combinacion: item.ticket.combinacion,
                        fracciones: [itemB],
                        sorteo: item.sorteo,
                      },
                    ];
                    await reservas.reservarCombinaciones(
                      boleto,
                      [],
                      [],
                      token,
                      reservaId,
                      user,
                      ip
                    );
                    //Reservar en loteria
                  }
                }
              } else {
                for (let i = 0; i < lottoLoteriaLength; i++) {
                  let itemB = loteriaItem.seleccionados[i];
                  let indexB = itemB.seleccionados.indexOf(itemB);
                  if (indexB == -1) {
                    //Agregar al carrito
                  }
                }
              }
            }
          }
        }
        //Chequeo de fracciones.
      }
      if (lottoCacheLength != lottoLoteriaLength) {
        flag = false;
        if (lottoCacheLength > lottLoteriaLength) {
          for (let i = 0; i < lottoCacheLength; i++) {
            let item = lottoCache[i];
            let index = loteriaCart.lotto.findIndex(
              (lotto) => lotto.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              await reservas.reservarCombinaciones();
              let boleto = [
                {
                  combinacion: item.ticket.combinacion,
                  sorteo: item.sorteo,
                },
              ];
              await reservas.reservarCombinaciones(
                [],
                boleto,
                [],
                token,
                reservaId,
                user,
                ip
              );

              //Reservar en loteria
            }
          }
        } else {
          for (let i = 0; i < lottoLoteriaLength; i++) {
            let item = loteriaCart.lotto[i];
            let index = lottoCache.findIndex(
              (lotto) => lotto.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      }
      if (pozoCacheLength != pozoLoteriaLength) {
        flag = false;
        if (pozoCacheLength > pozoLoteriaLength) {
          for (let i = 0; i < pozoCacheLength; i++) {
            let item = pozoCache[i];
            let index = loteriaCart.pozo.findIndex(
              (pozo) => pozo.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              let boleto = [
                {
                  combinacion: item.ticket.combinacion,
                  sorteo: item.sorteo,
                },
              ];
              await reservas.reservarCombinaciones(
                [],
                [],
                boleto,
                token,
                reservaId,
                user,
                ip
              );

              //Reservar en loteria
            }
          }
        } else {
          for (let i = 0; i < pozoLoteriaLength; i++) {
            let item = loteriaCart.pozo[i];
            let index = pozoCache.findIndex(
              (pozo) => pozo.combinacion == item.ticket.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      }
      client.quit();
      let message = flag
        ? ""
        : "Ha ocurrido un problema con tu carrito. Por favor, verifica tus boletos e intenta de nuevo.";
      let response = {
        status: flag,
        message,
      };
      res.status(200).json(response);
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
