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
      let loteriaCache = Object.values(cacheCart.loteria);
      let lottoCache = Object.values(cacheCart.lotto);
      let pozoCache = Object.values(cacheCart.pozo);

      let loteriaCacheLength = loteriaCache.length;
      let lottoCacheLength = lottoCache.length;
      let pozoCacheLength = pozoCache.length;
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
              (boleto) => boleto.combinacion == item.combinacion
            );
            if (index == -1) {
              //Reservar en loteria
            }
          }
        } else {
          for (let i = 0; i < carritoLoteriaLength; i++) {
            let item = loteriaCart.carrito[i];
            let index = cacheCart.carrito.findIndex(
              (boleto) => boleto.combinacion == item.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      } */
      if (loteriaCacheLength != loteriaLoteriaLength) {
        if (loteriaCacheLength > loteriaLoteriaLength) {
          for (let i = 0; i < loteriaCacheLength; i++) {
            let item = loteriaCache[i];
            let index = loteriaCart.loteria.findIndex(
              (loteria) => loteria.combinacion == item.combinacion
            );
            if (index == -1) {
              let boleto = [
                {
                  combinacion: item.combinacion,
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
              (loteria) => loteria.combinacion == item.combinacion
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
            (loteria) => loteria.combinacion == item.combinacion
          );
          if (index != -1) {
            let loteriaItem = loteriaCart.loteria[i];
            let cacheLength = item.seleccionados.length;
            let loteriaLength = loteriaItem.seleccionados.length;
            if (loteriaLength != cacheLength) {
              if (cacheLength > loteriaLength) {
                for (let i = 0; i < cacheLength; i++) {
                  let itemB = itemB.seleccionados[i];
                  let indexB = loteriaItem.seleccionados.indexOf(itemB);
                  if (indexB == -1) {
                    let boleto = [
                      {
                        combinacion: item.combinacion,
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
        if (lottoCacheLength > lottLoteriaLength) {
          for (let i = 0; i < lottoCacheLength; i++) {
            let item = lottoCache[i];
            let index = loteriaCart.lotto.findIndex(
              (lotto) => lotto.combinacion == item.combinacion
            );
            if (index == -1) {
              await reservas.reservarCombinaciones();
              let boleto = [
                {
                  combinacion: item.combinacion,
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
              (lotto) => lotto.combinacion == item.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
          }
        }
      }
      if (pozoCacheLength != pozoLoteriaLength) {
        if (pozoCacheLength > pozoLoteriaLength) {
          for (let i = 0; i < pozoCacheLength; i++) {
            let item = pozoCache[i];
            let index = loteriaCart.pozo.findIndex(
              (pozo) => pozo.combinacion == item.combinacion
            );
            if (index == -1) {
              let boleto = [
                {
                  combinacion: item.combinacion,
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
              (pozo) => pozo.combinacion == item.combinacion
            );
            if (index == -1) {
              //Agregar al carrito
            }
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
