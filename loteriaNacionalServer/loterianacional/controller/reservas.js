var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var { loteriaError } = require("../../errors/customError");

const { loteriaReservasLogger } = require("../../config/logging");
const config = require("../../config/environment");

const medioId = config.medioAplicativoId;
//const address = config.aplicativoAddressTest;
const address = config.aplicativoAddressProd;

module.exports.reservarCombinaciones = async (
  loteria,
  lotto,
  pozo,
  token,
  reservaId,
  user,
  ip
) => {
  try {
    loteriaReservasLogger.silly("reservarCombinaciones");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let loteriaCombinacionesXML = "";
    let lottoCombinacionesXML = "";
    let pozoCombinacionesXML = "";
    if (loteria && loteria.length) {
      loteria.forEach((item) => {
        let combinacion = item.combinacion;
        let fraccionesXML = "";
        let cant = 0;
        item.fracciones.forEach((element) => {
          fraccionesXML = `${fraccionesXML}<F id="${element}" />`;
          cant += 1;
        });
        loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`;
      });
      loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (lotto && lotto.length) {
      lotto.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `;
    }
    if (pozo && pozo.length) {
      pozo.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `;
    }
    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
  <mt>
  <c>
    <aplicacion>25</aplicacion>
    <transaccion>12</transaccion>
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
    <UsuarioId>${user}</UsuarioId>
      <ReservaId>${reservaId}</ReservaId>
      <Observacion>Reserva de Boletos</Observacion>
      <xmlNumeros>
  <RS >

    ${loteriaCombinacionesXML} 
    ${lottoCombinacionesXML} 
    ${pozoCombinacionesXML} 

  </RS>
      </xmlNumeros>
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
              let reservaId = data.mt.o[0].ReturnValue[0];
              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: reservaId,
              };
              loteriaReservasLogger.info(
                "reservarCombinaciones.loteria",
                logData
              );
              resolve(reservaId);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaReservasLogger.error(
                "reservarCombinaciones.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMessage}`,
                }
              );
              let errorData = {
                input: message,
                output: errorCode,
                function: "reservarCombinaciones",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaReservasLogger.error("reservarCombinaciones.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              input: e,
              output: "",
              function: "reservarCombinaciones",
            };

            reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaReservasLogger.error("reservarCombinaciones.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "reservarCombinaciones",
    };

    throw new loteriaError(errorMsg, "loteria", "errorData");
  }
};

module.exports.eliminarReservas = async (
  loteria,
  lotto,
  pozo,
  token,
  reservaId,
  user,
  ip
) => {
  try {
    loteriaReservasLogger.silly("eliminarReservas");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let loteriaCombinacionesXML = "";
    let lottoCombinacionesXML = "";
    let pozoCombinacionesXML = "";
    if (loteria.length != 0) {
      loteria.forEach((item) => {
        let combinacion = item.combinacion;
        let fraccionesXML = "";
        item.fracciones.forEach((element) => {
          fraccionesXML = `${fraccionesXML}<F id="${element}" />`;
        });
        loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" >${fraccionesXML}</R>`;
      });
      loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (lotto.length != 0) {
      lotto.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`;
      });
      lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `;
    }
    if (pozo.length != 0) {
      pozo.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`;
      });
      pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `;
    }

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
                    <mt>
          <c>
            <aplicacion>25</aplicacion>
            <transaccion>66</transaccion>
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
              <UsuarioId>${user}</UsuarioId>
                <ReservaId>${reservaId}</ReservaId>
                <Observacion>Eliminación de Boletos de reserva</Observacion>
                <xmlNumeros>
            <RS >
          
              ${loteriaCombinacionesXML} 
              ${lottoCombinacionesXML} 
              ${pozoCombinacionesXML}
          
            </RS>
                </xmlNumeros>
              </i>
            </mt>
                    ]]>
                  </PI_DatosXml>`,
      /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/
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
              let response = data.mt.o[0].ReturnValue[0];
              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaReservasLogger.info("eliminarReservas.loteria", logData);
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaReservasLogger.error("eliminarReservas.loteria.error", {
                message: `${errorCode}-${errorMessage}`,
              });
              let errorData = {
                input: message,
                output: errorCode,
                function: "eliminarReservas",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaReservasLogger.error("eliminarReservas.error", {
              data: message,
              errorMessage: `${errorMsg}`,
            });
            let errorData = {
              input: e,
              output: "",
              function: "eliminarReservas",
            };
            reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaReservasLogger.error("eliminarReservas.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "eliminarReservas",
    };
    throw new loteriaError(errorMsg, "loteria", errorData);
  }
};

module.exports.validarReservas = async (token, reservaId, user, ip) => {
  try {
    loteriaReservasLogger.silly("validarReservas");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
          <c>
            <aplicacion>25</aplicacion>
            <transaccion>67</transaccion>
            <usuario>${user}</usuario>
            <maquina>${ip}</maquina>
            <codError>0</codError>
            <msgError />
            <medio>${medioId}</medio>
            <token>${token}</token>
            <operacion>${Date.now()}</operacion>
          </c>
          <i>
          <ReservaId>${reservaId}</ReservaId>
          </i>
        </mt>
                    ]]>
                  </PI_DatosXml>`,
      /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/
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
              let reserva = data.mt.rs[0];
              let detalles = reserva.r[0].Row;
              let fracciones = reserva.r[2]
                ? reserva.r[2].Row.map((element) => {
                    let response = {
                      id: element.$.Id,
                      fraccion: element.$.Fra,
                    };
                    return response;
                  })
                : [];
              let boletos = reserva.r[1].Row.map((element) => {
                let id = element.$.Id;
                //Manejador de fracciones
                let fraccionesAux = fracciones.filter((x) => id == x.id);
                let response = {
                  id,
                  tipoLoteria: parseInt(element.$.JId),
                  sorteo: element.$.Sort,
                  combinacion: element.$.Num,
                  combinacion2: element.$.Num2,
                  combinacion3: element.$.Num3,
                  combinacion4: element.$.Num4,
                  combinacion5: element.$.Num5,
                  cantidadFracciones: element.$.Cant,
                  fracciones: fraccionesAux,
                  cantidadReservados: element.$.Resrv,
                };
                return response;
              });

              //let loteria = [];
              //let lotto = [];
              //let pozo = [];
              let loteria = boletos.filter((x) => x.tipoLoteria == 1);
              let lotto = boletos.filter((x) => x.tipoLoteria == 2);
              let pozo = boletos.filter((x) => x.tipoLoteria == 5);

              let carrito = loteria.concat(lotto).concat(pozo);
              let response = {
                loteria,
                lotto,
                pozo,
                carrito,
              };
              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaReservasLogger.info("validarReservas.loteria", logData);
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaReservasLogger.error("validarReservas.loteria.error", {
                message: `${errorCode}-${errorMessage}`,
              });
              let errorData = {
                input: message,
                output: errorCode,
                function: "validarReservas",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaReservasLogger.error("validarReservas.error", {
              data: message,
              errorMessage: `${errorMsg}`,
            });
            let errorData = {
              input: e,
              output: "",
              function: "validarReservas",
            };
            reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaReservasLogger.error("eliminarReservas.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "eliminarReservas",
    };
    throw new loteriaError(errorMsg, "loteria", errorData);
  }
};
