const fs = require("fs").promises;
const auth = require("./auth");
const juegos = require("./juegos");
const config = require("../environments/local");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
(async () => {
  try {
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );

    let userData = await auth.consultarDatosUsuario2(
      data,
      "1701006692",
      "192.168.0.1"
    );

    let userData2 = await auth.consultarDatosUsuario(
      data,
      userData.personaId,
      "192.168.0.1"
    );
  } catch (error) {
    console.log(error);
  }
})();
