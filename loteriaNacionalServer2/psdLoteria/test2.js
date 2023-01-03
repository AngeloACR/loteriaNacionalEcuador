const fs = require("fs").promises;
const auth = require("./auth");
const juegos = require("./juegos");
const config = require("../environments/test");

(async () => {
  try {
    let cedulas = JSON.parse(
      await fs.readFile("../../../ganadores/cedulasProblema.json")
    );
    let response = [];
    let response2 = [];
    for (let i = 0; i < cedulas.length; i++) {
      const element = cedulas[i];

      let data = await auth.authTest(
        config.usuarioAplicativo,
        config.passwordAplicativo
      );
      let user = await auth.consultarDatosUsuario2(
        data,
        element,
        "192.168.0.1"
      );
      user["identificacion"] = element;
      let user2 = await auth.consultarDatosUsuario(
        data,
        user.personaId,
        "192.168.0.1"
      );
      user2["identificacion"] = element;
      response.push(user);
      response2.push(user2);
    }
    await fs.writeFile(
      "detallesUsuariosProblema-consultaPorCedula.json",
      JSON.stringify(response)
    );
    await fs.writeFile(
      "detallesUsuariosProblema-consultaPorPersonaId.json",
      JSON.stringify(response2)
    );
    console.log(response);
    console.log(response2);
  } catch (error) {
    console.log(error);
  }
})();
