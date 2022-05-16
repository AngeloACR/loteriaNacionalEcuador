const { exalogicLogger } = require("./logging");
const helper = require("./helper");
var { exalogicError } = require("./errors");

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
const walletController = {
  getBalance: async (data) => {
    try {
      exalogicLogger.silly("getBalance");
      let token = data.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */

      let exaData = {
        command: "getBalance",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      let response = await helper.exalogicRequest(exaData);
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: exaData,
          response,
          function: "getBalance",
        };
        exalogicLogger.info("getBalance.exalogic", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "getBalance",
        };
        throw new exalogicError(
          response.resultDescription,
          "exalogic",
          errorData
        );
      }
    } catch (e) {
      exalogicLogger.error("getBalance.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let errorData = {
        input: e,
        output: "",
        function: "getBalance",
      };
      throw new exalogicError(e.message, "exalogic", errorData);
    }
  },

  sellLottery: async (data) => {
    try {
      exalogicLogger.silly("sellLottery");
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00"
                "ticketId": "13565132"
                "transactionId": "2223846696262170"
            } */
      /*       let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", ""); */
      let operationTimeStamp = getCurrentTimeStamp();

      let exaData = {
        command: "sellLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        ticketId: data.ticketId,
        amount: data.amount,
        instantWinDetails: data.prizeDetails,
      };
      let response = await helper.exalogicRequest(exaData);
      response["status"] = true;

      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: exaData,
          response,
          function: "Wallet.sellLottery",
        };
        exalogicLogger.info("sellLottery.exalogic", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "sellLottery",
          status: false,
        };
        return errorData;
        /* throw new exalogicError(
          response.resultDescription,
          "exalogic",
          errorData
        ); */
      }
    } catch (e) {
      exalogicLogger.error("sellLottery.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let errorData = {
        input: e,
        output: "",
        function: "sellLottery",
        status: false,
      };
      return errorData;
      //throw new exalogicError(e.message, "exalogic", errorData);
    }
  },
  cancelLottery: async (data) => {
    try {
      exalogicLogger.silly("cancelLottery");
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00",
                "transactionId": "2223846696262170"
            } */
      /*       let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", ""); */
      let operationTimeStamp = getCurrentTimeStamp();

      let exaData = {
        command: "cancelLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: data.amount,
      };
      let response = await helper.exalogicRequest(exaData);
      response["status"] = true;
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: exaData,
          response,
          function: "cancelLottery",
        };
        exalogicLogger.info("cancelLottery.exalogic", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "cancelLottery",
          status: false,
        };
        return errorData;

        /*         throw new exalogicError(
          response.resultDescription,
          "exalogic",
          errorData
        ); */
      }
    } catch (e) {
      exalogicLogger.error("cancelLottery.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let errorData = {
        input: e,
        output: "",
        function: "cancelLottery",
        status: false,
      };
      return errorData;
      //throw new exalogicError(e.message, "exalogic", errorData);
    }
  },
  reserveLottery: async (data) => {
    try {
      exalogicLogger.silly("reserveLottery");
      /*
            {
                "token": "661c0ce5ccabbeb1136a",
                "transactionId": "2223846696262170",
                "amount": "40.00",
                "reservationDetails": [
                    {
                        "lotteryType": 2,
                        "lotteryName": "Lotto",
                        "drawNumber": 2578,
                        "drawDate": "2021-05-10",
                        "subTotal": 10.0,
                        "combinationC1": "267855",
                        "combinationC2": "256987",
                        "combinationC3": "526987",
                        "combinationC4": "075366"
                    }]
            }
            
            */
      /*       let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", ""); */
      let operationTimeStamp = getCurrentTimeStamp();

      let exaData = {
        command: "reserveLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: data.amount,
        reservationDetails: data.reservationDetails,
      };
      let response = await helper.exalogicRequest(exaData);
      response["status"] = true;
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: exaData,
          response,
          function: "Wallet.reserveLottery",
        };
        exalogicLogger.info("reserveLottery.exalogic", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "reserveLottery",
          status: false,
        };
        return errorData;
        /* throw new exalogicError(
          response.resultDescription,
          "exalogic",
          errorData
        ); */
      }
    } catch (e) {
      exalogicLogger.error("reserveLottery.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let errorData = {
        input: e,
        output: "",
        function: "reserveLottery",
        status: false,
      };
      return errorData;
      //throw new exalogicError(e.message, "exalogic", errorData);
    }
  },
};

module.exports = walletController;
