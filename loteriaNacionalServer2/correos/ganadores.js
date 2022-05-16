const config = require("../environments/test");
const mailjet = require("node-mailjet").connect(
  config.mailjetKey1,
  config.mailjetKey2
);

module.exports.sendEmail = async (emailGanador, nombreGanador, ordenDePago) => {
  return new Promise(async (resolve, reject) => {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: config.emailRemitentePrueba,
            Name: config.nombreRemitentePrueba,
          },
          To: [
            {
              Email: emailGanador,
              Name: nombreGanador,
            },
          ],
          Subject: "Greetings from Mailjet.",
          TextPart: "My first Mailjet email",
          /* CREAR PLANTILLA PARA CORREO DE GANADORES EN ESPECIASs */
          HTMLPart: `<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you! El numero de la orden de pago es ${ordenDePago}`,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });
    request
      .then((result) => {
        resolve(result.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
