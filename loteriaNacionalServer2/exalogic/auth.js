var {exalogicError} = require("./errors");
const helper = require("./helper")
const { exalogicLogger } = require("./logging");

const authController = {

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