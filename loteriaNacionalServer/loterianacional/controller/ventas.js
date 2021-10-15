var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
const { loteriaVentasLogger } = require("../../config/logging");
const config = require("../../config/environment");

const medioId = config.medioAplicatioId;
//const address = config.aplicativoAddressTest;
const address = config.aplicativoAddressProd;

module.exports.autenticarUsuario = async () => {
  try {
    loteriaVentasLogger.silly("autenticarUsuario");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

/*     const usuarioClientePsd = config.usuarioAplicativoTest;
    const claveClientePsd = config.passwordAplicativoTest; */
    
    const usuarioClientePsd = config.usuarioAplicativoProd;
    const claveClientePsd = config.passwordAplicativoProd;
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
            let logData = {
              data: message,
              loteriaResponse: rawResponse,
              customResponse: response,
            };
            loteriaVentasLogger.info("autenticarUsuario.loteria", logData);
            resolve(response);
          } else {
            let errorMessage = data.mt.c[0].msgError[0];
            loteriaVentasLogger.error("autenticarUsuario.error", {
              message: `${errorCode}-${errorMessage}`,
            });
            reject(new Error(errorMessage));
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
    loteriaVentasLogger.silly("consultarSorteosDisponibles");
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
                };
                return sorteoAux;
              });

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info(
                "consultarSorteosDisponibles.loteria",
                logData
              );
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error(
                "consultarSorteosDisponibles.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMessage}`,
                }
              );
              reject(new Error(errorMessage));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
              errorMessage: errorMsg,
            });
            reject(new Error(errorMsg));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
      errorMessage: errorMsg,
    });

    throw new Error(e.message);
  }
};

module.exports.obtenerCombinacionesDisponibles = async (
  tipoLoteria,
  sorteo,
  token,
  combinacion,
  combinacionFigura,
  user,
  tipoSeleccion,
  ip
) => {
  try {
    loteriaVentasLogger.silly("obtenerCombinacionesDisponibles");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
    <c>
      <aplicacion>25</aplicacion>
      <transaccion>9</transaccion>
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
      <SorteoId>${sorteo}</SorteoId>
      <Combinacion>${combinacion}</Combinacion>
      <Registros>${tipoSeleccion}</Registros>
      <UsuarioId>${user}</UsuarioId>
      <CombFigura>${combinacionFigura}</CombFigura>
      <Sugerir>True</Sugerir>
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
              let aux = data.mt.rs[0].r;
              let response = [];
              aux.forEach((aux2) => {
                if (aux2.Row) {
                  aux2.Row.forEach((aux3) => {
                    response.push(aux3.$);
                  });
                }
              });
              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info(
                "obtenerCombinacionesDisponibles.loteria",
                logData
              );
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error(
                "obtenerCombinacionesDisponibles.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMessage}`,
                }
              );
              reject(new Error(errorMessage));
            }
          } catch (e) {
            let errorMsg = e.message;
            loteriaVentasLogger.error("obtenerCombinacionesDisponibles.error", {
              errorMessage: errorMsg,
            });
            reject(new Error(errorMsg));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("obtenerCombinacionesDisponibles.error", {
      errorMessage: errorMsg,
    });

    throw new Error(e.message);
  }
};

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
    loteriaVentasLogger.silly("reservarCombinaciones");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let loteriaCombinacionesXML = "";
    let lottoCombinacionesXML = "";
    let pozoCombinacionesXML = "";
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
              loteriaVentasLogger.info(
                "reservarCombinaciones.loteria",
                logData
              );
              resolve(reservaId);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("reservarCombinaciones.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMessage}`,
              });
              reject(new Error(errorMessage));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("eliminarReservas.error", {
              errorMessage: errorMsg,
            });
            reject(new Error(errorMsg));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("reservarCombinaciones.error", {
      errorMessage: errorMsg,
    });

    throw new Error(e.message);
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
    loteriaVentasLogger.silly("eliminarReservas");
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
              loteriaVentasLogger.info("eliminarReservas.loteria", logData);
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("eliminarReservas.loteria.error", {
                message: `${errorCode}-${errorMessage}`,
              });
              reject(new Error(errorMessage));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("eliminarReservas.error", {
              data: message,
              errorMessage: `${errorCode}-${errorMessage}`,
            });
            reject(new Error(errorMsg));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("eliminarReservas.error", {
      errorMessage: errorMsg,
    });

    throw new Error(e.message);
  }
};

