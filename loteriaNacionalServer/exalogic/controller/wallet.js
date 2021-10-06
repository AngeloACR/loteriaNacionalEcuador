const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
const https = require("https");

let exalogicHost = config.exalogicHostTest;
//let exalogicHost = config.exalogicHostProd
let exalogicEndpoint = config.exalogicEndpointTest;

const walletController = {
  reserveLottery: async (data) => {
    try {
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
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          console.error(error);
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
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          console.error(error);
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
              resolve(response);
            }
          });
        });
        req.on("error", (error) => {
          console.error(error);
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
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          console.error(error);
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
              resolve(response);
            }
          });
        });

        req.on("error", (error) => {
          console.error(error);
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
