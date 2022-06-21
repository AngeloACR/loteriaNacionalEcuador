let codigos = require("./controller/main");

codigos
  .getCodeCsv()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
