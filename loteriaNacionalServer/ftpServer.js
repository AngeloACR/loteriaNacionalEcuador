const FtpSrv = require('ftp-srv');
const ResultadosController = require('./results/controller/main')

module.exports.init = function (hostname, port, ftpPassMin, ftpPassMax) {

    const ftpServer = new FtpSrv({
        url: `ftp://${hostname}:${port}`,
        greeting: ['Welcome', 'to', 'the', 'jungle!'],
        pasv_url: "172.81.117.113",
        pasv_min: ftpPassMin,
        pasv_max: ftpPassMax,
    });

    ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
        if (username === 'test' && password === 'test') {
            resolve({ root: `${__dirname}/uploads` });
        } else reject('Bad username or password');

        connection.on('STOR', (error, filePath) => {
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
                case 'SORT':
                    ResultadosController.agregarSorteos(fileData.sorteo, fileData.tipoLoteria, true)

                    break;

                default:
                    break;
            }
        });
    });

    ftpServer.on('client-error', (connection, context, error) => {
        console.log('connection: ' + connection);
        console.log('context: ' + context);
        console.log('error: ' + error);
    });


    return ftpServer
}