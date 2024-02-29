const config = require("../environments/local");

const fs = require("fs");
const path = require("path");
const mailjet = require("node-mailjet").connect(
  config.mailjetKey1,
  config.mailjetKey2
);

module.exports.send = async (data) => {
  let htmlAddress = path.join(__dirname, "/plantillas/alertaDeResultados.html");
  let htmlTemplate = await fs.promises.readFile(htmlAddress, "utf8");
  return new Promise(async (resolve, reject) => {
    let destinatarios = [];
    for (let i = 0; i < config.destinatarios.length; i++) {
      let destinatario = config.destinatarios[i];
      destinatarios.push({
        Name: destinatario.nombre,
        Email: destinatario.correo,
      });
    }
    console.log(data);
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: config.emailRemitente,
            Name: config.nombreRemitente,
          },
          TemplateErrorReporting: {
            Email: config.emailRemitente,
            Name: config.nombreRemitente,
          },
          To: destinatarios,
          Variables: {
            loteria: data.loteria.status,
            loteriaSorteo: data.loteria.sorteo,
            loteriaArchivoResultados: data.loteria.archivoResultados,
            loteriaLengthResultados: data.loteria.lengthResultados,
            loteriaCantidadResultados: data.loteria.cantidadResultados,
            loteriaArchivoPremios: data.loteria.archivoPremios,
            loteriaLengthPremios: data.loteria.lengthPremios,
            loteriaCantidadPremios: data.loteria.cantidadPremios,
            loteriaArchivoGanadores: data.loteria.archivoGanadores,
            loteriaLengthGanadores: data.loteria.lengthGanadores,
            loteriaCantidadGanadores: data.loteria.cantidadGanadores,
            loteriaUltimosResultados: data.loteria.ultimosResultados,
            lotto: data.lotto.status,
            lottoSorteo: data.lotto.sorteo,
            lottoArchivoResultados: data.lotto.archivoResultados,
            lottoLengthResultados: data.lotto.lengthResultados,
            lottoCantidadResultados: data.lotto.cantidadResultados,
            lottoArchivoPremios: data.lotto.archivoPremios,
            lottoLengthPremios: data.lotto.lengthPremios,
            lottoCantidadPremios: data.lotto.cantidadPremios,
            lottoArchivoGanadores: data.lotto.archivoGanadores,
            lottoLengthGanadores: data.lotto.lengthGanadores,
            lottoCantidadGanadores: data.lotto.cantidadGanadores,
            lottoUltimosResultados: data.lotto.ultimosResultados,
            pozo: data.pozo.status,
            pozoSorteo: data.pozo.sorteo,
            pozoArchivoResultados: data.pozo.archivoResultados,
            pozoLengthResultados: data.pozo.lengthResultados,
            pozoCantidadResultados: data.pozo.cantidadResultados,
            pozoArchivoPremios: data.pozo.archivoPremios,
            pozoLengthPremios: data.pozo.lengthPremios,
            pozoCantidadPremios: data.pozo.cantidadPremios,
            pozoArchivoGanadores: data.pozo.archivoGanadores,
            pozoLengthGanadores: data.pozo.lengthGanadores,
            pozoCantidadGanadores: data.pozo.cantidadGanadores,
            pozoUltimosResultados: data.pozo.ultimosResultados,
          },
          TemplateLanguage: true,
          TemplateErrorDeliver: true,
          Subject: "Alerta diaria de la aplicación de Ventas y Resultados.",
          HTMLPart: htmlTemplate,
          CustomID: "alertaDiaria",
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
