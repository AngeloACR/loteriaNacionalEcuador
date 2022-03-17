const https = require("https");
var { exalogicError } = require("../errors/customError");
const config = require("../config/environment");
const { exalogicLogger } = require("../config/logging");

let exalogicHost = config.exalogicHostTest;
let exalogicEndpoint = config.exalogicEndpointTest;

/* let exalogicHost = config.exalogicHostProd;
let exalogicEndpoint = config.exalogicEndpointProd;
 */
module.exports.exalogicRequest = async (data) => {
  try {
    exalogicLogger.silly("exalogicRequest");
    return new Promise(async (resolve, reject) => {
      try {
        //await authController.logoutUser();

        let aux = JSON.stringify(data);
        const options = {
          hostname: exalogicHost,
          port: 443,
          path: exalogicEndpoint,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": aux.length,
          },
        };
        const req = https.request(options, (res) => {
          var body = "";
          res.on("data", function (chunk) {
            body = body + chunk;
          });

          res.on("end", async function () {
            if (res.statusCode != 200) {
              let errorData = {
                output: body,
                input: data,
                function: "exalogicRequest",
              };
              reject(
                new exalogicError(
                  "Ocurrio un error, por favor intente más tarde",
                  "exalogic",
                  errorData
                )
              );
            } else {
              let response = body == "" ? "" : JSON.parse(body);
              let logData = {
                data,
                response,
              };
              exalogicLogger.info("helper.exalogicRequest", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          exalogicLogger.error("helper.exalogicRequest.error", {
            errorMessage: error.message,
          });
          let errorData = {
            input: error,
            output: "",
            function: "exalogicRequest",
          };
          reject(new exalogicError(error.message, "exalogic", errorData));
        });
        req.write(aux);
        req.end();
      } catch (e) {
        let errorData = {
          input: e,
          output: "",
          function: "exalogicRequest",
        };
        reject(new exalogicError(e.message, "exalogic", errorData));
      }
    });
  } catch (e) {
    throw e;
  }
};
