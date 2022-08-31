const https = require("https");
var { alboranError } = require("./errors");
const config = require("../environments/production");
const { alboranLogger } = require("./logging");

let alboranHost = config.alboranHost;
let alboranPort = config.alboranPort;
let alboranEndpoint = config.alboranEndpoint;

module.exports.alboranRequest = async (data, endpoint) => {
  try {
    alboranLogger.silly("alboranRequest");
    return new Promise(async (resolve, reject) => {
      try {

        let aux = JSON.stringify(data);
        const options = {
          hostname: alboranHost,
          path: `${alboranEndpoint}${endpoint}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": aux.length,
            "Accept-Encoding": "gzip, deflate, br",
            Accept: "*/*",
            Host: alboranHost,
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
                function: "alboranRequest",
              };
              reject(
                new alboranError(
                  "Ocurrio un error, por favor intente más tarde",
                  "alboran",
                  errorData
                )
              );
            } else {
              let response = body == "" ? "" : JSON.parse(body);
              let logData = {
                data,
                response,
              };
              alboranLogger.info("helper.alboranRequest", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          alboranLogger.error("helper.alboranRequest.error", {
            errorMessage: error.message,
          });
          let errorData = {
            input: error,
            output: "",
            function: "alboranRequest",
          };
          reject(new alboranError(error.message, "alboran", errorData));
        });
        req.write(aux);
        req.end();
      } catch (e) {
        let errorData = {
          input: e,
          output: "",
          function: "alboranRequest",
        };
        reject(new alboranError(e.message, "alboran", errorData));
      }
    });
  } catch (e) {
    throw e;
  }
};
