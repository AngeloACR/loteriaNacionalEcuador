const fs = require("fs").promises;
const auth = require("./auth");
const juegos = require("./juegos");
const config = require("../environments/local");
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
(async () => {
  try {
    let conRevancha = JSON.parse(
      await fs.readFile(
        "../../../ganadores/boletos de pozo con mascotas cambiadas (con revanchas).json"
      )
    );
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );

    for (let i = 0; i < conRevancha.length; i++) {
      if (i >= 80) {
        const boleto = conRevancha[i];
        boleto.pozo = boleto.pozo.filter((item) => item.mascota == "08");
        boleto.pozoRevancha = boleto.pozoRevancha.filter(
          (item) => item.mascota == "08"
        );
        await timeout(2000);
        let userData = await auth.consultarDatosUsuario2(
          data,
          boleto.user,
          "192.168.0.1"
        );
        await timeout(2000);
        boleto["userData"] = await auth.consultarDatosUsuario(
          data,
          userData.personaId,
          "192.168.0.1"
        );
      }
    }
    conRevancha = conRevancha.filter((item, i) => i >= 80);

    await fs.writeFile(
      "boletosProblema-conRevancha-2.json",
      JSON.stringify(conRevancha)
    );
  } catch (error) {
    console.log(error);
  }
})();
