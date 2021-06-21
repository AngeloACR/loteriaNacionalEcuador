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

    ftpHost: 'localhost',
    ftpPort: 2222
}