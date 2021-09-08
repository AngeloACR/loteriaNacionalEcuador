const ftpBoletinesServer = require('./ftpBoletinesServer');
const config = require('./config/environment');

//const ftpHost = config.ftpHostLocal;
//const ftpHost = config.ftpHostTest;
const ftpHost = config.ftpHostProd;
const ftpBoletinesPort = config.ftpBoletinesPort;
const ftpBoletinesApp = ftpBoletinesServer.init(ftpHost, ftpBoletinesPort);

ftpBoletinesApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpBoletinesPort}/`);
    });