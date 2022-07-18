const ftpBoletinesServer = require("./ftpBoletinesServer");
const config = require("../environments/local");

const ftpHost = config.ftpHost;

const ftpBoletinesPort = config.ftpBoletinesPort;
const ftpBoletinesApp = ftpBoletinesServer.init(ftpHost, ftpBoletinesPort);

ftpBoletinesApp.listen().then(() => {
  console.log(`Server running at ftp://${ftpHost}:${ftpBoletinesPort}/`);
});
