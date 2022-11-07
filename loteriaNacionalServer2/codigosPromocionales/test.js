const fs = require("fs").promises;
const config = require("../environments/test");

(async () => {
  try {
    let files = await fs.readdir(config.assetsCodigosPromocionalesPath);
    files = files.filter((item) => item != "correo");
    let fileName = files[Math.floor(Math.random() * files.length)];
    let link = `https://ventas-api.loteria.com.ec/assets/${fileName}`;
    console.log(files);
    console.log(link);
  } catch (error) {
    console.log(error.message);
  }
})();
