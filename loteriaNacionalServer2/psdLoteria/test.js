const auth = require("./auth");
const juegos = require("./juegos");
const config = require("../environments/test");

(async () => {
  try {
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );
    let figuras = await juegos.consultaFiguras(data, 5, "192.168.0.1");
    console.log(figuras);
  } catch (error) {
    console.log(error);
  }
})();
