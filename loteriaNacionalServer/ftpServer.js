const FtpSrv = require('ftp-srv');


module.exports.init = function (hostname, port) {

    const ftpServer = new FtpSrv({
        url: `ftp://${hostname}:${port}`,
        greeting: ['Welcome', 'to', 'the', 'jungle!'],
    });

    ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
        if (username === 'test' && password === 'test' || username === 'anonymous') {
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
            console.log(fileData)
        });
    });

    ftpServer.on('client-error', (connection, context, error) => {
        console.log('connection: ' + connection);
        console.log('context: ' + context);
        console.log('error: ' + error);
    });


    return ftpServer
}