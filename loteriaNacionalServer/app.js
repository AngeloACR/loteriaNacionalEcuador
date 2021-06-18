const lotteryServer = require('./lotteryServer');
const ftpServer = require('./ftpServer');
const webServer = require('./webServer');
const userServer = require('./userServer');
const config = require('./config/environment');

const webPort = config.ventasPort;
const webFolder = './public/loteriaNacionalWeb';
const webPath = webFolder + '/index.html';
const webApp = webServer.init(webFolder, webPath, webPort);

webApp.listen(webPort, () => {
    console.log('Server running at: ' + webPort);
});

const lotteryPort = config.lotteryPort;
const lotteryApp = lotteryServer.init(lotteryPort);

lotteryApp.listen(lotteryPort, () => {
    console.log('Server running at: ' + lotteryPort);
});

const ftpHost = config.ftpHost;
const ftpPort = config.ftpPort;

const ftpApp = ftpServer.init(ftpHost, ftpPort);

ftpApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpPort}/`);
    });
/*
const userPort = config.userPort;
const userApp = userServer.init(userPort);

userApp.listen(userPort, () => {
    console.log('Server running at: ' + userPort);
}); */