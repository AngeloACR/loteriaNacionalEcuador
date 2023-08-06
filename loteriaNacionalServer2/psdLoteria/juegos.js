var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
const path = require("path");
var { loteriaError } = require("./errors");
const { loteriaAuthLogger } = require("./logging");
const config = require("../environments/production");


const usuarioClientePsd = config.usuarioAplicativo;
const claveClientePsd = config.passwordAplicativo;
const medioId = config.medioAplicativoId;
const address = path.join(__dirname, config.aplicativoAddress);

module.exports.consultaFiguras = async (lotteryToken, tipoLoteria, ip) => {
  try {
    loteriaAuthLogger.silly("consultaFiguras");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
          <c>
          <aplicacion>25</aplicacion>
          <transaccion>73</transaccion>
          <usuario>${usuarioClientePsd}</usuario>
          <maquina>${ip}</maquina>
          <codError>0</codError>
          <msgError />
          <medio>${medioId}</medio>
          <token>${lotteryToken}</token>
          <operacion>${Date.now()}</operacion>
          </c>
          <i>
            <JuegoId>${tipoLoteria}</JuegoId>
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
            let dataAux = await parser.parseStringPromise(
              res.fnEjecutaTransaccionResult
            );
            let errorCode = parseInt(dataAux.mt.c[0].codError[0]);
            let response = dataAux.mt.rs[0].r[0].Row.map((figura) => {
              return {
                nombre: figura.$.Desc,
                codigo: figura.$.Cod,
              };
            });
            if (!errorCode) {
              /*               let correo = data.mt.rs[0].r[2].Row.filter((o) =>
                o.$.Descripcion.includes("@")
              )[0].$.Descripcion;
 */

              resolve(response);
            } else {
              let errorMsg = dataAux.mt.c[0].msgError[0];
              loteriaAuthLogger.error("consultarDatosUsuario2.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMsg}`,
              });
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

            loteriaAuthLogger.error("consultarDatosUsuario2.error", {
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

    loteriaAuthLogger.error("consultarDatosUsuario2.error", {
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
