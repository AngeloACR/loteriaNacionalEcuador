const alboranAuth = require("../../alboran/auth");
const psdAuth = require("../../psdLoteria/auth");
const { authLogger } = require("../logging");

const mainController = {
  authUser: async (req, res) => {
    try {
      /* {
        "token": "661c0ce5ccabbeb1136a"
      } */
      let token = req.body.token;
      let response = await alboranAuth.authUser(token);
      res.status(200).json(response);
    } catch (e) {
      authLogger.error("authUser.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message.toLowerCase().includes("otp")
          ? "Has iniciado sesión en otro dispositivo."
          : e.message,
      };
      res.status(400).json(response);
    }
  },
  authUserPSD: async (req, res) => {
    try {
      /* {
        "token": "661c0ce5ccabbeb1136a"
      } */
      let token = req.body.token;
      let user = "0951234566";
      let playerDocument = "0951234566";
      let pass = "Pass1234!";
      let response = await psdAuth.authTest(user, pass);
      res.status(200).json({ user, playerDocument, lotteryToken: response , personalId: '43030', accountId: '54961'});
    } catch (e) {
      authLogger.error("authUser.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message.toLowerCase().includes("otp")
          ? "Has iniciado sesión en otro dispositivo."
          : e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = mainController;
