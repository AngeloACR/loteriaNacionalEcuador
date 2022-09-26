const ftpBoletosServer = require("./ftpBoletosServer");
const config = require("../environments/production");

const ftpHost = config.ftpHost;

const ftpBoletosPort = config.ftpBoletosPort;
const ftpBoletosApp = ftpBoletosServer.init(ftpHost, ftpBoletosPort);

ftpBoletosApp.listen().then(() => {
  console.log(`Server running at ftp://${ftpHost}:${ftpBoletosPort}/`);
});
