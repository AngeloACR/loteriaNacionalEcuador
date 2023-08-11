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
  sorteosBingazoPort: 15500,
  sorteosLaMillonariaPort: 7000,
  ganadoresPort: 7500,
  authPort: 8000,
  walletPort: 8500,
  uploadsPort: 9000,
  helperPort: 9500,
  codigosPromocionalesPort: 10000,
  sorteosFacilottoPort: 12250,
  host: "localhost",

  alboranHost: "loteria.mongibello.tech",
  alboranEndpoint: "/out/direct/json/lottery",

  // DATA FOR LOTERIA NACIONAL API
  usuarioAplicativo: "sitiowebprep",
  passwordAplicativo: "12345678",

  usuarioCliente: "italtronicprep",
  passwordCliente: "12345678",

  medioAplicativoId: 17,

  aplicativoAddress: "serviciomt-prep.wsdl",

  // MONGO DATABASE DATA
  dbAddress: "mongodb://localhost:27017/loteriaDB",

  //MAILJET DATA

  mailjetKey1: "b4ca63161564f363c152cb38c11fe8cd",
  mailjetKey2: "a4568d6735f54dc085d3ac3e2ab572eb",

  //mailjetKey1: "3bab0fb6541b67dcc6432ec78e61cf4a",
  //mailjetKey2: "ed376525e47bbc67f419af0aa6b6ea1b",
  ventasURL: "http://localhost",

  emailRemitente: "angelocrincoli91@gmail.com",
  nombreRemitente: "Asistencia Loteria",
  ftpBoletinesPath:
    "/home/angeloacr/Proyectos/loteriaNacional/app/loteriaNacionalUploads/boletines",
  ftpBoletosPath:
    "/home/angeloacr/Proyectos/loteriaNacional/app/loteriaNacionalUploads/boletos",
  resultadosPath: "/home/angeloacr/Proyectos/loteriaNacional/backuptest",
  pega3Path: "/home/lottoweb/pega3",
  bingazoPath: "/home/lottoweb/bingazo",

  imgCorreosPath:
    "/home/angeloacr/Proyectos/loteriaNacional/app/loteriaNacionalUploads/correos",
  assetsCodigosPromocionalesPath:
    "C:\\Users\\angel\\Proyectos\\loteria\\loteriaNacionalEcuador\\loteriaNacionalServer2\\codigosPromocionales\\assets",
  sendinbluePath:
    "/home/acri/loteriaNacionalEcuador/loteriaNacionalServer2/web/public/assets/sendinblue",

  destinatarios: [
    { nombre: "Angelo Crincoli", correo: "angelocrincoli91@gmail.com" },
    { nombre: "Francisco Vidal", correo: "f0414475@gmail.com" },
  ],
};
