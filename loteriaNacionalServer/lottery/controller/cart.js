const redis = require("redis");
const reservas = require("../../loterianacional/controller/reservas");
const { promisifyAll } = require("bluebird");
const Ventas = require("../../loterianacional/controller/ventas");
const Cache = require("../../cache/controller/main");

promisifyAll(redis.RedisClient.prototype);
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
  updateCart: async (carrito) => {
    let client = carritoController.getClient();
    await client.setAsync(`carrito-${carrito.user}`, JSON.stringify(carrito));
    await client.expireAsync(`carrito-${carrito.user}`, timeout);
    let response = await client.getAsync(`carrito-${carrito.user}`);
    client.quit();
    return response;
  },
  actualizarCarrito: async (req, res) => {
    try {
      let carritoAux = {
        loteria: req.body.loteria,
        lotto: req.body.lotto,
        pozo: req.body.pozo,
        millonaria: req.body.millonaria,
        carrito: req.body.carrito,
        total: req.body.total,
        reservaId: req.body.reservaId,
        user: req.body.user,
      };
      let response = await carritoController.updateCart(carritoAux);
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
          millonaria: {},
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
        millonaria: {},
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
      let millonariaCache;
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
      if (
        Object.keys(cacheCart.millonaria).length !== 0 &&
        Object.getPrototypeOf(cacheCart.millonaria) === Object.prototype
      ) {
        millonariaCache = Object.values(cacheCart.millonaria);
      } else {
        millonariaCache = [];
      }

      let loteriaCart = await reservas.validarReservas(
        token,
        reservaId,
        user,
        ip
      );

      /* VALIDACIÓN DE LOTERIA */

      let auxLoteria1 = loteriaCache.filter((item) => {
        let index = loteriaCart.loteria.findIndex(
          (loteria) => loteria.combinacion == item.ticket.combinacion
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxLoteria1.length; i++) {
        let item = auxLoteria1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion,
            fracciones: item.ticket.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        await reservas.reservarCombinaciones(
          boleto,
          [],
          [],
          [],
          token,
          reservaId,
          user,
          ip
        );
      }
      let auxLoteria2 = loteriaCart.loteria.filter((item) => {
        let index = loteriaCache.findIndex(
          (loteria) => item.combinacion == loteria.ticket.combinacion
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxLoteria2.length; i++) {
        let item = auxLoteria2[i];
        let identificador = Math.random();
        let loteriaSorteos = await Cache.getLoteriaSorteosDisponibles();
        let sorteo = loteriaSorteos.filter((loteria) => {
          if (loteria.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let seleccionados = item.fracciones.map((fraccion) => {
          return fraccion.fraccion;
        });
        let boleto = {
          identificador,
          ticket: {
            combinacion: item.combinacion,
            display: item.combinacion.split(""),
            identificador,
            seleccionados,
          },
          sorteo,
          subtotal: parseFloat(sorteo.precio) * seleccionados.length,
          tipoLoteria: 1,
        };
        cacheCart.loteria[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await carritoController.updateCart(cacheCart);
      }
      let seleccionadosProblema;
      let auxLoteriaFracciones1 = loteriaCache.reduce(function (
        filtered,
        item
      ) {
        let index = loteriaCart.loteria.findIndex(
          (loteria) => loteria.combinacion == item.ticket.combinacion
        );
        let flag = false;
        if (index != -1) {
          seleccionadosProblema = item.ticket.seleccionados.filter(
            (fraccion) => {
              let indexB = loteriaCart.loteria[index].fracciones.findIndex(
                (loteria) => loteria.fraccion == fraccion
              );
              if (indexB == -1) {
                flag = true;
                return true;
              }
              return false;
            }
          );
          if (flag) {
            filtered.push(item);
          }
        }

        return filtered;
      },
      []);

      for (let i = 0; i < auxLoteriaFracciones1.length; i++) {
        let item = auxLoteriaFracciones1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion,
            fracciones: seleccionadosProblema,
            sorteo: item.sorteo,
          },
        ];
        await reservas.reservarCombinaciones(
          boleto,
          [],
          [],
          [],
          token,
          reservaId,
          user,
          ip
        );
      }
      let auxLoteriaFracciones2 = loteriaCart.loteria.reduce(function (
        filtered,
        item
      ) {
        let index = loteriaCache.findIndex(
          (loteria) => loteria.ticket.combinacion == item.combinacion
        );
        if (index != -1) {
          let flag = false;
          let seleccionados = [];
          let identificador;
          item.fracciones = item.fracciones.filter((fraccion) => {
            let indexB = loteriaCache[index].ticket.seleccionados.findIndex(
              (loteria) => loteria == fraccion.fraccion
            );
            if (indexB == -1) {
              flag = true;
              seleccionados.push(fraccion.fraccion);
              identificador = loteriaCache[index].identificador;
              return true;
            }
            return false;
          });
          if (flag) {
            item.fracciones = item.fracciones.map((data) => {
              return data.fraccion;
            });
            item["seleccionados"] = seleccionados;
            item["identificador"] = identificador;
            item["index"] = index;
            filtered.push(item);
          }
        }
        return filtered;
      },
      []);

      for (let i = 0; i < auxLoteriaFracciones2.length; i++) {
        let item = auxLoteriaFracciones2[i];
        let identificador = item.identificador;
        let index = item.index;
        let loteriaSorteos = await Cache.getLoteriaSorteosDisponibles();
        let sorteo = loteriaSorteos.filter((loteria) => {
          if (loteria.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let seleccionados = item.seleccionados;
        loteriaCache[index].ticket.seleccionados =
          loteriaCache[index].ticket.seleccionados.concat(seleccionados);
        loteriaCache[index].fracciones =
          loteriaCache[index].fracciones.concat(seleccionados);
        loteriaCache[index].subtotal +=
          parseFloat(sorteo.precio) * seleccionados.length;
        cacheCart.loteria[identificador] = loteriaCache[index];

        let indexC = cacheCart.carrito.findIndex(
          (carrito) =>
            carrito.ticket.combinacion == loteriaCache[index].ticket.combinacion
        );
        cacheCart.carrito[indexC] = loteriaCache[index];
        cacheCart.total += parseFloat(sorteo.precio) * seleccionados.length;
        await carritoController.updateCart(cacheCart);
      }


      /* VALIDACIÓN DE LOTTO */

      let auxLotto1 = lottoCache.filter((item) => {
        let index = loteriaCart.lotto.findIndex(
          (lotto) => lotto.combinacion == item.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxLotto1.length; i++) {
        let item = auxLotto1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion1,
            fracciones: item.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        let info = await reservas.reservarCombinaciones(
          //await Ventas.reservarCombinaciones(
          [],
          boleto,
          [],
          [],
          token,
          reservaId,
          user,
          ip
        );
      }

      let auxLotto2 = loteriaCart.lotto.filter((item) => {
        let index = lottoCache.findIndex(
          (lotto) => item.combinacion == lotto.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxLotto2.length; i++) {
        let item = auxLotto2[i];
        let identificador = Math.random();
        let lottoSorteos = await Cache.getLottoSorteosDisponibles();
        let sorteo = lottoSorteos.filter((lotto) => {
          if (lotto.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let boleto = {
          identificador,
          ticket: {
            combinacion1: item.combinacion,
            combinacion2: item.combinacion2,
            combinacion3: item.combinacion3,
            combinacion4: item.combinacion4,
            combinacion5: item.combinacion5,
            display: item.combinacion.split(""),
            identificador,
          },
          sorteo,
          subtotal: sorteo.precio,
          tipoLoteria: 2,
        };
        cacheCart.lotto[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await carritoController.updateCart(cacheCart);
      }

      /* VALIDACIÓN DE POZO */

      let auxPozo1 = pozoCache.filter((item) => {
        let index = loteriaCart.pozo.findIndex(
          (pozo) => pozo.combinacion == item.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxPozo1.length; i++) {
        let item = auxPozo1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion1,
            fracciones: item.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        await reservas.reservarCombinaciones(
          [],
          [],
          boleto,
          [],
          token,
          reservaId,
          user,
          ip
        );
      }

      let auxPozo2 = loteriaCart.pozo.filter((item) => {
        let index = pozoCache.findIndex(
          (pozo) => item.combinacion == pozo.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxPozo2.length; i++) {
        let item = auxPozo2[i];
        let identificador = Math.random();
        let pozoSorteos = await Cache.getPozoSorteosDisponibles();
        let sorteo = pozoSorteos.filter((pozo) => {
          if (pozo.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let boleto = {
          identificador,
          ticket: {
            combinacion1: item.combinacion,
            combinacion2: item.combinacion2,
            mascota: item.combinacion3,
            display: item.combinacion.split(""),
            identificador,
          },
          sorteo,
          subtotal: sorteo.precio,
          tipoLoteria: 5,
        };
        cacheCart.pozo[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await carritoController.updateCart(cacheCart);
      }

      /* VALIDACIÓN DE LA MILLONARIA */

      let auxMillonaria1 = millonariaCache.filter((item) => {
        let index = loteriaCart.millonaria.findIndex(
          (millonaria) => (millonaria.combinacion == item.ticket.combinacion1 && millonaria.combinacion2 == item.ticket.combinacion2)
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxMillonaria1.length; i++) {
        let item = auxMillonaria1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion1,
            combinacion2: item.ticket.combinacion2,
            fracciones: item.ticket.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        await reservas.reservarCombinaciones(
          [],
          [],
          [],
          boleto,
          token,
          reservaId,
          user,
          ip
        );
      }
      let auxMillonaria2 = loteriaCart.millonaria.filter((item) => {
        let index = millonariaCache.findIndex(
          (millonaria) => 
          (item.combinacion == millonaria.ticket.combinacion1 && item.combinacion2 == millonaria.ticket.combinacion2)
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxMillonaria2.length; i++) {
        let item = auxMillonaria2[i];
        let identificador = Math.random();
        let millonariaSorteos = await Cache.getMillonariaSorteosDisponibles();
        let sorteo = millonariaSorteos.filter((millonaria) => {
          if (millonaria.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let seleccionados = item.fracciones.map((fraccion) => {
          return fraccion.fraccion;
        });
        let boleto = {
          identificador,
          ticket: {
            
            combinacion1: item.combinacion,
            combinacion2: item.combinacion2,
            display: item.combinacion.split(""),
            identificador,
            seleccionados,
          },
          sorteo,
          subtotal: parseFloat(sorteo.precio) * seleccionados.length,
          tipoLoteria: 14,
        };
        cacheCart.millonaria[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await carritoController.updateCart(cacheCart);
      }
      let seleccionadosProblemaMillonaria;
      let auxMillonariaFracciones1 = millonariaCache.reduce(function (
        filtered,
        item
      ) {
        let index = loteriaCart.millonaria.findIndex(
          (millonaria) => (millonaria.combinacion == item.ticket.combinacion1 && millonaria.combinacion2 == item.ticket.combinacion2)
        );
        let flag = false;
        if (index != -1) {
          seleccionadosProblemaMillonaria = item.ticket.seleccionados.filter(
            (fraccion) => {
              let indexB = loteriaCart.millonaria[index].fracciones.findIndex(
                (millonaria) => millonaria.fraccion == fraccion
              );
              if (indexB == -1) {
                flag = true;
                return true;
              }
              return false;
            }
          );
          if (flag) {
            filtered.push(item);
          }
        }

        return filtered;
      },
      []);

      for (let i = 0; i < auxMillonariaFracciones1.length; i++) {
        let item = auxMillonariaFracciones1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion,
            combinacion2: item.ticket.combinacion2,
            fracciones: seleccionadosProblemaMillonaria,
            sorteo: item.sorteo,
          },
        ];
        await reservas.reservarCombinaciones(
          [],
          [],
          [],
          boleto,
          token,
          reservaId,
          user,
          ip
        );
      }
      let auxMillonariaFracciones2 = loteriaCart.millonaria.reduce(function (
        filtered,
        item
      ) {
        let index = millonariaCache.findIndex(
          (millonaria) => (millonaria.ticket.combinacion1 == item.combinacion && millonaria.ticket.combinacion2 == item.combinacion2)
        );
        if (index != -1) {
          let flag = false;
          let seleccionados = [];
          let identificador;
          item.fracciones = item.fracciones.filter((fraccion) => {
            let indexB = millonariaCache[index].ticket.seleccionados.findIndex(
              (millonaria) => millonaria == fraccion.fraccion
            );
            if (indexB == -1) {
              flag = true;
              seleccionados.push(fraccion.fraccion);
              identificador = millonariaCache[index].identificador;
              return true;
            }
            return false;
          });
          if (flag) {
            item.fracciones = item.fracciones.map((data) => {
              return data.fraccion;
            });
            item["seleccionados"] = seleccionados;
            item["identificador"] = identificador;
            item["index"] = index;
            filtered.push(item);
          }
        }
        return filtered;
      },
      []);

      for (let i = 0; i < auxMillonariaFracciones2.length; i++) {
        let item = auxMillonariaFracciones2[i];
        let identificador = item.identificador;
        let index = item.index;
        let millonariaSorteos = await Cache.getMillonariaSorteosDisponibles();
        let sorteo = millonariaSorteos.filter((millonaria) => {
          if (millonaria.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let seleccionados = item.seleccionados;
        millonariaCache[index].ticket.seleccionados =
        millonariaCache[index].ticket.seleccionados.concat(seleccionados);
        millonariaCache[index].fracciones =
        millonariaCache[index].fracciones.concat(seleccionados);
        millonariaCache[index].subtotal +=
          parseFloat(sorteo.precio) * seleccionados.length;
        cacheCart.millonaria[identificador] = millonariaCache[index];

        let indexC = cacheCart.carrito.findIndex(
          (carrito) =>
            carrito.ticket.combinacion == millonariaCache[index].ticket.combinacion
        );
        cacheCart.carrito[indexC] = millonariaCache[index];
        cacheCart.total += parseFloat(sorteo.precio) * seleccionados.length;
        await carritoController.updateCart(cacheCart);
      }

      client.quit();
      if (
        auxLoteria1.length ||
        auxLoteria2.length ||
        auxLoteriaFracciones1.length ||
        auxLoteriaFracciones2.length ||
        auxLotto1.length ||
        auxLotto2.length ||
        auxPozo1.length ||
        auxPozo2.length||
        auxMillonaria1.length ||
        auxMillonaria2.length ||
        auxMillonariaFracciones1.length ||
        auxMillonariaFracciones2.length
        ) {
        flag = false;
      }
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
