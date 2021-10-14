const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
const https = require("https");
const { exalogicLogger } = require("../../config/logging");

//let exalogicHost = config.exalogicHostTest;
//let exalogicEndpoint = config.exalogicEndpointTest;
let exalogicHost = config.exalogicHostProd
let exalogicEndpoint = config.exalogicEndpointProd;

const walletController = {
  reserveLottery: async (data) => {
    try {
    exalogicLogger.silly("reserveLottery");
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
              exalogicLogger.info("reserveLottery.exalogic", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {

          exalogicLogger.error("reserveLottery.exalogic.error", {
            errorMessage: error.message,
          });
          reject(new Error(error));
        });

        req.write(data);
        req.end();
      });
    } catch (e) {
      throw e;
    }
  },
  sellLottery: async (data) => {
    try {
    exalogicLogger.silly("sellLottery");
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
              exalogicLogger.info("sellLottery.exalogic", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {

          exalogicLogger.error("sellLottery.exalogic.error", {
            errorMessage: error.message,
          });
          reject(new Error(error));
        });

        req.write(data);
        req.end();
      });
    } catch (e) {
      throw e;
    }
  },
  cancelLottery: async (data) => {
    try {
    exalogicLogger.silly("cancelLottery");
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
              exalogicLogger.info("cancelLottery.exalogic", logData);
              resolve(response);
            }
          });
        });
        req.on("error", (error) => {
          exalogicLogger.error("cancelLottery.exalogic.error", {
            errorMessage: error.message,
          });
          reject(new Error(error));
        });

        req.write(data);
        req.end();
      });
    } catch (e) {
      throw e;
    }
  },
  getBalance: async (data) => {
    try {
    exalogicLogger.silly("getBalance");
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
              exalogicLogger.info("getBalance.exalogic", logData);
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          exalogicLogger.error("getBalance.exalogic.error", {
            errorMessage: error.message,
          });
          reject(new Error(error));
        });

        req.write(data);
        req.end();

      });
    } catch (e) {
      throw e;
    }
  },
  payLottery: async (data) => {
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
          reject(new Error(error));
        });

        req.write(data);
        req.end();

      });
    } catch (e) {
      throw e;
    }
  },
};

module.exports = walletController;
