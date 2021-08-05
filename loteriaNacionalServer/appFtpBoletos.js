const ftpBoletosServer = require('./ftpBoletosServer');
const config = require('./config/environment');

//const ftpHost = config.ftpHostLocal;
const ftpHost = config.ftpHostTest;
//const ftpHost = config.ftpHostProd;
const ftpBoletosPort = config.ftpBoletosPort;
const ftpBoletosApp = ftpBoletosServer.init(ftpHost, ftpBoletosPort);

ftpBoletosApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpBoletosPort}/`);
    });