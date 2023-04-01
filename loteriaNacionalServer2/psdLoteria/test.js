const auth = require("./auth");
const juegos = require("./juegos");
const resultados = require("./resultados");
const sorteos = require("./sorteos");
const ventas = require("./ventas");
const reservas = require("./reservas");
const config = require("../environments/production");

(async () => {
  try {
    let data = await auth.authTest("0951234566", "Pass1234!");
   let aux = await ventas.validarVentaPorOrdenDeCompra(
      data,
      "1679381947289",
      "0951234566",
      "192.168.0.1"
    );
    /* let aux = await reservas.validarReservas(
      data,
      "498320",
      "0951234566",
      "192.168.0.1"
    ); */
    //let aux = await juegos.consultaFiguras(data, 5, "192.168.0.1");
    console.log(aux);
  } catch (error) {
    console.log(error);
  }
})();
