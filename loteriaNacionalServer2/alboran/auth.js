var { alboranError } = require("./errors");
const helper = require("./helper");
const { alboranLogger } = require("./logging");
const psdAuth = require("../psdLoteria/auth");
const authController = {
  authUser: async (sessionToken) => {
    try {
      /* {
                "token": "661c0ce5ccabbeb1136a"
            } */
      let authData = {
        sessionToken,
      };
      let response = await helper.alboranRequest(authData, "/CheckToken");
      if (response["password"]) delete response["password"];
      /******************* FOR TESTING ONLY*******************/
      response.resultCode = 0;
      let lotteryToken = await psdAuth.authTest();
      response.playerDocument = "0951234566";
      response.lotteryToken = lotteryToken;
      if (parseInt(response.resultCode) >= 0) {
        /*         let logData = {
          data: authData,
          response,
          function: "Auth.authUser",
        };
        alboranLogger.info("authUser.alboran", logData); */
        return response;
      } else {
        let errorData = {
          input: authData,
          output: response,
          function: "authUser",
        };
        throw new alboranError(
          response.resultDescription,
          "alboran",
          errorData
        );
      }
    } catch (e) {
      let errorData = {
        input: e,
        output: "",
        function: "authUser",
      };
      alboranLogger.error("authUser.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      throw new alboranError(e.message, "alboran", errorData);
    }
  },
  logoutUser: async () => {
    try {
    } catch (e) {
      throw e;
    }
  },
};

module.exports = authController;
