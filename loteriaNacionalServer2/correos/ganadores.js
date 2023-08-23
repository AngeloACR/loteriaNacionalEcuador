const config = require("../environments/local");

const fs = require("fs");
const path = require("path");
const mailjet = require("node-mailjet").connect(
  config.mailjetKey1,
  config.mailjetKey2
);

module.exports.sendEmail = async (emailGanador, nombreGanador, ordenDePago) => {
  let htmlAddress = path.join(
    __dirname,
    "/plantillas/ganadorpremioespecie.html"
  );
  let htmlTemplate = await fs.promises.readFile(htmlAddress, "utf8");
  return new Promise(async (resolve, reject) => {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: config.emailRemitente,
            Name: config.nombreRemitente,
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
          HTMLPart: htmlTemplate,
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
