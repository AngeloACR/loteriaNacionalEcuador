const auth = require("./auth");
const juegos = require("./juegos");
const resultados = require("./resultados");
const sorteos = require("./sorteos");
const config = require("../environments/test");

(async () => {
  try {
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );

    let aux = await juegos.consultaFiguras(data, 5, "192.168.0.1");
    console.log(aux);
  } catch (error) {
    console.log(error);
  }
})();
