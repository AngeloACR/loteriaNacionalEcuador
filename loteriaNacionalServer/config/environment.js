module.exports = {

    // SECRETS FOR ENCRYPTION
    authSecret: 'Shall I let you pass, or Shall I not?',
    vSecret: 'Becoming an outstanding Loteria Nacional User',
    cSecret: 'My incredible Loteria Nacional',
    mSecret: 'My secret moves will never be discovered',

    production: false,

    ventasPort: 6800,
    contenidosPort: 5950,
    lotteryPort: 5480,
    host: 'localhost',

    prodDB: "mongodb://localhost:27017/loteriaDB",
    testDB: "mongodb://localhost:27017/loteriaPruebaDB",
    mysqlPort: '3306',
    mysqlUser: 'serverUser',
    mysqlPass: '',
    dbName: "LoteriaNacional",
    connectionLimit: 100,
    sourceBoletinesA: 'https://contenidos-prueba.loteria.com.ec/boletines/',
    sourceBoletinesB: 'https://ventas-api-prueba.loteria.com.ec/boletines/',
    sourceBoletinesC: 'http://localhost:5480/boletines/',
    ftpHostTest: 'localhost',
    ftpHostProd: '172.81.117.113',
    ftpPort: 2222,
    ftpPassMin: 10520,
    ftpPassMax: 10600,
}