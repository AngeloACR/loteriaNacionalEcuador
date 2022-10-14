var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var {loteriaError} = require("./errors");
const path = require( 'path' )

const { loteriaSorteosLogger } = require("./logging");
const config = require("../environments/test");

const medioId = config.medioAplicativoId;
const address = path.join( __dirname, config.aplicativoAddress );

const usuarioClientePsd = config.usuarioAplicativo;
module.exports.consultarSorteosJugados = async (tipoLoteria, token) => {
  try {
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
          <c>
          <aplicacion>25</aplicacion>
          <transaccion>65</transaccion>
          <usuario>${usuarioClientePsd}</usuario>
          <maquina>192.168.1.13</maquina>
          <codError>0</codError>
          <msgError />
          <medio>${medioId}</medio>
          <token>${token}</token>
          <operacion>${Date.now()}</operacion>
            </c>
            <i>
          <MedioId>${medioId}</MedioId>
          <JuegoId>${tipoLoteria}</JuegoId>
            </i>
        </mt>
          ]]>
        </PI_DatosXml>
        `,
    };
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(
        message,
        async function (err, res, rawResponse, soapHeader, rawRequest) {
          if (err) reject(err);
          let data = await parser.parseStringPromise(
            res.fnEjecutaTransaccionResult
          );
          let errorCode = parseInt(data.mt.c[0].codError[0]);
          if (!errorCode) {
            let aux = data.mt.rs[0].r[0] != "" ? data.mt.rs[0].r[0].Row : [];
            let response = aux.map((sorteo) => {
              return sorteo.$;
            });
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

module.exports.consultarSorteosDisponibles = async (
  tipoLoteria,
  token,
  user,
  ip
) => {
  try {
    loteriaSorteosLogger.silly("consultarSorteosDisponibles");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let message = {
      $xml: `
          <PI_DatosXml>
          <![CDATA[
            <mt>
              <c>
                <aplicacion>25</aplicacion>
                <transaccion>8</transaccion>
                <usuario>${user}</usuario>
                <maquina>${ip}</maquina>
                <codError>0</codError>
                <msgError />
                <medio>${medioId}</medio>
                <token>${token}</token>
                <operacion>${Date.now()}</operacion>
              </c>
              <i>
                <MedioId>${medioId}</MedioId>
                <JuegoId>${tipoLoteria}</JuegoId>
              </i>
            </mt>
            ]]>
          </PI_DatosXml>
          `,
    };

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
              let aux = data.mt.rs[0].r[0].Row;
              let response = aux.map((sorteo) => {
                let sorteoAux = {
                  fecha: sorteo.$.FSort,
                  cantidadDeFracciones: sorteo.$.CFrac,
                  valorPremioPrincipal: sorteo.$.VPremio,
                  precio: sorteo.$.PVP,
                  sorteo: sorteo.$.SortId,
                  nombre: sorteo.$.SortNomb,
                  combinacion2: sorteo.$.NomComb2,
                  combinacion3: sorteo.$.NomComb3,
                  combinacion4: sorteo.$.NomComb4,
                  combinacion5: sorteo.$.NomComb5,
                  dia: sorteo.$.SortNombSal.split(" ")[2],
                };
                return sorteoAux;
              });

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaSorteosLogger.info(
                "consultarSorteosDisponibles.loteria",
                logData
              );
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaSorteosLogger.error(
                "consultarSorteosDisponibles.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMessage}`,
                }
              );
              reject(
                new loteriaError(
                  errorMessage,
                  "loteria",
                  "consultarSorteosDisponibles"
                )
              );
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaSorteosLogger.error("consultarSorteosDisponibles.error", {
              errorMessage: errorMsg,
            });
            reject(
              new loteriaError(
                errorMsg,
                "loteria",
                "consultarSorteosDisponibles"
              )
            );
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaSorteosLogger.error("consultarSorteosDisponibles.error", {
      errorMessage: errorMsg,
    });

    throw new loteriaError(errorMsg, "loteria", "consultarSorteosDisponibles");
  }
};
