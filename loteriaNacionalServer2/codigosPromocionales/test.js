const fs = require("fs").promises;
const config = require("../environments/test");
const CodigoPromocional = require("./models/main");
const Ventas = require("../ventas/models/main");
(async () => {
  try {
    let ventaId = "1040732";
    let venta = await Ventas.findOne({ ventaId });
    let totalMillonaria = venta.millonaria.reduce((total, item) => {
      return total + parseFloat(item.subtotal);
    }, 0);
    let totalPozo = venta.pozo.reduce((total, item) => {
      return total + parseFloat(item.subtotal);
    }, 0);
    let totalRevancha = venta.pozoRevancha.reduce((total, item) => {
      return total + parseFloat(item.subtotal);
    }, 0);
    let total = totalMillonaria + totalPozo + totalRevancha;
    console.log(total);
  } catch (error) {
    console.log(error.message);
  }
})();
