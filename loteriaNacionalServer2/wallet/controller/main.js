const { walletLogger } = require("../logging");
const exalogicWallet = require("../../exalogic/wallet");
const alboranWallet = require("../../alboran/wallet");

const walletController = {
  getBalance: async (req, res) => {
    try {
      let token = req.body.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */
      //let response = await exalogicWallet.getBalance(req.body);
      let response = await alboranWallet.getBalance(req.body);
      res.status(200).json(response);
    } catch (e) {
      walletLogger.error("getBalance.error", {
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
  sellLottery: async (req, res) => {
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

      let response = await exalogicWallet.sellLottery(req.body);
      res.status(200).json(response);
    } catch (e) {
      walletLogger.error("sellLottery.error", {
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
  cancelLottery: async (req, res) => {
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

      let response = await exalogicWallet.cancelLottery(req.body);
      res.status(200).json(response);
    } catch (e) {
      walletLogger.error("cancelLottery.error", {
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
  reserveLottery: async (req, res) => {
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
      let response = await exalogicWallet.reserveLottery(req.body);

      res.status(200).json(response);
    } catch (e) {
      walletLogger.error("reserveLottery.error", {
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
};

module.exports = walletController;
