const auth = require("./auth");
const juegos = require("./juegos");
const resultados = require("./resultados");
const sorteos = require("./sorteos");
const ventas = require("./ventas");
const reservas = require("./reservas");
const config = require("../environments/test");


(async () => {
  try {
    //let data = await auth.authTest("0951234566", "Pass1234!");
   /* let aux = await ventas.validarVentaPorOrdenDeCompra(
      data,
      "1679381947289",
      "0951234566",
      "192.168.0.1"
    ); */
    
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );

    //let response = await sorteos.consultarSorteosJugados(18, data);
    let response = await resultados.consultarUltimosResultados(12, data);
    console.log(response)

    /* let aux = await reservas.validarReservas(
      data,
      "498320",
      "0951234566",
      "192.168.0.1"
    ); */
    //let aux = await juegos.consultaFiguras(data, 5, "192.168.0.1");
  } catch (error) {
    console.log(error);
  }
})();
