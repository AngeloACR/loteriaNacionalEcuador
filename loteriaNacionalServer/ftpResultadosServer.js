const FtpSrv = require('ftp-srv');
const ResultadosController = require('./results/controller/main')
const config = require('./config/environment');


/* const ftpUser = config.ftpUserTest;
const ftpPass = config.ftpPassTest; */
/* const ftpUser = config.ftpUserProd;
const ftpPass = config.ftpPassProd; */

const ftpPath = `${__dirname}${config.ftpResultadosPath}`;


const ftpPassMin = config.ftpPassMin;
const ftpPassMax = config.ftpPassMax;


var fs = require('fs');


module.exports.init = function (ftpHost, ftpPort) {

    const ftpUrl = `ftp://${ftpHost}:${ftpPort}`;
    /* const keyPath = path.join(config.sslPath, config.keyFile);
    const certPath = path.join(config.sslPath, config.certFile);
    const reqPath = path.join(config.sslPath, config.reqFile);
    const ftpServer = new FtpSrv({
        url: ftpUrl,
        greeting: ['Welcome', 'to', 'the', 'jungle!'],
        tls: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
            ca: fs.readFileSync(reqPath)
        },
        pasv_url: ftpHost,
        pasv_min: ftpPassMin,
        pasv_max: ftpPassMax,
    }); */

    const ftpServer = new FtpSrv({
        url: ftpUrl,
        greeting: ['Welcome', 'to', 'the', 'jungle!'],
        pasv_url: ftpHost,
        pasv_min: ftpPassMin,
        pasv_max: ftpPassMax,
    });

    ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
        if (username === ftpUser && password === ftpPass) {
            console.log(ftpPath);
            resolve({ root: ftpPath });
        } else reject('Bad username or password');

        connection.on('STOR', (error, filePath) => {
            console.log(error);
            if (error) return;
            let aux = filePath.split('/');
            let fileName = aux[aux.length - 1];
            let fileAux = fileName.split('-');
            let sorteo = fileAux[2].split('.')[0];
            let fileData = {

                fileType: fileAux[0],
                tipoLoteria: fileAux[1],
                sorteo
            }
            console.log(fileData);

            switch (fileData.fileType) {
                case 'BOLPRE':
                    ResultadosController.agregarResultados(fileData.sorteo, fileData.tipoLoteria)
                    break;
                case 'PREM':
                    ResultadosController.agregarPremios(fileData.sorteo, fileData.tipoLoteria)

                    break;
                default:
                    break;
            }
        });
    });

    ftpServer.on('client-error', (connection, context, error) => {
        console.log(connection);
        console.log(context);
        console.log(error);
    });


    return ftpServer
}