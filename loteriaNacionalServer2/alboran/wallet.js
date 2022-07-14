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
const walletController = {
  getBalance: async (data) => {
    try {
      alboranLogger.silly("getBalance");
      let token = data.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */

      let alboranData = {
        sessionToken: token,
      };
      let response = await helper.alboranRequest(alboranData, "/GetBalance");
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: alboranData,
          response,
          function: "getBalance",
        };
        alboranLogger.info("getBalance.alboran", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "getBalance",
        };
        throw new alboranError(
          response.resultDescription,
          "alboran",
          errorData
        );
      }
    } catch (e) {
      alboranLogger.error("getBalance.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let errorData = {
        input: e,
        output: "",
        function: "getBalance",
      };
      throw new alboranError(e.message, "alboran", errorData);
    }
  },

  sellLottery: async (data) => {
    try {
      alboranLogger.silly("sellLottery");
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

      let alboranData = {
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        ticketId: data.ticketId,
        amount: `${data.amount}`,
        instantWinDetails: data.prizeDetails,
      };
      let response = await helper.alboranRequest(alboranData, '/SellTicket');
      response["status"] = true;

      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: alboranData,
          response,
          function: "Wallet.sellLottery",
        };
        alboranLogger.info("sellLottery.alboran", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "sellLottery",
          status: false,
        };
        return errorData;
        /* throw new alboranError(
          response.resultDescription,
          "alboran",
          errorData
        ); */
      }
    } catch (e) {
      alboranLogger.error("sellLottery.error", {
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
      //throw new alboranError(e.message, "alboran", errorData);
    }
  },
  cancelLottery: async (data) => {
    try {
      alboranLogger.silly("cancelLottery");
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

      let alboranData = {
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: `${data.amount}`,
      };
      let response = await helper.alboranRequest(alboranData, '/CancelTicket');
      response["status"] = true;
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: alboranData,
          response,
          function: "cancelLottery",
        };
        alboranLogger.info("cancelLottery.alboran", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "cancelLottery",
          status: false,
        };
        return errorData;

        /*         throw new alboranError(
          response.resultDescription,
          "alboran",
          errorData
        ); */
      }
    } catch (e) {
      alboranLogger.error("cancelLottery.error", {
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
      //throw new alboranError(e.message, "alboran", errorData);
    }
  },
  reserveLottery: async (data) => {
    try {
      alboranLogger.silly("reserveLottery");
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

      let alboranData = {
        sessionToken: data.token,
        transactionId: data.transactionId,
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: `${data.amount}`,
        reservationDetails: data.reservationDetails,
      };
      let response = await helper.alboranRequest(alboranData, '/ReserveBalance');
      response["status"] = true;
      if (parseInt(response.resultCode) >= 0) {
        let logData = {
          data: alboranData,
          response,
          function: "Wallet.reserveLottery",
        };
        alboranLogger.info("reserveLottery.alboran", logData);
        return response;
      } else {
        let errorData = {
          input: data,
          output: response,
          function: "reserveLottery",
          status: false,
        };
        return errorData;
        /* throw new alboranError(
          response.resultDescription,
          "alboran",
          errorData
        ); */
      }
    } catch (e) {
      alboranLogger.error("reserveLottery.error", {
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
      //throw new alboranError(e.message, "alboran", errorData);
    }
  },
};

module.exports = walletController;