module.exports.venderBoletos = async (
  ordComp,
  total,
  loteria,
  lotto,
  pozo,
  lotteryToken,
  reservaId,
  user,
  ip
) => {
  try {
    loteriaVentasLogger.silly("venderBoletos");

    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let loteriaCombinacionesXML = "";
    let lottoCombinacionesXML = "";
    let pozoCombinacionesXML = "";
    if (loteria.length != 0) {
      loteria.forEach((item) => {
        let combinacion = item.ticket.combinacion;
        let fraccionesXML = "";
        let cant = 0;
        item.ticket.seleccionados.forEach((element) => {
          fraccionesXML = `${fraccionesXML}<F id="${element}" />`;
          cant += 1;
        });

        loteriaCombinacionesXML = `
                ${loteriaCombinacionesXML}
                <R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`;
      });
      loteriaCombinacionesXML = `
            <JG id="1">
                ${loteriaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (lotto.length != 0) {
      lotto.forEach((item) => {
        let combinacion = item.ticket.combinacion1;
        let cant = 1;
        lottoCombinacionesXML = `
                ${lottoCombinacionesXML}
                <R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      lottoCombinacionesXML = `
            <JG id="2">
                ${lottoCombinacionesXML}
            </JG>        
              
            `;
    }
    if (pozo.length != 0) {
      pozo.forEach((item) => {
        let combinacion = item.ticket.combinacion1;
        let cant = 1;
        pozoCombinacionesXML = `
                ${pozoCombinacionesXML}
                <R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoCombinacionesXML = `
            <JG id="5">
                ${pozoCombinacionesXML}
            </JG>        
              
            `;
    }
    /*Ensure your message below looks like a valid working SOAP UI request*/
    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
        <c>
        <aplicacion>25</aplicacion>
        <transaccion>15</transaccion>
        <usuario>${user}</usuario>
        <maquina>192.168.1.13</maquina>
        <codError>0</codError>
        <msgError />
        <medio>${medioId}</medio>
        <token>${lotteryToken}</token>
        <operacion>${Date.now()}</operacion>
        </c>
        <i>
        <ReservaId>${reservaId}</ReservaId>
        <xmlVenta>
        <VT>
        <V total="${total}"></V>
        <FP ordComp="${ordComp}" >
        <R forCo="CVT" Total="${total}" />
        </FP>
        </VT>
        </xmlVenta>
        <xmlNumeros>
        <RS>
        ${loteriaCombinacionesXML} 
        ${lottoCombinacionesXML} 
        ${pozoCombinacionesXML}    
        </RS>
        </xmlNumeros>
        <MedioId>${medioId}</MedioId>
        <UsuarioId>${user}</UsuarioId>
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
              let aux = data.mt.o[0].xmlVentaOutput[0]; //.ReturnValue[0].VTA[0].SUE[0].COMP;
              let xmlVentaOutput = await parser.parseStringPromise(aux);
              let ticketId = xmlVentaOutput.VTA.$.VId;
              let instantaneas = [];
              let instantaneasAux =
                xmlVentaOutput.VTA.INST && xmlVentaOutput.VTA.INST[0].SOR
                  ? xmlVentaOutput.VTA.INST[0].SOR
                  : "";
              if (instantaneasAux != "") {
                instantaneasAux.forEach((sorteoAux) => {
                  let sorteo = sorteoAux.$;

                  let premios = sorteoAux.R.map((premio) => {
                    return premio.$;
                  });
                  let data = {
                    sorteo,
                    premios,
                  };
                  instantaneas.push(data);
                });
              }
              let response = {
                instantaneas,
                ticketId,
              };

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info("venderBoletos.loteria", logData);
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("venderBoletos.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMessage}`,
              });
              reject(new Error(errorMessage));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("venderBoletos.error", {
              errorMessage: errorMsg,
            });
            reject(new Error(errorMsg));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("venderBoletos.error", {
      errorMessage: errorMsg,
    });

    throw new Error(e.message);
  }
};
