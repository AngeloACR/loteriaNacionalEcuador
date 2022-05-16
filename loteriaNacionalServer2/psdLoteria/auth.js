var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var {loteriaError} = require("./errors");

const { loteriaVentasLogger } = require("./logging");
const config = require("../environments/test");

const usuarioClientePsd = config.usuarioAplicativo;
const claveClientePsd = config.passwordAplicativo;
const medioId = config.medioAplicativoId;
const address = config.aplicativoAddress;

module.exports.autenticarUsuario = async () => {
  try {
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
              <c>
            <aplicacion>17</aplicacion>
            <usuario>${usuarioClientePsd}</usuario>
            <clave>${claveClientePsd}</clave>
            <maquina>192.168.1.13</maquina>
            <codError>0</codError>
            <msgError />
            <medio>${medioId}</medio>
            <operacion>1234568891</operacion>
              </c>
          </mt>
          ]]>
        </PI_DatosXml>`,
    };

    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnAutenticacion(
        message,
        async function (err, res, rawResponse, soapHeader, rawRequest) {
          if (err) reject(err);
          let data = await parser.parseStringPromise(res.fnAutenticacionResult);
          let errorCode = parseInt(data.mt.c[0].codError[0]);

          if (!errorCode) {
            let response = {
              token: data.mt.c[0].token[0],
            };
            resolve(response);
          } else {
            reject(data.mt.c[0].msgError[0]);
          }
        }
      );
    });
  } catch (e) {
    console.log(e.toString());
    throw e;
  }
};

module.exports.consultarDatosUsuario = async (lotteryToken, cliente, ip) => {
  try {
    loteriaVentasLogger.silly("consultarDatosUsuario");
    const usuarioClientePsd = config.usuarioAplicativoTest;

    /* const usuarioClientePsd = config.usuarioAplicativoProd;*/
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
          <c>
          <aplicacion>25</aplicacion>
          <transaccion>4</transaccion>
          <usuario>${usuarioClientePsd}</usuario>
          <maquina>${ip}</maquina>
          <codError>0</codError>
          <msgError />
          <medio>${medioId}</medio>
          <token>${lotteryToken}</token>
          <operacion>${Date.now()}</operacion>
          </c>
          <i>
            <PersonaId>${cliente}</PersonaId>
          </i>
          </mt>
        ]]>
      </PI_DatosXml>`,
    };
    /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(
        message,
        async function (err, res, rawResponse, soapHeader, rawRequest) {
          try {
            if (err) reject(new Error(err));
            let data = await parser.parseStringPromise(
              res.fnEjecutaTransaccionResult
            );
            let errorCode = parseInt(data.mt.c[0].codError[0]);
            if (!errorCode) {
              let datosUsuario = data.mt.rs[0].r[0].Row[0];
              let correo = data.mt.rs[0].r[2].Row.filter((o) =>
                o.$.Descripcion.includes("@")
              )[0].$.Descripcion;
              let response = {
                nombre: `${datosUsuario.$.PrimerNombre} ${datosUsuario.$.ApellidoPaterno}`,
                identificacion: datosUsuario.$.Identificacion,
                correo,
                status: true,
              };

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info(
                "consultarDatosUsuario.loteria",
                logData
              );
              resolve(response);
            } else {
              let errorMsg = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("consultarDatosUsuario.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMsg}`,
              });
              let errorData = {
                status: false,
                input: message,
                output: errorCode,
                function: "consultarDatosUsuario",
              };
              resolve(errorData);
              //              reject(new loteriaError(errorMsg, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("consultarDatosUsuario.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              status: false,
              input: e,
              output: "",
              function: "consultarDatosUsuario",
            };
            resolve(errorData);

            //reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("consultarDatosUsuario.error", {
      errorMessage: errorMsg,
    });

    let errorData = {
      status: false,
      input: e,
      output: "",
      function: "consultarDatosUsuario",
    };
    return errorData;
    //throw new loteriaError(errorMsg, "loteria", errorData);
  }
};

module.exports.consultarDatosUsuario2 = async (lotteryToken, cliente, ip) => {
  try {
    loteriaVentasLogger.silly("consultarDatosUsuario2");
    const usuarioClientePsd = config.usuarioAplicativoTest;

    /* const usuarioClientePsd = config.usuarioAplicativoProd;*/
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
          <c>
          <aplicacion>25</aplicacion>
          <transaccion>110</transaccion>
          <usuario>${usuarioClientePsd}</usuario>
          <maquina>${ip}</maquina>
          <codError>0</codError>
          <msgError />
          <medio>${medioId}</medio>
          <token>${lotteryToken}</token>
          <operacion>${Date.now()}</operacion>
          </c>
          <i>
          <UsuarioId>${cliente}</UsuarioId>
          <MedioId>${medioId}</MedioId>
          <ClienteId>5</ClienteId>
          </i>
          </mt>
        ]]>
      </PI_DatosXml>`,
    };
    /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(
        message,
        async function (err, res, rawResponse, soapHeader, rawRequest) {
          try {
            if (err) reject(new Error(err));
            let data = await parser.parseStringPromise(
              res.fnEjecutaTransaccionResult
            );
            let errorCode = parseInt(data.mt.c[0].codError[0]);
            if (!errorCode) {
              let datosUsuario = data.mt.rs[0].r[0].Row[0];
              let correo = data.mt.rs[0].r[2].Row.filter((o) =>
                o.$.Descripcion.includes("@")
              )[0].$.Descripcion;
              let response = {
                nombre: `${datosUsuario.$.PrimerNombre} ${datosUsuario.$.ApellidoPaterno}`,
                identificacion: datosUsuario.$.Identificacion,
                correo,
                status: true,
              };

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info(
                "consultarDatosUsuario2.loteria",
                logData
              );
              resolve(response);
            } else {
              let errorMsg = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error(
                "consultarDatosUsuario2.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMsg}`,
                }
              );
              let errorData = {
                status: false,
                input: message,
                output: errorCode,
                function: "consultarDatosUsuario2",
              };
              resolve(errorData);
              //              reject(new loteriaError(errorMsg, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("consultarDatosUsuario2.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              status: false,
              input: e,
              output: "",
              function: "consultarDatosUsuario2",
            };
            resolve(errorData);

            //reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("consultarDatosUsuario2.error", {
      errorMessage: errorMsg,
    });

    let errorData = {
      status: false,
      input: e,
      output: "",
      function: "consultarDatosUsuario2",
    };
    return errorData;
    //throw new loteriaError(errorMsg, "loteria", errorData);
  }
};
