const db = require('./database');
const lotteryServer = require('./lotteryServer');
const ftpServer = require('./ftpServer');
const webServer = require('./webServer');
const userServer = require('./userServer');
const config = require('./config/environment');
const cronjobs = require('./cronjobs');

const webPort = config.ventasPort;
const webFolder = './public/loteriaNacionalWeb';
const webPath = webFolder + '/index.html';
const webApp = webServer.init(webFolder, webPath, webPort);

const connection = db.initConnect();

webApp.listen(webPort, () => {
    console.log('Server running at: ' + webPort);
});

const lotteryPort = config.lotteryPort;
const lotteryApp = lotteryServer.init(lotteryPort);

lotteryApp.listen(lotteryPort, () => {
    console.log('Server running at: ' + lotteryPort);
});

const ftpHost = config.ftpHostTest;
//const ftpHost = config.ftpHostProd;
const ftpPort = config.ftpPort;
const ftpPassMin = config.ftpPassMin;
const ftpPassMax = config.ftpPassMax;

const ftpApp = ftpServer.init(ftpHost, ftpPort, ftpPassMin, ftpPassMax);

ftpApp.listen()
    .then(() => {
        console.log(`Server running at ftp://${ftpHost}:${ftpPort}/`);
    });

let jobs = cronjobs.setCronJobs();
jobs.forEach(job => {
    job.start();
});
/*
const userPort = config.userPort;
const userApp = userServer.init(userPort);

userApp.listen(userPort, () => {
    console.log('Server running at: ' + userPort);
}); */