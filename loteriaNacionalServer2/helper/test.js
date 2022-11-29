const controller = require("./controller/main");

(async () => {
  try {
    let data = await controller.fixReserve();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();
