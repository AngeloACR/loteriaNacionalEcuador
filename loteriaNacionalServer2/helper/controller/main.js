const psdAuth = require("../../psdLoteria/codigosPromocionales");
const Alerta = require("../../correos/alertaDeResultados");
const db = require("../database").db;
const masterLoteria = require("../../sorteosLoteriaNacional/models/master");
const masterLotto = require("../../sorteosLotto/models/master");
const masterPozo = require("../../sorteosPozoMillonario/models/master");
const masterMillonaria = require("../../sorteosLaMillonaria/models/master");
const SorteosLoteria = require("../../sorteosLoteriaNacional/models/sorteo");
const SorteosLotto = require("../../sorteosLotto/models/sorteo");
const SorteosPozoMillonario = require("../../sorteosPozoMillonario/models/sorteo");
const SorteosLaMillonaria = require("../../sorteosLaMillonaria/models/sorteo");
const CacheLoteria = require("../../sorteosLoteriaNacional/controller/cache"); // COMUNICAR POR gRPC
const CacheLotto = require("../../sorteosLotto/controller/cache"); // COMUNICAR POR gRPC
const CachePozo = require("../../sorteosPozoMillonario/controller/cache"); // COMUNICAR POR gRPC
const CacheLaMillonaria = require("../../sorteosLaMillonaria/controller/cache"); // COMUNICAR POR gRPC
const Wallet = require("../../exalogic/wallet"); // COMUNICAR POR gRPC
const Ganadores = require("../../ganadores/models/main"); // COMUNICAR POR gRPC
const Ventas = require("../../ventas/models/main"); // COMUNICAR POR gRPC
const ventasController = require("../../ventas/controller/main"); // COMUNICAR POR gRPC
const fs = require("fs").promises;
const path = require("path");
const { helperLogger } = require("../logging");
const ipTool = require("ip");

