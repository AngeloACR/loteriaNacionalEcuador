const controller = require("./controller/main");

(async () => {
  try {
    let data = await controller.limpiarDB();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();
