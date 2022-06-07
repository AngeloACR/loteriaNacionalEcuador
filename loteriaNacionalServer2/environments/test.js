module.exports = {
  // SECRETS FOR ENCRYPTION
  authSecret: "Shall I let you pass, or Shall I not?",
  vSecret: "Becoming an outstanding Loteria Nacional User",
  cSecret: "My incredible Loteria Nacional",
  mSecret: "My secret moves will never be discovered",

  // SERVERS DATA
  webPort: 6800,
  contenidosPort: 5950,

  ventasPort: 4000,
  reservasPort: 4500,
  sorteosLoteriaNacionalPort: 5500,
  sorteosLottoPort: 6000,
  sorteosPozoMillonarioPort: 6500,
  sorteosLaMillonariaPort: 7000,
  ganadoresPort: 7500,
  authPort: 8000,
  walletPort: 8500,
  uploadsPort: 9000,
  helperPort: 9500,
  codigosPromocionalesPort: 10000,

  host: "localhost",

  exalogicHost: "test.loteria.com.ec",
  exalogicEndpoint: "/testlotery_api/XReceiver",

  //exalogicHost: "www.loteria.com.ec",
  //exalogicEndpoint: "/lotery_api/XReceiver",

  // DATA FOR LOTERIA NACIONAL API
  usuarioAplicativo: "sitiowebprep",
  passwordAplicativo: "12345678",

  usuarioCliente: "italtronicprep",
  passwordCliente: "12345678",

  //usuarioAplicativo: "sitiowebprodrsd",
  //passwordAplicativo: "$13w8p707R6o",

  medioAplicativoId: 17,

  aplicativoAddress: "serviciomt-prep.wsdl",
  //aplicativoAddress: "serviciomt-prod.wsdl",

  // MONGO DATABASE DATA
  //dbAddress: "mongodb://localhost:27017/loteriaDB",
  dbAddress: "mongodb://loterianacional:%24lndatabase123..%24@ventas-prueba.loteria.com.ec:27017/loteriaDB?replicaSet=backuptest",
  //dbAddress: "mongodb://loterianacional:%24lndatabase123..%24@ventas.loteria.com.ec:27017/loteriaDB?replicaSet=backup",

  //MAILJET DATA

  mailjetKey1Angelo: "b4ca63161564f363c152cb38c11fe8cd",
  mailjetKey2Angelo: "a4568d6735f54dc085d3ac3e2ab572eb",

  mailjetKey1: "3bab0fb6541b67dcc6432ec78e61cf4a",
  mailjetKey2: "ed376525e47bbc67f419af0aa6b6ea1b",

  emailRemitentePrueba: "admin@ibereffect.com",
  nombreRemitentePrueba: "Asistencia Loteria",

  /*   mysqlPort: "3306",
    mysqlUser: "serverUser",
    mysqlPass: "",
    dbName: "LoteriaNacional",
    connectionLimit: 100,
   */

  // FTP DATA
  //ftpHost: "localhost",
  ftpHost: "172.81.117.113",
  //ftpHost: "144.208.73.177",

  ftpBoletinesPort: 2224,
  ftpBoletosPort: 2226,

  ftpPassMin: 10520,
  ftpPassMax: 10521,
  ftpUser: "test",
  ftpPass: "test",
  //ftpUser: "loterianacional",
  //ftpPass: "$lnftp123..$",

  ftpBoletinesPath: "/uploads/boletines",
  ftpBoletosPath: "/uploads/boletos",

  //SSL DATA
  //sslPath: "/etc/letsencrypt/live/ventas.loteria.com.ec/",
  sslPath: "/etc/letsencrypt/live/ventas-prueba.loteria.com.ec/",
  keyFile: "privkey.pem",
  certFile: "fullchain.pem",
  reqFile: "request.pem",
};
