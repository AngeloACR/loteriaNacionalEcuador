const { exalogicLogger } = require("./logging");
const helper = require("./helper");
var {exalogicError} = require("./errors");

function getCurrentTimeStamp() {
  let date = new Date(Date.now()).toLocaleString("es-EC", {
    timeZone: "America/Bogota",
  });
  let a = date.split(/\D/);
  let y = a[2];
  let m = a[1].length === 2 ? a[1] : `0${a[1]}`;
  let d = a[0].length === 2 ? a[0] : `0${a[0]}`;
  let n = `${y}-${d}-${m} ${a[4]}:${a[5]}:${a[6]}.000`;
  //let n = `${y}-${m}-${d} ${a[3]}:${a[4]}:${a[5]}.000`;
  return n;
}
const prizeController = {
  payLottery: async (data) => {
    try {
      /*
            {
                "transactionId": "2223846696262170",
                "payLine": :"<R PE="236891" J="5" S="935" FC="2021-10-05 23:59" C="0523945"
C2="02,03,04,05,06,09,10,11,13,15,17,18,24,25" C3="15" F="0" B="501659" P="6" N="MASCOTA - REINTEGRO"
VP="1.000000" VD="1.000000" TP="DIN" RT="0" V="2861538"/>"
            }
            
            */
      exalogicLogger.silly("payLottery");
      let operationTimeStamp = getCurrentTimeStamp();
      /*       let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
 */
      let exaData = {
        command: "payTicketLottery",
        systemCode: "1",
        transactionId: data.transactionId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        payLine: data.payLine,
      };
      let response = await helper.exalogicRequest(exaData);
      let logData = {
        data: exaData,
        response,
        function: "Wallet.payLottery",
      };
      exalogicLogger.info("payLottery.exalogic", logData);
      return response;
    } catch (e) {
      exalogicLogger.error("payLottery.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
};

module.exports = prizeController;
