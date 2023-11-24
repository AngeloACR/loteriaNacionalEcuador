var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var { loteriaError } = require("./errors");
const path = require("path");

const { loteriaReservasLogger } = require("./logging");
const config = require("../environments/test");

const medioId = config.medioAplicativoId;
const address = path.join(__dirname, config.aplicativoAddress);

module.exports.reservarCombinaciones = async (
  loteria,
  lotto,
  pozo,
  pozoRevancha,
  bingazo,
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
    let pozoRevanchaCombinacionesXML = "";
    let bingazoCombinacionesXML = "";
    if (loteria.length != 0) {
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
    if (lotto.length != 0) {
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
    if (pozo.length != 0) {
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

    if (pozoRevancha.length != 0) {
      pozoRevancha.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        pozoRevanchaCombinacionesXML = `${pozoRevanchaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoRevanchaCombinacionesXML = `
            <JG id="17">
            ${pozoRevanchaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (bingazo.length != 0) {
      bingazo.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        bingazoCombinacionesXML = `${bingazoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      bingazoCombinacionesXML = `
            <JG id="12">
            ${bingazoCombinacionesXML}
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
    ${pozoRevanchaCombinacionesXML} 
    ${bingazoCombinacionesXML} 

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
module.exports.reservarCombinacionesFallidas = async (
  loteria,
  lotto,
  pozo,
  pozoRevancha,
  bingazo,
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
    let pozoRevanchaCombinacionesXML = "";
    let bingazoCombinacionesXML = "";
    if (loteria.length != 0) {
      loteria.forEach((item) => {
        let combinacion = item.combinacion1;
        let fraccionesXML = "";
        let cant = 0;
        item.fracciones.forEach((element) => {
          fraccionesXML = `${fraccionesXML}<F id="${element}" />`;
          cant += 1;
        });
        loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`;
      });
      loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (lotto.length != 0) {
      lotto.forEach((item) => {
        let combinacion = item.combinacion1;
        let cant = 1;
        lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `;
    }
    if (pozo.length != 0) {
      pozo.forEach((item) => {
        let combinacion = item.combinacion1;
        let cant = 1;
        pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `;
    }

    if (pozoRevancha.length != 0) {
      pozoRevancha.forEach((item) => {
        let combinacion = item.combinacion1;
        let cant = 1;
        pozoRevanchaCombinacionesXML = `${pozoRevanchaCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoRevanchaCombinacionesXML = `
            <JG id="17">
            ${pozoRevanchaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (bingazo.length != 0) {
      bingazo.forEach((item) => {
        let combinacion = item.combinacion1;
        let cant = 1;
        bingazoCombinacionesXML = `${bingazoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      bingazoCombinacionesXML = `
            <JG id="12">
            ${bingazoCombinacionesXML}
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
    <usuario>${config.usuarioAplicativo}</usuario>
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
    ${pozoRevanchaCombinacionesXML} 
    ${bingazoCombinacionesXML} 

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
                output: `${errorCode}-${errorMessage}`,
                function: "reservarCombinaciones",
              };

              resolve(errorData);
              //reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaReservasLogger.error("reservarCombinaciones.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              input: e,
              output: errorMsg,
              function: "reservarCombinaciones",
            };
            resolve(errorData);

            //reject(new loteriaError(errorMsg, "loteria", errorData));
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
      output: errorMessage,
      function: "reservarCombinaciones",
    };
    return errorData;
    // throw new loteriaError(errorMsg, "loteria", "errorData");
  }
};
module.exports.eliminarReservas = async (
  loteria,
  lotto,
  pozo,
  pozoRevancha,
  bingazo,
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
    let pozoRevanchaCombinacionesXML = "";
    let bingazoCombinacionesXML = "";

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
    if (pozoRevancha.length != 0) {
      pozoRevancha.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        pozoRevanchaCombinacionesXML = `${pozoRevanchaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`;
      });
      pozoRevanchaCombinacionesXML = `
            <JG id="17">
            ${pozoRevanchaCombinacionesXML}
            </JG>        
              
            `;
    }

    if (bingazo.length != 0) {
      bingazo.forEach((item) => {
        let combinacion = item.combinacion;
        let cant = 1;
        bingazoCombinacionesXML = `${bingazoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`;
      });
      bingazoCombinacionesXML = `
            <JG id="12">
            ${bingazoCombinacionesXML}
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
              ${pozoRevanchaCombinacionesXML} 
              ${bingazoCombinacionesXML}
          
            </RS>
                </xmlNumeros>
              </i>
            </mt>
                    ]]>
                  </PI_DatosXml>`,
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
            loteriaReservasLogger.error("eliminarReservas.error", {
              data: message,
              errorMessage: e.message,
            });
            let errorData = {
              input: e,
              output: "",
              function: "eliminarReservas",
            };
            reject(new loteriaError(e.message, "loteria", errorData));
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

module.exports.anularReserva = async (token, reservaId, user, ip) => {
  try {
    loteriaReservasLogger.silly("eliminarReservas");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
              <c>
          	    <aplicacion>25</aplicacion>
          	    <transaccion>93</transaccion>
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
          	    <MotivoAnulacion>Se anula por solicitud del usuario</MotivoAnulacion>
          	    <UsuarioId>${user}</UsuarioId>
              </i>
          </mt>          
          ]]>
        </PI_DatosXml>`,
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
              let response = data.mt.o[0];
              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaReservasLogger.info("anularReserva.loteria", logData);
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaReservasLogger.error("anularReserva.loteria.error", {
                message: `${errorCode}-${errorMessage}`,
              });
              let errorData = {
                input: message,
                output: errorCode,
                function: "anularReserva",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            loteriaReservasLogger.error("anularReserva.error", {
              data: message,
              errorMessage: e.message,
            });
            let errorData = {
              input: e,
              output: "",
              function: "anularReserva",
            };
            reject(new loteriaError(e.message, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaReservasLogger.error("anularReserva.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "anularReserva",
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
                      jid: element.$.JId,
                      fraccion: element.$.Fra,
                    };
                    return response;
                  })
                : [];
              let boletos = reserva.r[1].Row.map((element) => {
                let id = element.$.Id;
                let jid = element.$.JId;
                //Manejador de fracciones
                let fraccionesAux = fracciones.filter(
                  (x) => id == x.id && jid == x.jid
                );
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

              let loteria = boletos.filter((x) => x.tipoLoteria == 1);
              let lotto = boletos.filter((x) => x.tipoLoteria == 2);
              let pozo = boletos.filter((x) => x.tipoLoteria == 5);
              let pozoRevancha = boletos.filter((x) => x.tipoLoteria == 17);
              let bingazo = boletos.filter((x) => x.tipoLoteria == 12);

              let carrito = loteria.concat(lotto).concat(pozo);
              let response = {
                loteria,
                lotto,
                pozo,
                pozoRevancha,
                bingazo,
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

    loteriaReservasLogger.error("validarReservas.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "validarReservas",
    };
    throw new loteriaError(errorMsg, "loteria", errorData);
  }
};
