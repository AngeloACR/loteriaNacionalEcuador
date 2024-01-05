const fs = require("fs").promises;
const config = require("../environments/production");
const CodigoPromocional = require("./models/main");
const Ventas = require("../ventas/models/main");
(async () => {
  try {
    let ventaId = "1040732";
    let venta = await Ventas.findOne({ ventaId });
    let cantidadDeCodigos = 0;
    let totalMillonaria =
      venta.millonaria && venta.millonaria.length
        ? venta.millonaria.reduce((total, item) => {
            return total + parseFloat(item.subtotal);
          }, 0)
        : 0;
    let totalPozo =
      venta.pozo && venta.pozo.length
        ? venta.pozo.reduce((total, item) => {
            return total + parseFloat(item.subtotal);
          }, 0)
        : 0;
    let totalRevancha =
      venta.pozoRevancha && venta.pozoRevancha.length
        ? venta.pozoRevancha.reduce((total, item) => {
            return total + parseFloat(item.subtotal);
          }, 0)
        : 0;
    let total = totalMillonaria + totalPozo + totalRevancha;
    if (total >= 3.5 && total < 5.0) {
      cantidadDeCodigos = 2;
    } else if (total >= 5.0 && total < 9.0) {
      cantidadDeCodigos = 4;
    } else if (total >= 9.0) {
      cantidadDeCodigos = 8;
    }
    console.log(cantidadDeCodigos);
  } catch (error) {
    console.log(error.message);
  }
})();
