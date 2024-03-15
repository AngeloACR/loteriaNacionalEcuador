const psdReservas = require("../../psdLoteria/reservas");
const CacheLoteria = require("../../sorteosLoteriaNacional/controller/cache");
const CacheLotto = require("../../sorteosLotto/controller/cache");
const CachePozo = require("../../sorteosPozoMillonario/controller/cache");
const CacheBingazo = require("../../sorteosBingazo/controller/cache");
const Descuentos = require("../../descuentos/models/main");
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
  applyDiscounts: async (carrito) => {
    try {
      let descuentosActivos = await Descuentos.getActives();
      carrito.carrito = carrito.carrito.map((item) => {
        item["subtotalConDescuento"] = item.subtotal;
        return item;
      });
      descuentosActivos.forEach((descuento) => {
        let itemsWithDescuento = carrito.carrito.filter((item) =>
          descuento.sorteos.includes(item.sorteo.sorteo)
        );
        let itemsTotal = itemsWithDescuento.reduce(
          (total, item) => total + parseFloat(item.subtotal),
          0
        );

        itemsWithDescuento = itemsWithDescuento.map((item) => {
          item["subtotalConDescuento"] =
            itemsTotal >= descuento.minimum
              ? parseFloat(item.subtotal) - parseFloat(descuento.discount)
              : item.subtotal;
          return item;
        });
        carrito.carrito = carrito.carrito.map((item) => {
          let index = itemsWithDescuento.findIndex(
            (itemWithDescuento) =>
              item.identificador === itemWithDescuento.identificador
          );
          item["subtotalConDescuento"] =
            index == -1
              ? item.subtotal
              : itemsWithDescuento[index].subtotalConDescuento;
          return item;
        });
      });
      carrito.carrito.forEach((item) => {
        if (item.tipoLoteria == 1) {
          carrito.loteria[item.identificador]["subtotalConDescuento"] =
            item.subtotalConDescuento;
        }
        if (item.tipoLoteria == 2) {
          carrito.lotto[item.identificador]["subtotalConDescuento"] =
            item.subtotalConDescuento;
        }
        if (item.tipoLoteria == 5) {
          carrito.pozo[item.identificador]["subtotalConDescuento"] =
            item.subtotalConDescuento;
        }
        if (item.tipoLoteria == 17) {
          carrito.pozoRevancha[item.identificador]["subtotalConDescuento"] =
            item.subtotalConDescuento;
        }
        if (item.tipoLoteria == 12) {
          carrito.bingazo[item.identificador]["subtotalConDescuento"] =
            item.subtotalConDescuento;
        }
      });
      carrito["totalConDescuento"] = carrito.carrito.reduce(
        (total, item) => total + parseFloat(item.subtotalConDescuento),
        0
      );
      return carrito;
    } catch (error) {
      throw error;
    }
  },
  actualizarCarrito: async (req, res) => {
    try {
      let carritoAux = {
        loteria: req.body.loteria,
        lotto: req.body.lotto,
        pozo: req.body.pozo,
        pozoRevancha: req.body.pozoRevancha,
        bingazo: req.body.bingazo,
        carrito: req.body.carrito,
        total: req.body.total,
        reservaId: req.body.reservaId,
        user: req.body.user,
      };
      carritoAux = await cacheController.applyDiscounts(carritoAux);
      let response = await cacheController.updateCart(carritoAux);
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
      let timeout = 60 * 40;
      let client = redis.getClient();
      await client.connect();
      let response = await client.get(`carrito-${user}`);
      if (!response) {
        let carrito = {
          loteria: {},
          lotto: {},
          pozo: {},
          pozoRevancha: {},
          bingazo: {},
          carrito: [],
          total: 0,
          reservaId: 0,
          user,
        };
        await client.set(`carrito-${user}`, JSON.stringify(carrito));
        await client.expire(`carrito-${user}`, timeout);
        response = await client.get(`carrito-${user}`);
      }
      await client.quit();
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
      let response = await cacheController.borrarCarrito(
        req.body.user,
        req.body.token,
        req.body.reservaId,
        req.headers["x-forwarded-for"]
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  borrarCarrito: async (user, token, reservaId, ip) => {
    try {
      let timeout = 60 * 40;
      let client = redis.getClient();
      await client.connect();

      let carrito = {
        loteria: {},
        lotto: {},
        pozo: {},
        pozoRevancha: {},
        bingazo: {},
        carrito: [],
        total: 0,
        reservaId: 0,
        user,
      };
      await client.set(`carrito-${user}`, JSON.stringify(carrito));
      await client.expire(`carrito-${user}`, timeout);

      response = await client.get(`carrito-${user}`);
      await client.quit();
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
      let client = redis.getClient();
      await client.connect();
      let ip = req.headers["x-forwarded-for"];

      let cacheCart = JSON.parse(await client.get(`carrito-${user}`));
      let loteriaCache;
      let lottoCache;
      let pozoCache;
      let pozoRevanchaCache;
      let bingazoCache;
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
        Object.keys(cacheCart.pozoRevancha).length !== 0 &&
        Object.getPrototypeOf(cacheCart.pozoRevancha) === Object.prototype
      ) {
        pozoRevanchaCache = Object.values(cacheCart.pozoRevancha);
      } else {
        pozoRevanchaCache = [];
      }
      if (
        Object.keys(cacheCart.bingazo).length !== 0 &&
        Object.getPrototypeOf(cacheCart.bingazo) === Object.prototype
      ) {
        bingazoCache = Object.values(cacheCart.bingazo);
      } else {
        bingazoCache = [];
      }

      let loteriaCart = await psdReservas.validarReservas(
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
        await psdReservas.reservarCombinaciones(
          boleto,
          [],
          [],
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
        let loteriaSorteos = await CacheLoteria.getSorteosDisponibles();
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
        await cacheController.updateCart(cacheCart);
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
        await psdReservas.reservarCombinaciones(
          boleto,
          [],
          [],
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
        let loteriaSorteos = await CacheLoteria.getSorteosDisponibles();
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
        await cacheController.updateCart(cacheCart);
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
        let info = await psdReservas.reservarCombinaciones(
          [],
          boleto,
          [],
          [],
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
        let lottoSorteos = await CacheLotto.getSorteosDisponibles();
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
        await cacheController.updateCart(cacheCart);
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
        await psdReservas.reservarCombinaciones(
          [],
          [],
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
        let pozoSorteos = await CachePozo.getSorteosDisponibles();
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
        await cacheController.updateCart(cacheCart);
      }

      /* VALIDACIÓN DE POZO REVANCHA */

      let auxPozoRevancha1 = pozoRevanchaCache.filter((item) => {
        let index = loteriaCart.pozoRevancha.findIndex(
          (pozoRevancha) => pozoRevancha.combinacion == item.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxPozoRevancha1.length; i++) {
        let item = auxPozoRevancha1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion1,
            fracciones: item.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        await psdReservas.reservarCombinaciones(
          [],
          [],
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

      let auxPozoRevancha2 = loteriaCart.pozoRevancha.filter((item) => {
        let index = pozoRevanchaCache.findIndex(
          (pozoRevancha) => item.combinacion == pozoRevancha.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxPozoRevancha2.length; i++) {
        let item = auxPozoRevancha2[i];
        let identificador = Math.random();
        let pozoRevanchaSorteos =
          await CachePozoRevancha.getSorteosDisponibles();
        let sorteo = pozoRevanchaSorteos.filter((pozoRevancha) => {
          if (pozoRevancha.sorteo == item.sorteo) {
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
        cacheCart.pozoRevancha[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await cacheController.updateCart(cacheCart);
      }

      /* VALIDACIÓN DE BINGAZO */

      let auxBingazo1 = bingazoCache.filter((item) => {
        let index = loteriaCart.bingazo.findIndex(
          (bingazo) => bingazo.combinacion == item.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxBingazo1.length; i++) {
        let item = auxBingazo1[i];
        let boleto = [
          {
            combinacion: item.ticket.combinacion1,
            fracciones: item.seleccionados,
            sorteo: item.sorteo,
          },
        ];
        await psdReservas.reservarCombinaciones(
          [],
          [],
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

      let auxBingazo2 = loteriaCart.bingazo.filter((item) => {
        let index = bingazoCache.findIndex(
          (bingazo) => item.combinacion == bingazo.ticket.combinacion1
        );
        if (index == -1) {
          return true;
        }
        return false;
      });
      for (let i = 0; i < auxBingazo2.length; i++) {
        let item = auxBingazo2[i];
        let identificador = Math.random();
        let bingazoSorteos = await CacheBingazo.getSorteosDisponibles();
        let sorteo = bingazoSorteos.filter((bingazo) => {
          if (bingazo.sorteo == item.sorteo) {
            return true;
          }
          return false;
        })[0];
        let boleto = {
          identificador,
          ticket: {
            combinacion1: item.combinacion,
            combinacion2: item.combinacion2,
            fruta: item.combinacion3,
            display: item.combinacion.split(""),
            identificador,
          },
          sorteo,
          subtotal: sorteo.precio,
          tipoLoteria: 12,
        };
        cacheCart.bingazo[identificador] = boleto;
        cacheCart.carrito.push(boleto);
        cacheCart.total += parseFloat(boleto.subtotal);
        await cacheController.updateCart(cacheCart);
      }

      await client.quit();
      if (
        auxLoteria1.length ||
        auxLoteria2.length ||
        auxLoteriaFracciones1.length ||
        auxLoteriaFracciones2.length ||
        auxLotto1.length ||
        auxLotto2.length ||
        auxPozo1.length ||
        auxPozo2.length ||
        auxPozoRevancha1.length ||
        auxPozoRevancha2.length ||
        auxBingazo1.length ||
        auxBingazo2.length
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

module.exports = cacheController;
