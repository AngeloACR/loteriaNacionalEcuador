module.exports = {
  // SECRETS FOR ENCRYPTION
  authSecret: "Shall I let you pass, or Shall I not?",
  vSecret: "Becoming an outstanding Loteria Nacional User",
  cSecret: "My incredible Loteria Nacional",
  mSecret: "My secret moves will never be discovered",

  // SERVERS DATA
  webPort: 6800,
  contenidosPort: 5950,

  adminPort: 3850,
  ventasPort: 4000,
  reservasPort: 4500,
  sorteosLoteriaNacionalPort: 5500,
  sorteosLottoPort: 6000,
  sorteosPozoMillonarioPort: 6500,
  sorteosPozoRevanchaPort: 10500,
  sorteosLaMillonariaPort: 7000,
  sorteosBingazoPort: 15500,
  ganadoresPort: 7500,
  authPort: 8000,
  walletPort: 8500,
  uploadsPort: 9000,
  helperPort: 9500,
  codigosPromocionalesPort: 10000,
  sorteosFacilottoPort: 12250,
  descuentosPort: 12550,

  host: "localhost",

  alboranHost: "mtpu.bet593.ec",
  alboranEndpoint: "/out/direct/json/lottery",

  // DATA FOR LOTERIA NACIONAL API

  usuarioCliente: "italtronicprep",
  passwordCliente: "12345678",

  usuarioAplicativo: "sitiowebprodrsd",
  passwordAplicativo: "$13w8p707R6o",

  medioAplicativoId: 17,

  aplicativoAddress: "serviciomt-prod.wsdl",

  // MONGO DATABASE DATA
  dbAddress: "mongodb://localhost:27017/loteriaDB",
  //dbAddress:"mongodb://loterianacional:%24lndatabase123..%24@ventas.loteria.com.ec:27017/loteriaDB?replicaSet=backup",

  //MAILJET DATA

  mailjetKey1: "8febfe565d8db8ce66731679afa25b36",
  mailjetKey2: "215166a9f7868b68eb49c954edd0d869",

  //mailjetKey1: "3bab0fb6541b67dcc6432ec78e61cf4a",
  //mailjetKey2: "ed376525e47bbc67f419af0aa6b6ea1b",

  ventasURL: "https://ventas-api.loteria.com.ec",
  emailRemitente: "ayuda@loteria.com.ec",
  nombreRemitente: "Asistencia Loteria",
  ftpBoletinesPath: "/home/lottoweb/boletines",
  ftpBoletosPath: "/home/lottoweb/boletos",
  resultadosPath: "/home/lottoweb/resultados",
  pega3Path: "/home/lottoweb/pega3",
  pega4Path: "/home/lottoweb/pega4",
  bingazoPath: "/home/lottoweb/bingazo",

  imgCorreosPath:
    "/home/acri/loteriaNacionalEcuador/loteriaNacionalUploads/correos",
  assetsCodigosPromocionalesPath:
    "/home/acri/loteriaNacionalEcuador/loteriaNacionalServer2/codigosPromocionales/assets",
  adminUploadsPath:
    "/home/acri/loteriaNacionalEcuador/loteriaNacionalServer2/admin/assets",
  sendinbluePath:
    "/home/acri/loteriaNacionalEcuador/loteriaNacionalServer2/web/public/assets/sendinblue",

  destinatarios: [
    { nombre: "Angelo Crincoli", correo: "angelocrincoli91@gmail.com" },
    { nombre: "Andrés Alvear", correo: "aalvearl@loteria.com.ec" },
  ],
};
