const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
var {exalogicError} = require("../../errors/customError");
const helper = require("../helper")
const { exalogicLogger } = require("../../config/logging");

const authController = {
  authUserHttp: async (req, res) => {
    try {
      /* {
        "token": "661c0ce5ccabbeb1136a"
      } */
      let token = req.body.token;
      let response = await authController.authUser(token)
      res.status(200).json(response);
    } catch (e) {
      exalogicLogger.error("authUserHttp.error", { errorMessage: e.message, errorData: e.data });
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  authUser: async (data) => {
    try {
      /* {
                "token": "661c0ce5ccabbeb1136a"
            } */
      let token = data;
      let authData = {
        command: "checkToken",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      let response = await helper.exalogicRequest(authData);
      if (response["password"]) delete response["password"];
      if(parseInt(response.resultCode) >= 0){
        
/*         let logData = {
          data: authData,
          response,
          function: "Auth.authUser",
        };
        exalogicLogger.info("authUser.exalogic", logData); */
        return response;
      } else{
        let errorData = {
          input: data,
          output: response,
          function: "authUser"
        }
        throw new exalogicError(response.resultDescription, 'exalogic', errorData)
      }
    
    } catch (e) {
      let errorData = {
        input: e,
        output: "",
        function: "authUser"
      }
      exalogicLogger.error("authUser.error", { errorMessage: e.message, errorData: e.data });
        throw new exalogicError(e.message, 'exalogic', errorData)
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