const fs = require("fs").promises;
const auth = require("./auth");
const juegos = require("./juegos");
const config = require("../environments/production");

(async () => {
  try {
    /* let cedulas = JSON.parse(
      await fs.readFile("../../../ganadores/cedulasProblema.json")
    ); */
    let data = await auth.authTest(
      config.usuarioAplicativo,
      config.passwordAplicativo
    );
    let user2 = await auth.consultarDatosUsuario(data, "382361", "192.168.0.1");
    /*     for (let i = 0; i < cedulas.length; i++) {
      const element = cedulas[i];

      let user = await auth.consultarDatosUsuario2(
        data,
        element,
        "192.168.0.1"
      );
      user["identificacion"] = element;
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
 */ console.log(user2);
  } catch (error) {
    console.log(error);
  }
})();
