const FtpSrv = require("ftp-srv");
const config = require("../environments/production");
const path = require("path");

const ftpUser = config.ftpUser;
const ftpPass = config.ftpPass;

const ftpPath = `${config.ftpBoletinesPath}`;

const ftpPassMin = config.ftpPassMin;
const ftpPassMax = config.ftpPassMax;

var fs = require("fs");

module.exports.init = function (ftpHost, ftpPort) {
  const ftpUrl = `ftp://${ftpHost}:${ftpPort}`;
  const ftpServer = new FtpSrv({
    url: ftpUrl,
    greeting: ["Bienvenido", "al", "FTP", "de", "boletines"],

    pasv_url: ftpHost,
    pasv_min: ftpPassMin,
    pasv_max: ftpPassMax,
  });

  /* const ftpServer = new FtpSrv({
        url: ftpUrl,
        greeting: ['Welcome', 'to', 'the', 'jungle!'],
        pasv_url: ftpHost,
        pasv_min: ftpPassMin,
        pasv_max: ftpPassMax,
    }); */

  ftpServer.on(
    "login",
    ({ connection, username, password }, resolve, reject) => {
      if (username === ftpUser && password === ftpPass) {
        resolve({ root: ftpPath });
      } else reject("Bad username or password");

      connection.on("STOR", (error, filePath) => {
        let aux = filePath.split("/");
        let fileName = aux[aux.length - 1];
      });
    }
  );

  ftpServer.on("client-error", (connection, context, error) => {
    console.log("connection: " + connection);
    console.log("context: " + context);
    console.log("error: " + error);
  });

  return ftpServer;
};
