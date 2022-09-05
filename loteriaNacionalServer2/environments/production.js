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

  host: "localhost",

  //exalogicHost: "test.loteria.com.ec",
  //exalogicEndpoint: "/testlotery_api/XReceiver",

  exalogicHost: "www.loteria.com.ec",
  exalogicEndpoint: "/lotery_api/XReceiver",

  alboranHost: "loteria.mongibello.tech",
  alboranEndpoint: "/out/direct/json/lottery",
  // DATA FOR LOTERIA NACIONAL API
  //usuarioAplicativo: "sitiowebprep",
  //passwordAplicativo: "12345678",

  usuarioCliente: "italtronicprep",
  passwordCliente: "12345678",

  usuarioAplicativo: "sitiowebprodrsd",
  passwordAplicativo: "$13w8p707R6o",

  medioAplicativoId: 17,

  //aplicativoAddress: "serviciomt-prep.wsdl",
  aplicativoAddress: "serviciomt-prod.wsdl",

  // MONGO DATABASE DATA
  //dbAddress: "mongodb://localhost:27017/loteriaDB",
  dbAddress: "mongodb://localhost:27017/loteriaDB",
  //dbAddress:"mongodb://loterianacional:%24lndatabase123..%24@ventas.loteria.com.ec:27017/loteriaDB?replicaSet=backup",

  //MAILJET DATA

  mailjetKey1: "8febfe565d8db8ce66731679afa25b36",
  mailjetKey2: "215166a9f7868b68eb49c954edd0d869",

  //mailjetKey1: "3bab0fb6541b67dcc6432ec78e61cf4a",
  //mailjetKey2: "ed376525e47bbc67f419af0aa6b6ea1b",

  emailRemitente: "ayuda@loteria.com.ec",
  nombreRemitente: "Asistencia Loteria",

  // FTP DATA
  //ftpHost: "localhost",
  //ftpHost: "172.81.117.113",
  ftpHost: "0.0.0.0",

  ftpBoletinesPort: 2224,
  ftpBoletosPort: 2226,

  ftpPassMin: 10520,
  ftpPassMax: 10521,
  //ftpUser: "test",
  //ftpPass: "test",
  ftpUser: "loterianacional",
  ftpPass: "$lnftp123..$",

  ftpBoletinesPath:
    "/root/loteriaNacionalEcuador/loteriaNacionalUploads/boletines",
  ftpBoletosPath: "/root/loteriaNacionalEcuador/loteriaNacionalUploads/boletos",
  imgCorreosPath: "/root/loteriaNacionalEcuador/loteriaNacionalUploads/correos",

  //SSL DATA
  sslPath: "/etc/letsencrypt/live/ventas.loteria.com.ec/",
  sslPathTest: "/etc/letsencrypt/live/ventas-prueba.loteria.com.ec/",
  keyFile: "privkey.pem",
  certFile: "fullchain.pem",
  reqFile: "request.pem",
};
