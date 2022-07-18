const config = require("../environments/test");
const fs = require("fs");
const path = require("path");
const mailjet = require("node-mailjet").connect(
  config.mailjetKey1,
  config.mailjetKey2
);

module.exports.send = async (email, nombre, ventaId, codigos) => {
  let htmlAddress = path.join(
    __dirname,
    "/plantillas/agradecimientopromoiphone.html"
  );
  let htmlTemplate = await fs.promises.readFile(htmlAddress, "utf8");
  return new Promise(async (resolve, reject) => {
    while (codigos.length !== 5) {
      codigos.push("");
    }
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: config.emailRemitente,
            Name: config.nombreRemitente,
          },
          To: [
            {
              Email: email,
              Name: nombre,
            },
          ],
          Variables: {
            nombre: nombre,
            ventaId: ventaId,
            codigo1: codigos[0],
            codigo2: codigos[1],
            codigo3: codigos[2],
            codigo4: codigos[3],
            codigo5: codigos[4],
          },
          TemplateLanguage: true,
          Subject: "Participa en el sorteo por un Iphone 13 pro.",
          HTMLPart: htmlTemplate,
          CustomID: "SorteoIphone",
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
