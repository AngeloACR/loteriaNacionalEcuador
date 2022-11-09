const fs = require("fs").promises;
const config = require("../environments/test");
const CodigoPromocional = require("./models/main");
(async () => {
  try {
    await CodigoPromocional.populate();
    console.log("Done");
  } catch (error) {
    console.log(error.message);
  }
})();
