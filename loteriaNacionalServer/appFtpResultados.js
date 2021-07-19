
const ftpResultadosServer = require('./ftpResultadosServer');
const config = require('./config/environment');

const ftpResultadosPort = config.ftpResultadosPort;
const ftpResultadosApp = ftpResultadosServer.init(ftpHost, ftpResultadosPort);

//const ftpHost = config.ftpHostLocal;
const ftpHost = config.ftpHostTest;
//const ftpHost = config.ftpHostProd;

ftpResultadosApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpResultadosPort}/`);
    });
