const psdVentas = require("../psdLoteria/ventas");
const Wallet = require("../alboran/wallet"); // COMUNICAR POR gRPC
const Ventas = require("./models/main");

const TIMEOUT_ERROR = "99970";
/*AGREGAR LOGGING */

const errorHandler = {
  alboranSellError: async (
    alboranVentaData,
    reservaId,
    lotteryToken,
    user,
    ip
  ) => {
    try {
      /*     let loteriaCancelResponse = await psdVentas.cancelarVenta(
      lotteryToken,
      reservaId,
      user,
      "Error de comunicación con Exalogic",
      ip
    );
    let logData = {
      data: {
        alboranVentaData,
        reservaId,
        lotteryToken,
        user,
      },
      loteriaCancelResponse,
      function: "psdVentas.cancelarVenta",
    };
    errorHandlerLogger.info("alboranlogicSellError", logData);
    let j = 0;
    while (!loteriaCancelResponse.status || j != 3) {
      await psdVentas.cancelarVenta(
        lotteryToken,
        reservaId,
        user,
        "Error de comunicación con Exalogic",
        ip
      );
      j++;
      logData = {
        data: {
          alboranVentaData,
          reservaId,
          lotteryToken,
          user,
        },
        loteriaCancelResponse,
        function: "psdVentas.cancelarVenta",
      };
      errorHandlerLogger.info("alboranlogicSellError", logData);
    }
    let alboranCancelId = Date.now();
    let alboranCancelData = {
      token: alboranVentaData.token,
      transactionId: exaCancelId,
      reserveId: alboranVentaData.reserveId,
      amount: alboranVentaData.amount,
    };
    let alboranCancelResponse = await Wallet.cancelLottery(alboranCancelData);

    logData = {
      data: {
        alboranCancelData,
      },
      alboranCancelResponse,
      function: "Wallet.cancelLottery",
    };
    errorHandlerLogger.info("alboranlogicSellError", logData);
    let i = 0;
    while (!alboranCancelResponse.status || i != 3) {
      await Wallet.cancelLottery(alboranCancelData);
      i++;
      logData = {
        data: {
          alboranCancelData,
        },
        alboranCancelResponse,
        function: "Wallet.cancelLottery",
      };
      errorHandlerLogger.info("alboranlogicSellError", logData);
    }
    if (j == 3 && !loteriaCancelResponse.status) {
      throw new Error(
        "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
      );
    }
    if (i == 3 && !alboranCancelResponse.status) {
      throw new Error(
        "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
      );
    }
    throw new Error(
      "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
    );
 */
    } catch (e) {
      throw new Error(
        "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
      );
    }
  },
  loteriaSellError: async (
    alboranReservaData,
    venta,
    errorCode,
    errorMsg,
    user,
    lotteryToken,
    reservaId,
    ip
  ) => {
    try {
      let alboranCancelId = Date.now();
      let alboranCancelData = {
        transactionId: alboranCancelId,
        reserveId: alboranReservaData.transactionId,
        amount: alboranReservaData.amount,
      };
      if (errorCode == 400088) throw new Error(errorMsg);
      if (errorCode == TIMEOUT_ERROR) {
        await psdVentas.cancelarVenta(
          lotteryToken,
          reservaId,
          user,
          "Cancelación por error de timeout",
          ip
        );
      }
      let alboranCancelResponse = await Wallet.cancelLottery(alboranCancelData);
      let i = 0;
      while (!alboranCancelResponse.status && i != 3) {
        alboranCancelResponse = await Wallet.cancelLottery(alboranCancelData);
        i++;
      }
      if (i == 3 && !alboranCancelResponse.status) {
        throw new Error(
          "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
        );
      }
      let ventaLoteriaStatusResponse = await Ventas.actualizarStatus(
        venta._id,
        "Cancelada",
        alboranCancelId
      );
      throw new Error(
        "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
      );
    } catch (e) {
      throw e
    }
  },
  alboranReserveError: async (alboranReservaData) => {
    throw new Error(
      "Ha ocurrido un error procesando tu compra. Por favor intenta de nuevo."
    );
  },
};

class apiError extends Error {
  constructor(message, code, errorData) {
    super(message);
    this.name = "apiError";
    this.code = code;
    this.data = errorData;
  }
}
module.exports = {
  errorHandler,
  apiError,
};
