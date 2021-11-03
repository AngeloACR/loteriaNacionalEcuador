const Ventas = require("../loterianacional/controller/ventas");
const Wallet = require("../exalogic/controller/wallet");
var { errorHandlerLogger } = require("../config/logging");

module.exports.exalogicSellError = async (
  exaVentaData,
  reservaId,
  lotteryToken,
  user,
  ip
) => {
  try {
    let loteriaCancelResponse = await Ventas.cancelarVenta(
      lotteryToken,
      reservaId,
      user,
      "Error de comunicación con Exalogic",
      ip
    );
    let logData = {
      data: {
        exaVentaData,
        reservaId,
        lotteryToken,
        user,
      },
      loteriaCancelResponse,
      function: "Ventas.cancelarVenta",
    };
    errorHandlerLogger.info("exalogicSellError", logData);
    let j = 0;
    while (!loteriaCancelResponse.status || j != 3) {
      await Ventas.cancelarVenta(
        lotteryToken,
        reservaId,
        user,
        "Error de comunicación con Exalogic",
        ip
      );
      j++;
      logData = {
        data: {
          exaVentaData,
          reservaId,
          lotteryToken,
          user,
        },
        loteriaCancelResponse,
        function: "Ventas.cancelarVenta",
      };
      errorHandlerLogger.info("exalogicSellError", logData);
    }
    let exaCancelId = Date.now();
    let exaCancelData = {
      token: exaVentaData.token,
      transactionId: exaCancelId,
      reserveId: exaVentaData.reserveId,
      amount: exaVentaData.amount,
    };
    let exaCancelResponse = await Wallet.cancelLottery(exaCancelData);

    logData = {
      data: {
        exaCancelData,
      },
      exaCancelResponse,
      function: "Wallet.cancelLottery",
    };
    errorHandlerLogger.info("exalogicSellError", logData);
    let i = 0;
    while (!exaCancelResponse.status || i != 3) {
      await Wallet.cancelLottery(exaCancelData);
      i++;
      logData = {
        data: {
          exaCancelData,
        },
        exaCancelResponse,
        function: "Wallet.cancelLottery",
      };
      errorHandlerLogger.info("exalogicSellError", logData);
    }
    if (j == 3 && !loteriaCancelResponse.status) {
      throw new Error(
        "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
      );
    }
    if (i == 3 && !exaCancelResponse.status) {
      throw new Error(
        "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
      );
    }
    throw new Error(
      "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
    );
  } catch (e) {
    logData = {
      data: e.message,
    };
    errorHandlerLogger.error("exalogicSellError", logData);

    throw new Error(
        "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
      );
  }
};
module.exports.loteriaSellError = async (exaReservaData) => {
  let exaCancelId = Date.now();
  let exaCancelData = {
    token: exaReservaData.token,
    transactionId: exaCancelId,
    reserveId: exaReservaData.transactionId,
    amount: exaReservaData.amount,
  };
  let exaCancelResponse = await Wallet.cancelLottery(exaCancelData);
  let i = 0;
  while (!exaCancelResponse.status || i != 3) {
    await Wallet.cancelLottery(exaCancelData);
    i++;
  }
  if (i == 3 && !exaCancelResponse.status) {
    throw new Error(
      "Ha ocurrido un error procesando tu compra, por favor comunícate con el equipo de Loteria Nacional para ayudarte a resolver el problema."
    );
  }
  throw new Error(
    "Ha ocurrido un error procesando tu compra. Por favor, intenta de nuevo."
  );
};
module.exports.exalogicReserveError = async (exaReservaData) => {
  throw new Error(
    "Ha ocurrido un error procesando tu compra. Por favor intenta de nuevo."
  );
};
module.exports.loteriaReservaError = async (data) => {};
module.exports.loteriaEliminarError = async (data) => {};
