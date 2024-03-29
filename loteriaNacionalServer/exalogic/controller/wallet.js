const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
const https = require("https");
const { exalogicLogger } = require("../../config/logging");
const helper = require("../helper");
var { exalogicError } = require("../../errors/customError");

function getCurrentTimeStamp() {
  let date = new Date(Date.now()).toLocaleString("es-EC", {
    timeZone: "America/Bogota",
  });
  let a = date.split(/\D/);
  let y = a[2];
  let m = a[1].length === 2 ? a[1] : `0${a[1]}`;
  let d = a[0].length === 2 ? a[0] : `0${a[0]}`;
  let n = `${y}-${d}-${m} ${a[3]}:${a[4]}:${a[5]}.000`;
  return n;
}
const walletController = {
  getBalanceHttp: async (req, res) => {
    try {
      let token = req.body.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */
      let response = await walletController.getBalance(req.body);
      res.status(200).json(response);
    } catch (e) {
      exalogicLogger.error("getBalanceHttp.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
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
  sellLotteryHttp: async (req, res) => {
    try {
      //let token = req.query.token;
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00"
                "ticketId": "13565132"
                "transactionId": "2223846696262170",
                prizeDetails: []
            } */
      /* let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
 */

      let response = await walletController.sellLottery(req.body);
      res.status(200).json(response);
    } catch (e) {
      exalogicLogger.error("sellLotteryHttp.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  cancelLotteryHttp: async (req, res) => {
    try {
      let token = req.body.token;

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

      let response = await walletController.cancelLottery(req.body);
      res.status(200).json(response);
    } catch (e) {
      exalogicLogger.error("cancelLotteryHttp.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  reserveLotteryHttp: async (req, res) => {
    try {
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
      let response = await walletController.reserveLottery(req.body);

      res.status(200).json(response);
    } catch (e) {
      exalogicLogger.error("reserveLotteryHttp.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
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
      response['status'] = true;

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
      response['status'] = true;
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
      response['status'] = true;
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
  /*   payLottery: async (data) => {
    try {
    exalogicLogger.silly("payLottery");

      return new Promise(async (resolve, reject) => {
        data = JSON.stringify(data);
        const options = {
          hostname: exalogicHost,
          port: 443,
          path: exalogicEndpoint,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": data.length,
          },
        };

        const req = https.request(options, (res) => {

          var body = "";

          res.on("data", function (chunk) {
            body = body + chunk;
          });

          res.on("end", function () {
            if (res.statusCode != 200) {
              reject(
                new Error("Ocurrio un error, por favor intente más tarde")
              );
            } else {
              let response = body == "" ? "" : JSON.parse(body);

            let logData = {
              data,
              response,
            };
            exalogicLogger.info("payLottery.exalogic", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          exalogicLogger.error("payLottery.exalogic.error", {
            errorMessage: error.message,
          });
          reject(new exalogicError(error, 'exalogic', 'handler'));
        });

        req.write(data);
        req.end();

      });
    } catch (e) {
     throw new exalogicError(e, 'exalogic', 'handler')
    }
  }, */
};

module.exports = walletController;
