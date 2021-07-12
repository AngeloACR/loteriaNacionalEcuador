module.exports = {

    // SECRETS FOR ENCRYPTION
    authSecret: 'Shall I let you pass, or Shall I not?',
    vSecret: 'Becoming an outstanding Loteria Nacional User',
    cSecret: 'My incredible Loteria Nacional',
    mSecret: 'My secret moves will never be discovered',

    // SERVERS DATA
    ventasPort: 6800,
    contenidosPort: 5950,
    lotteryPort: 5480,
    host: 'localhost',

    // DATA FOR LOTERIA NACIONAL API
    usuarioAplicativoTest: 'sitiowebprep',
    passwordAplicativoTest: '12345678',

    usuarioAplicativoProd: 'sitiowebprodrsd',
    passwordAplicativoProd: '$13w8p707R6o',

    medioAplicatioId: 17,

    aplicativoAddressTest: 'serviciomt-prep.wsdl',
    aplicativoAddressProd: 'serviciomt-prod.wsdl',

    // DATABASE DATA
    prodDB: "mongodb://localhost:27017/loteriaDB",
    testDB: "mongodb://localhost:27017/loteriaPruebaDB",
    mysqlPort: '3306',
    mysqlUser: 'serverUser',
    mysqlPass: '',
    dbName: "LoteriaNacional",
    connectionLimit: 100,

    // STATIC FILES PATHS
    sourceBoletinesA: 'https://contenidos-prueba.loteria.com.ec/boletines/',
    sourceBoletinesB: 'https://ventas-api-prueba.loteria.com.ec/boletines/',
    sourceBoletinesC: 'http://localhost:5480/boletines/',

    // FTP DATA
    ftpHostLocal: 'localhost',
    ftpHostTest: '172.81.117.113',
    ftpHostProd: '144.208.73.177',
    ftpResultadosPort: 2222,
    ftpBoletinesPort: 2224,
    ftpPassMin: 10520,
    ftpPassMax: 10600,
    ftpUserTest: 'test',
    ftpUserProd: 'loterianacional',
    ftpPassTest: 'test',
    ftpPassProd: '$lnftp123..$',
    ftpPath: '/uploads/resultados',

    //SSL DATA
    sslPath: '/etc/letsencrypt/live/ventas.loteria.com.ec/',
    keyFile: 'privkey.pem',
    certFile: 'fullchain.pem',
    reqFile: 'request.pem'

}