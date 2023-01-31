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
      let enterosMillonaria = venta.millonaria.filter(
        (item) => item.fracciones.length == 3
      ).length;
      let adicionalMillonaria = venta.millonaria.filter(
        (item) => item.fracciones.length != 3
      ).length
        ? 1
        : 0;
      let pozo = venta.pozo.length >= 2 ? 1 : 0;
      let revancha = !!pozo && venta.pozoRevancha.length >= 1 ? 1 : 0;
      let totalCupones =
        enterosMillonaria + adicionalMillonaria + pozo + revancha;
      console.log(totalCupones);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
