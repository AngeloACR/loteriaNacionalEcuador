const { alboranLogger } = require("./logging");
const helper = require("./helper");
var { alboranError } = require("./errors");

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
function getIfTimeout(e) {
  return e.includes("504 Gateway Time-out");
}
const prizeController = {
  payLottery: async (data, endpoint) => {
    try {
      /*
            {
                "transactionId": "2223846696262170",
                "payLine": :"<R PE="236891" J="5" S="935" FC="2021-10-05 23:59" C="0523945"
C2="02,03,04,05,06,09,10,11,13,15,17,18,24,25" C3="15" F="0" B="501659" P="6" N="MASCOTA - REINTEGRO"
VP="1.000000" VD="1.000000" TP="DIN" RT="0" V="2861538"/>"
            }
            
            */
      alboranLogger.silly("payLottery");
      let operationTimeStamp = getCurrentTimeStamp();
      let alboranData = {
        transactionId: data.transactionId,
        prizesNumber: data.prizesNumber,
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        prizeDetails: data.prizeDetails,
      };
      let response = await helper.alboranRequest(alboranData, endpoint);
      let logData = {
        data: alboranData,
        response,
        function: "Wallet.payLottery",
      };
      alboranLogger.info("payLottery.alboran", logData);
      return response;
    } catch (e) {
      alboranLogger.error("payLottery.error", {
        errorMessage: e.message,
      });
      if (getIfTimeout(e.message)) {
        return {
          resultCode: "-9999",
          resultDescription: "Timeout error!",
        };
      }
      throw new Error(e.message);
    }
  },
};

module.exports = prizeController;
