const fs = require("fs").promises;
const config = require("../environments/production");
const CodigoPromocional = require("./models/main");
const Ventas = require("../ventas/models/main");
(async () => {
  try {
    let ventaId = "3757484";
    let ventas = await Ventas.find({
      millonaria: { $size: 1 },
    });
    ventas.forEach((venta) => {
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
      total >= 9 && console.log(total);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
