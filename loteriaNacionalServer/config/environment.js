module.exports = {
  // SECRETS FOR ENCRYPTION
  authSecret: "Shall I let you pass, or Shall I not?",
  vSecret: "Becoming an outstanding Loteria Nacional User",
  cSecret: "My incredible Loteria Nacional",
  mSecret: "My secret moves will never be discovered",

  // SERVERS DATA
  ventasPort: 6800,
  contenidosPort: 5950,
  lotteryPort: 5480,
  migrationPort: 5000,
  host: "localhost",

  mailjetKey1Angelo: 'b4ca63161564f363c152cb38c11fe8cd',
  mailjetKey2Angelo: 'a4568d6735f54dc085d3ac3e2ab572eb',
  
  mailjetKey1: '3bab0fb6541b67dcc6432ec78e61cf4a',
  mailjetKey2: 'ed376525e47bbc67f419af0aa6b6ea1b',

  emailRemitentePrueba: "admin@ibereffect.com",
  nombreRemitentePrueba: "Asistencia Loteria",

  exalogicHostTest: "test.loteria.com.ec",
  exalogicEndpointTest: "/testlotery_api/XReceiver",
  
  exalogicHostProd: "www.loteria.com.ec",
  exalogicEndpointProd: "/lotery_api/XReceiver",

  // DATA FOR LOTERIA NACIONAL API
  usuarioAplicativoTest: "sitiowebprep",
  passwordAplicativoTest: "12345678",

  usuarioClienteTest: "italtronicprep",
  passwordClienteTest: "12345678",

  usuarioAplicativoProd: "sitiowebprodrsd",
  passwordAplicativoProd: "$13w8p707R6o",

  medioAplicativoId: 17,

  aplicativoAddressTest: "serviciomt-prep.wsdl",
  aplicativoAddressProd: "serviciomt-prod.wsdl",

  // MONGO DATABASE DATA
  //prodDB: "mongodb://loterianacional:%24lndatabase123..%24@ventas-prueba.loteria.com.ec:27017/loteriaDB?replicaSet=backup",
  //prodDB: "mongodb://localhost:27017/loteriaDB",
  prodDB: "mongodb://loterianacional:%24lndatabase123..%24@ventas.loteria.com.ec:27017/loteriaDB?replicaSet=backup",
  //prodDB: "mongodb://loterianacional:%24lndatabase123..%24@localhost:27017/loteriaDB",
  testDB: "mongodb://loterianacional:%24lndatabase123..%24@localhost:27017/loteriaDB",
  
/*   mysqlPort: "3306",
  mysqlUser: "serverUser",
  mysqlPass: "",
  dbName: "LoteriaNacional",
  connectionLimit: 100,
 */
  // STATIC FILES PATHS
  sourceBoletinesTest: "https://ventas-api-prueba.loteria.com.ec/boletines/",
  sourceBoletinesProd: "https://ventas-api.loteria.com.ec/boletines/",
  sourceBoletinesLocal: "http://localhost:5480/boletines/",
  sourceBoletosTest: "https://ventas-api-prueba.loteria.com.ec/boletos/",
  sourceBoletosProd: "https://ventas-api.loteria.com.ec/boletos/",
  sourceBoletosLocal: "http://localhost:5480/boletos/",

  // FTP DATA
  ftpHostLocal: "localhost",
  ftpHostTest: "172.81.117.113",
  ftpHostProd: "144.208.73.177",
  ftpResultadosPort: 2222,
  ftpBoletinesPort: 2224,
  ftpBoletosPort: 2226,
  ftpPassMin: 10520,
  ftpPassMax: 10521,
  ftpUserTest: "test",
  ftpPassTest: "test",
  ftpUserProd: "loterianacional",
  ftpPassProd: "$lnftp123..$",
  ftpResultadosPath: "/uploads/resultados",
  ftpBoletinesPath: "/uploads/boletines",
  ftpBoletosPath: "/uploads/boletos",

  //SSL DATA
  sslPath: "/etc/letsencrypt/live/ventas.loteria.com.ec/",
  sslPathTest: "/etc/letsencrypt/live/ventas-prueba.loteria.com.ec/",
  keyFile: "privkey.pem",
  certFile: "fullchain.pem",
  reqFile: "request.pem",

  
};