/*************************** HERRAMIENTAS DE APOYO PARA SOPORTE TECNICO DEL SISTEMA ************************/
function diff_hours(dt2, dt1) {
  if (dt2 == "Invalid Date" || dt1 == "Invalid Date") return true;
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  let response = Math.abs(Math.round(diff)) > 15;
  return response;
}
const helperController = {
  corregirTransaccion: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        let reservaId = element.reservaId;
        let token = element.token;
        let reservationDetails = element.reservationDetails;
        let ventaData = await Reservas.getCompraByExaReservaId(reservaId);
        if (ventaData.status) {
          let venta = ventaData.values;
          let saldoData = await Wallet.getBalance({ token });
          let loteria = venta.loteria;
          let total = 0;
          for (let index = 0; index < loteria.length; index++) {
            const boleto = loteria[index];
            total += parseFloat(boleto.subtotal);
          }
          let lotto = venta.lotto;
          for (let index = 0; index < lotto.length; index++) {
            const boleto = lotto[index];
            total += parseFloat(boleto.subtotal);
          }
          let pozo = venta.pozo;
          for (let index = 0; index < pozo.length; index++) {
            const boleto = pozo[index];
            total += parseFloat(boleto.subtotal);
          }
          if (total <= saldoData.balance) {
            let exaCancelId = Date.now();
            let exaCancelData = {
              token: token,
              transactionId: exaCancelId,
              reserveId: reservaId,
              amount: parseFloat(total).toFixed(2),
            };
            let exaCancelResponse = await Wallet.cancelLottery(exaCancelData);
            let exaReservaId = Date.now();
            let exaReservaData = {
              token,
              transactionId: exaReservaId,
              amount: parseFloat(total).toFixed(2),
              reservationDetails,
            };
            let exaReservaResponse = await Wallet.reserveLottery(
              exaReservaData
            );
            let exaVentaId = Date.now();
            let exaVentaData = {
              token,
              transactionId: exaVentaId,
              reserveId: exaReservaId,
              ticketId: venta.ventaId,
              amount: parseFloat(total).toFixed(2),
              prizeDetails: [],
            };
            let exaVentaResponse = await Wallet.sellLottery(exaVentaData);
            response.push({
              hasBalance: true,
              exaReservaId: reservaId,
              ventaId: venta.ventaId,
              exaReservaResponse,
              exaVentaResponse,
              exaCancelResponse,
              total,
            });
          } else {
            response.push({
              hasBalance: false,
              reservaId,
              ventaId: venta.ventaId,
              total,
            });
          }
        }
      }
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  corregirVenta: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element.hasBalance) {
          let reservaId = element.reservaId;
          let newReservaId = element.exaReservaResponse.transactionId;
          let newVentaId = element.exaVentaResponse.transactionId;
          let newTotal = parseFloat(element.total).toFixed(2);
          let response = [];
          let ventaData = await Reservas.updateCompraByExaReservaId(
            reservaId,
            newReservaId,
            newVentaId,
            newTotal
          );
          response.push(ventaData);
        }
      }
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  ventasProblema: async (req, res) => {
    try {
      let response = await Reservas.getCompraByStatus("Procesada");
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  ventasProblema2: async (req, res) => {
    try {
      let response = await Reservas.getComprasProblema2(req.body.user);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  recuperarDatosDeVentas: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      let acumulado = 0;
      for (let index = 0; index < data.length; index++) {
        const reservaId = data[index];
        let ventaData = await Reservas.getCompraByExaReservaId(reservaId);
        response.push(ventaData);
        acumulado = ventaData.status
          ? acumulado + parseFloat(ventaData.values.total)
          : acumulado;
      }
      res.status(200).json({ acumulado, data: response });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getVentasDePremiosNoPagos: async (req, res) => {
    try {
      let query = { acreditado: false };
      let ganadores = await Ganadores.find(query).lean();
      ganadores = ganadores.filter(
        (ganador) =>
          (ganador.tipoLoteria == 1 &&
            parseInt(ganador.numeroSorteo) >= 6805) ||
          (ganador.tipoLoteria == 2 &&
            parseInt(ganador.numeroSorteo) >= 2782) ||
          (ganador.tipoLoteria == 5 && parseInt(ganador.numeroSorteo) >= 996) ||
          (ganador.tipoLoteria == 14 && parseInt(ganador.numeroSorteo) >= 26)
      );
      let ventasPromises = [];
      let ventasId = [];
      ganadores.reduce((prev, curr) => {
        let index = ventasId.indexOf(ganador.ventaId);
        if (index == -1) {
          let query = { ventaId: ganador.ventaId };
          ventasPromises.push(Ventas.find(query).lean());
          ventasId.push(ganador.ventaId);
        }
      }, 0);
      let ventas = await Promise.all(ventasPromises);
      let detalles = ventas.map((venta) => {
        let reservationDetails = [];
        venta.loteria.forEach((item) => {
          let drawDateAux = item.fecha.split(" ")[0].split("/");
          let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
          let aux = {
            lotteryType: 1,
            drawNumber: parseInt(item.sorteo),
            drawDate,
            subTotal: `${parseFloat(item.subtotal).toFixed(2)}`,
            combinationC1: item.combinacion1,

            fractions: JSON.stringify([
              ...item.fracciones.map((item) => {
                return parseInt(item);
              }),
            ]).replace(/,/g, ", "),
          };
          reservationDetails.push(aux);
        });
        venta.lotto.forEach((item) => {
          let drawDateAux = item.fecha.split(" ")[0].split("/");
          let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
          let aux = {
            lotteryType: 2,
            drawNumber: parseInt(item.sorteo),
            drawDate,
            subTotal: `${parseFloat(item.subtotal).toFixed(2)}`,
            combinationC1: item.combinacion1,
            combinationC2: item.combinacion2,
            combinationC3: item.combinacion3,
            combinationC4: item.combinacion4,
            combinationC5: item.combinacion5,
          };
          reservationDetails.push(aux);
        });
        venta.pozo.forEach((item) => {
          let drawDateAux = item.fecha.split(" ")[0].split("/");
          let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
          let aux = {
            lotteryType: 5,
            drawNumber: parseInt(item.sorteo),
            drawDate,
            subTotal: `${parseFloat(item.subtotal).toFixed(2)}`,
            combinationC1: item.combinacion1,
            combinationC2: item.combinacion2,
            combinationC3: item.mascota,
          };
          reservationDetails.push(aux);
        });
        venta.millonaria.forEach((item) => {
          let drawDateAux = item.fecha.split(" ")[0].split("/");
          let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
          let aux = {
            lotteryType: 14,
            drawNumber: parseInt(item.sorteo),
            drawDate,
            subTotal: `${parseFloat(item.subtotal).toFixed(2)}`,
            combinationC1: item.combinacion1,
            combinationC2: item.combinacion2,
            fractions: JSON.stringify([
              ...item.fracciones.map((item) => {
                return parseInt(item);
              }),
            ]).replace(/,/g, ", "),
          };
          reservationDetails.push(aux);
        });
        let aux = {
          reserveId: venta.alboranReservaId,
          sellId: venta.alboranVentaId,
          ticketId: venta.ventaId,
          reservationDetails,
        };
      });

      await fs.writeFile("details.json", JSON.stringify(detalles));
      res.status(200).json({ detalles });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  resolverVentasDeDescuadre: async (req, res) => {
    let data = req.body.data;
    let response = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let ticketId = item.ticketId;
      let token = item.token;
      let ventaId = item.ventaId;
      let exaReservaId = item.exaReservaId;
      let totalVenta = item.totalVenta;
      let personaId = item.personaId;
      let instantaneas = item.instantaneas;
      let reservationDetails = item.reservationDetails;
      let prizeDetails = [];
      let instantaneaStatus = false;
      let instantaneaData = {};
      if (instantaneas != "" && instantaneas.length != 0) {
        let loteriaSorteos = await CacheLoteria.getSorteosDisponibles();
        let lottoSorteos = await CacheLotto.getSorteosDisponibles();
        let pozoSorteos = await CachePozo.getSorteosDisponibles();
        let millonariaSorteos = await CacheLaMillonaria.getSorteosDisponibles();
        instantaneaStatus = true;
        for (let j = 0; j < instantaneas.length; j++) {
          const instantanea = instantaneas[j];

          for (let i = 0; i < instantanea.premios.length; i++) {
            const premio = instantanea.premios[i];

            let nombreLoteria;
            let tipoLoteria = parseInt(instantanea.sorteo.JId);

            let prizeDetail = {
              lotteryType: tipoLoteria,
              drawNumber: parseInt(instantanea.sorteo.Sort),
              combinationC1: premio.Num,
              lotteryName: nombreLoteria,
              prize: parseFloat(premio.Val).toFixed(2),
              prizeWithDiscount: parseFloat(premio.ConDesc).toFixed(2),
              prizeDescription: premio.Prem.normalize("NFD").replace(
                /[\u0300-\u036f]/g,
                ""
              ),
            };

            let drawDateAux;
            switch (tipoLoteria) {
              case 1:
                prizeDetail["lotteryName"] = "Loteria Nacional";
                drawDateAux = loteriaSorteos
                  .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                  .fecha.split(" ")[0]
                  .split("/");
                prizeDetail[
                  "drawDate"
                ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
                prizeDetail["fractions"] = premio.Fra;

                break;
              case 2:
                prizeDetail["lotteryName"] = "Lotto";
                drawDateAux = lottoSorteos
                  .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                  .fecha.split(" ")[0]
                  .split("/");
                prizeDetail[
                  "drawDate"
                ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
                let item = reservationDetails.find(
                  (element) =>
                    prizeDetail.combinationC1 == element.combinationC1
                );
                prizeDetail["combinationC2"] = item.combinationC2;
                prizeDetail["combinationC3"] = item.combinationC3;
                prizeDetail["combinationC4"] = item.combinationC4;
                prizeDetail["combinationC5"] = item.combinationC5;
                break;

              case 5:
                prizeDetail["lotteryName"] = "Pozo Millonario";
                drawDateAux = pozoSorteos
                  .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                  .fecha.split(" ")[0]
                  .split("/");
                prizeDetail[
                  "drawDate"
                ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
                break;
              case 14:
                prizeDetail["lotteryName"] = "La Millonaria";
                drawDateAux = millonariaSorteos
                  .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                  .fecha.split(" ")[0]
                  .split("/");
                prizeDetail[
                  "drawDate"
                ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
                prizeDetail["fractions"] = premio.Fra;
                prizeDetail["combinationC2"] = premio.Num2;
                break;
            }
            let ganador = {
              personaId: personaId,
              tipoLoteria: tipoLoteria,
              numeroSorteo: parseInt(instantanea.sorteo.Sort),
              combinacion1: premio.Num,
              codigoPremio: `${parseInt(instantanea.sorteo.Sort)}-INSTANTANEA`,
              fraccion: premio.Fra,
              descripcionPremio: premio.Prem,
              valorPremio: premio.Val,
              valorPremioDescuento: premio.ConDesc,
              ventaId: ticketId,
              acreditado: true,
            };
            await Ganadores.crearGanador(ganador);
            prizeDetails.push(prizeDetail);
          }
        }
        instantaneaData = prizeDetails;
      }

      let exaVentaId = Date.now();
      let exaVentaData = {
        token,
        transactionId: exaVentaId,
        reserveId: exaReservaId,
        ticketId: ticketId,
        amount: totalVenta,
        prizeDetails,
      };
      let exaVentaResponse = await Wallet.sellLottery(exaVentaData);

      let ventaExalogicStatusResponse =
        await ventasController.actualizarVentaStatus(
          ventaId,
          "Completada",
          exaVentaId
        );

      let instantaneaResponse = {
        status: instantaneaStatus,
        data: instantaneaData,
      };
      let finalResponse = {
        exaReservaId,
        data: exaVentaResponse,
        instantanea: instantaneaResponse,
        status: true,
      };
      response.push(finalResponse);
    }
    res.status(200).json(response);
  },

  parseResultadosHttp: async function (req, res) {
    try {
      console.log("Actualizando tablas de resultados por http");
      let response = await mainController.parseResultados();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  parseResultados: async function () {
    console.time("parseResultados");
    console.log("Parsing loteria");
    await ResultadosController.parseResultadosLoteria();
    console.log("Parsing lotto");
    await ResultadosController.parseResultadosLotto();
    console.log("Parsing pozo");
    await ResultadosController.parseResultadosPozo();
    console.timeEnd("parseResultados");
  },

  pruebaCorreo: async (req, res) => {
    try {
      let response = await Correos.sendEmail(
        "angeloCrincoli91@gmail.com",
        "Angelo",
        941
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },

  alertaArchivos: async () => {
    try {
      let today = new Date();
      let loteria = await masterLoteria
        .findOne({})
        .sort({ actualizado: -1 })
        .lean();
      let loteriaDate =
        loteria && loteria.actualizado
          ? new Date(loteria.actualizado)
          : new Date("2019-01-01");
      let lotto = await masterLotto
        .findOne({})
        .sort({ actualizado: -1 })
        .lean();
      let lottoDate =
        lotto && lotto.actualizado
          ? new Date(lotto.actualizado)
          : new Date("2019-01-01");
      let pozo = await masterPozo.findOne({}).sort({ actualizado: -1 }).lean();
      let pozoDate =
        pozo && pozo.actualizado
          ? new Date(pozo.actualizado)
          : new Date("2019-01-01");
      let millonaria = await masterMillonaria
        .findOne({})
        .sort({ actualizado: -1 })
        .lean();
      let millonariaDate =
        millonaria && millonaria.actualizado
          ? new Date(millonaria.actualizado)
          : new Date("2019-01-01");

      let data = {
        loteria: diff_hours(today, loteriaDate)
          ? {
              status: false,
              sorteo: "",
              archivoResultados: "",
              lengthResultados: "",
              cantidadResultados: "",
              archivoPremios: "",
              lengthPremios: "",
              cantidadPremios: "",
              archivoGanadores: "",
              lengthGanadores: "",
              cantidadGanadores: "",
              ultimosResultados: "",
            }
          : {
              status: true,
              sorteo: loteria.numeroSorteo,
              archivoResultados: loteria.resultados
                ? loteria.resultados.nombre
                : `No hay archivo de resultados para este sorteo`,
              lengthResultados: loteria.resultados
                ? loteria.resultados.tamaño / 1024
                : `No hay archivo de resultados para este sorteo`,
              cantidadResultados: loteria.resultados
                ? loteria.resultados.cantidad
                : `No hay archivo de resultados para este sorteo`,
              archivoPremios: loteria.premios
                ? loteria.premios.nombre
                : `No hay archivo de premios para este sorteo`,
              lengthPremios: loteria.premios
                ? loteria.premios.tamaño / 1024
                : `No hay archivo de premios para este sorteo`,
              cantidadPremios: loteria.premios
                ? loteria.premios.cantidad
                : `No hay archivo de premios para este sorteo`,
              archivoGanadores: loteria.ganadores
                ? loteria.ganadores.nombre
                : `No hay archivo de ganadores para este sorteo`,
              lengthGanadores: loteria.ganadores
                ? loteria.ganadores.tamaño / 1024
                : `No hay archivo de ganadores para este sorteo`,
              cantidadGanadores: loteria.ganadores
                ? loteria.ganadores.cantidad
                : `No hay archivo de ganadores para este sorteo`,
              ultimosResultados: "",
            },
        lotto: diff_hours(today, lottoDate)
          ? {
              status: false,
              sorteo: "",
              archivoResultados: "",
              lengthResultados: "",
              cantidadResultados: "",
              archivoPremios: "",
              lengthPremios: "",
              cantidadPremios: "",
              archivoGanadores: "",
              lengthGanadores: "",
              cantidadGanadores: "",
              ultimosResultados: "",
            }
          : {
              status: true,
              sorteo: lotto.numeroSorteo,
              archivoResultados: lotto.resultados
                ? lotto.resultados.nombre
                : "No hay archivo de resultados para este sorteo",
              lengthResultados: lotto.resultados
                ? lotto.resultados.tamaño / 1024
                : "No hay archivo de resultados para este sorteo",
              cantidadResultados: lotto.resultados
                ? lotto.resultados.cantidad
                : "No hay archivo de resultados para este sorteo",
              archivoPremios: lotto.premios
                ? lotto.premios.nombre
                : "No hay archivo de premios para este sorteo",
              lengthPremios: lotto.premios
                ? lotto.premios.tamaño / 1024
                : "No hay archivo de premios para este sorteo",
              cantidadPremios: lotto.premios
                ? lotto.premios.cantidad
                : "No hay archivo de premios para este sorteo",
              archivoGanadores: lotto.ganadores
                ? lotto.ganadores.nombre
                : "No hay archivo de ganadores para este sorteo",
              lengthGanadores: lotto.ganadores
                ? lotto.ganadores.tamaño / 1024
                : "No hay archivo de ganadores para este sorteo",
              cantidadGanadores: lotto.ganadores
                ? lotto.ganadores.cantidad
                : "No hay archivo de ganadores para este sorteo",
              ultimosResultados: "",
            },
        pozo: diff_hours(today, pozoDate)
          ? {
              status: false,
              sorteo: "",
              archivoResultados: "",
              lengthResultados: "",
              cantidadResultados: "",
              archivoPremios: "",
              lengthPremios: "",
              cantidadPremios: "",
              archivoGanadores: "",
              lengthGanadores: "",
              cantidadGanadores: "",
              ultimosResultados: "",
            }
          : {
              status: true,
              sorteo: pozo.numeroSorteo,
              archivoResultados: pozo.resultados
                ? pozo.resultados.nombre
                : "No hay archivo de resultados para este sorteo",
              lengthResultados: pozo.resultados
                ? pozo.resultados.tamaño / 1024
                : "No hay archivo de resultados para este sorteo",
              cantidadResultados: pozo.resultados
                ? pozo.resultados.cantidad
                : "No hay archivo de resultados para este sorteo",
              archivoPremios: pozo.premios
                ? pozo.premios.nombre
                : "No hay archivo de premios para este sorteo",
              lengthPremios: pozo.premios
                ? pozo.premios.tamaño / 1024
                : "No hay archivo de premios para este sorteo",
              cantidadPremios: pozo.premios
                ? pozo.premios.cantidad
                : "No hay archivo de premios para este sorteo",
              archivoGanadores: pozo.ganadores
                ? pozo.ganadores.nombre
                : "No hay archivo de ganadores para este sorteo",
              lengthGanadores: pozo.ganadores
                ? pozo.ganadores.tamaño / 1024
                : "No hay archivo de ganadores para este sorteo",
              cantidadGanadores: pozo.ganadores
                ? pozo.ganadores.cantidad
                : "No hay archivo de ganadores para este sorteo",
              ultimosResultados: "",
            },
        millonaria: diff_hours(today, millonariaDate)
          ? {
              status: false,
              sorteo: "",
              archivoResultados: "",
              lengthResultados: "",
              cantidadResultados: "",
              archivoPremios: "",
              lengthPremios: "",
              cantidadPremios: "",
              archivoGanadores: "",
              lengthGanadores: "",
              cantidadGanadores: "",
              ultimosResultados: "",
            }
          : {
              status: true,
              sorteo: millonaria.numeroSorteo,
              archivoResultados: millonaria.resultados
                ? millonaria.resultados.nombre
                : "No hay archivo de resultados para este sorteo",
              lengthResultados: millonaria.resultados
                ? millonaria.resultados.tamaño / 1024
                : "No hay archivo de resultados para este sorteo",
              cantidadResultados: millonaria.resultados
                ? millonaria.resultados.cantidad
                : "No hay archivo de resultados para este sorteo",
              archivoPremios: millonaria.premios
                ? millonaria.premios.nombre
                : "No hay archivo de premios para este sorteo",
              lengthPremios: millonaria.premios
                ? millonaria.premios.tamaño / 1024
                : "No hay archivo de premios para este sorteo",
              cantidadPremios: millonaria.premios
                ? millonaria.premios.cantidad
                : "No hay archivo de premios para este sorteo",
              archivoGanadores: millonaria.ganadores
                ? millonaria.ganadores.nombre
                : "No hay archivo de ganadores para este sorteo",
              lengthGanadores: millonaria.ganadores
                ? millonaria.ganadores.tamaño / 1024
                : "No hay archivo de ganadores para este sorteo",
              cantidadGanadores: millonaria.ganadores
                ? millonaria.ganadores.cantidad
                : "No hay archivo de ganadores para este sorteo",
              ultimosResultados: "",
            },
      };
      let response = await Alerta.send(data);
      return response;
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      throw e;
    }
  },
  pruebaConsulta: async (req, res) => {
    try {
      let lotteryToken = (await psdAuth.autenticarUsuario()).token;
      let personaId = req.body.personaId;
      let ip = req.headers["x-forwarded-for"];
      let response = await psdAuth.consultarDatosUsuario(
        lotteryToken,
        personaId,
        ip
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaOrden: async (req, res) => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let datos = await Ventas.consultarDatosUsuario(
        lotteryToken,
        43011,
        "192.168.1.1"
      );
      let ordenId = await Ventas.agregarOrdenPago(
        "754405",
        "1",
        "6710",
        "1488865",
        "39",
        lotteryToken,
        Date.now(),
        Date.now(),
        "0915693667",
        "192.168.1.1"
      );
      res.status(200).json(ordenId);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },

  limpiarDBHttp: async function (req, res) {
    try {
      console.log("Limpiando DB por http");
      let response = await mainController.limpiarDB();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  limpiarDB: async function () {
    console.log("Empezando limpieza de DB");
    let sorteos = (await SorteosController.getAllSorteos()).values;
    let outdatedSorteos = [];
    let n = sorteos.length;
    return new Promise(async (resolve, reject) => {
      try {
        for (let i = 0; i < sorteos.length; i++) {
          const sorteo = sorteos[i];

          let date = sorteo.fecha;
          let day = date.split(" ")[0].split("/")[0];
          let month = parseInt(date.split(" ")[0].split("/")[1]) - 1;
          let year = parseInt(date.split(" ")[0].split("/")[2]);
          let today = new Date();
          let todayYear = today.getYear() + 1900;
          let todayMonth = today.getMonth();
          let todayDay = today.getDay();
          let limit;
          let limitYear;
          if (todayMonth < 3) {
            limit = todayMonth + 9;
            limitYear = todayYear - 1;
          } else {
            limit = todayMonth - 3;
            limitYear = todayYear;
          }
          console.log(month);
          if (
            (month < limit || (month == limit && day <= todayDay)) &&
            year <= limitYear
          ) {
            console.log(`I should be deleting this sorteo: ${sorteo.sorteo}`);
            outdatedSorteos.push(sorteo.sorteo);
            await ResultadosController.deleteResultadosBySorteo(sorteo.sorteo);
            await PremiosController.deletePremiosBySorteo(sorteo.sorteo);
            await SorteosController.deleteSorteo(sorteo.sorteo);
          }
        }

        resolve(outdatedSorteos);
      } catch (e) {
        reject(e);
      }
    });
  },
  corregirGanadores: async (req, res) => {
    try {
      let queryB = { acreditado: false, numeroSorteo: "2690" };
      let queryC = { acreditado: false, numeroSorteo: "2691" };
      let queryD = { acreditado: false, numeroSorteo: "2692" };

      let ganadoresB = await Ganadores.updateMany(queryB, {
        $set: {
          combinacion2: "",
        },
      });
      let ganadoresC = await Ganadores.updateMany(queryC, {
        $set: {
          combinacion2: "",
        },
      });
      let ganadoresD = await Ganadores.updateMany(queryD, {
        $set: {
          combinacion2: "",
        },
      });

      res.status(200).json({ ganadoresB, ganadoresC, ganadoresD });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  parseMicroServicios: async (req, res) => {
    try {
      let auxE = await db.model("Sorteos").findOne({ tipoLoteria: 1 });
      let auxF = await db.model("Sorteos").findOne({ tipoLoteria: 2 });
      let auxG = await db.model("Sorteos").findOne({ tipoLoteria: 5 });
      let auxH = await db.model("Sorteos").findOne({ tipoLoteria: 14 });

      let queryE = { sorteo: auxE.sorteo };
      let queryF = { sorteo: auxF.sorteo };
      let queryG = { sorteo: auxG.sorteo };
      let queryH = { sorteo: auxH.sorteo };

      let responseE = await SorteosLoteria.updateOne(
        queryE,
        { $set: auxE },
        { upsert: true } // Make this update into an upsert
      );
      let responseF = await SorteosLotto.updateOne(
        queryF,
        { $set: auxF },
        { upsert: true } // Make this update into an upsert
      );
      let responseG = await SorteosPozoMillonario.updateOne(
        queryG,
        { $set: auxG },
        { upsert: true } // Make this update into an upsert
      );
      let responseH = await SorteosLaMillonaria.updateOne(
        queryH,
        { $set: auxH },
        { upsert: true } // Make this update into an upsert
      );

      res.status(200).json({
        responseA,
        responseB,
        responseC,
        responseD,
        responseE,
        responseF,
        responseG,
        responseH,
      });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = helperController;
