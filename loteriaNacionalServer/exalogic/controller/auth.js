const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
const https = require("https");
const { exalogicLogger } = require("../../config/logging");

let exalogicHost = config.exalogicHostTest;
let exalogicEndpoint = config.exalogicEndpointTest;
//let exalogicHost = config.exalogicHostProd

const authController = {
  authUser: async (authData) => {
    try {
      exalogicLogger.silly("authUser");
      return new Promise(async (resolve, reject) => {
        //await authController.logoutUser();

        authData = JSON.stringify(authData);
        const options = {
          hostname: exalogicHost,
          port: 443,
          path: exalogicEndpoint,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": authData.length,
          },
        };
        const req = https.request(options, (res) => {
          var body = "";
          res.on("data", function (chunk) {
            body = body + chunk;
          });

          res.on("end", async function () {
            if (res.statusCode != 200) {
              reject(
                new Error("Ocurrio un error, por favor intente más tarde")
              );
            } else {
              let response = body == "" ? "" : JSON.parse(body);
              let logData = {
                data: authData,
                response,
              };
              exalogicLogger.info("authUser.exalogic", JSON.stringify(logData));
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          exalogicLogger.error("authUser.exalogic.error", {
            message: error.message,
          });
          reject(new Error(error));
        });
        req.write(authData);
        req.end();
      });
    } catch (e) {
      throw e;
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
