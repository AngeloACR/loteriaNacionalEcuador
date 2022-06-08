const email = require("./codigoPromocional");

email.sendEmail( "angelocrincoli91@gmail.com","Angelo", [
  "0000001",
  "0200001",
  "1000001",
  "0004001",
  "0000050",
]).then((data) => {

    console.log(data);
});
