
const ftpResultadosServer = require('./ftpResultadosServer');
const config = require('./config/environment');

//const ftpHost = config.ftpHostLocal;
const ftpHost = config.ftpHostTest;
//const ftpHost = config.ftpHostProd;
const ftpResultadosPort = config.ftpResultadosPort;
const ftpResultadosApp = ftpResultadosServer.init(ftpHost, ftpResultadosPort);


ftpResultadosApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpResultadosPort}/`);
    });
