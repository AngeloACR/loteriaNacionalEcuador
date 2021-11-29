var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var { loteriaError } = require("../../errors/customError");

const { loteriaVentasLogger } = require("../../config/logging");
const config = require("../../config/environment");

const medioId = config.medioAplicativoId;
const address = config.aplicativoAddressTest;
//const address = config.aplicativoAddressProd;

module.exports.autenticarUsuario = async () => {
  try {
    loteriaVentasLogger.silly("autenticarUsuario");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    const usuarioClientePsd = config.usuarioAplicativoTest;
    const claveClientePsd = config.passwordAplicativoTest;

    /* const usuarioClientePsd = config.usuarioAplicativoProd;
    const claveClientePsd = config.passwordAplicativoProd; */
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
            let errorData = {};
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
                  dia: sorteo.$.SortNombSal.split(" ")[2],
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

            loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
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

    loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
      errorMessage: errorMsg,
    });

    throw new loteriaError(errorMsg, "loteria", "consultarSorteosDisponibles");
  }
};
module.exports.consultarDescuentos = async (token, user, ip) => {
  try {
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let message = {
      $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
            <c>
              <aplicacion>25</aplicacion>
              <transaccion>119</transaccion>
              <usuario>${user}</usuario>
              <maquina>${ip}</maquina>
              <codError>0</codError>
              <msgError />
              <medio>${medioId}</medio>
              <token>${token}</token>
              <operacion>${Date.now()}</operacion>
            </c>
            <i>
          <JuegoId>0</JuegoId>
          <SorteoId>0</SorteoId>
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
              let response = aux.map((descuento) => {
                //AGREGAR VALIDACION DE FECHA
                let inicioAux = descuento.$.FechaInicio;
                let inicioFechaAux = inicioAux.split(" ")[0].split("/");
                let inicioHoraAux = inicioAux.split(" ")[1];
                inicioAux = `${inicioFechaAux[2]}-${inicioFechaAux[1]}-${inicioFechaAux[0]}T${inicioHoraAux}Z`;

                let finAux = descuento.$.FechaFin;
                let finFechaAux = finAux.split(" ")[0].split("/");
                let finHoraAux = finAux.split(" ")[1];
                finAux = `${finFechaAux[2]}-${finFechaAux[1]}-${finFechaAux[0]}T${finHoraAux}Z`;

                let currentDate = Date.now();
                let inicioDate = new Date(inicioAux).getTime();
                let finDate = new Date(finAux).getTime();

                let descuentoAux = {
                  tipoLoteria: descuento.$.JuegoId,
                  sorteo: descuento.$.SorteoId,
                  fechainicio: descuento.$.FechaInicio,
                  fechaFin: descuento.$.FechaFin,
                  valorConDescuento: descuento.$.ValorPorBoleto,
                  cantidad: descuento.$.CantidadBoletos,
                  nombre: descuento.$.Nombre,
                  descripcion: descuento.$.Descripcion,
                  operacion: descuento.$.Operacion,
                  valorSinDescuento: descuento.$.PrecioVenta,
                };
                if (finDate >= currentDate && currentDate >= inicioDate) {
                  return descuentoAux;
                }
              });

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

            loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
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

    loteriaVentasLogger.error("consultarSorteosDisponibles.error", {
      errorMessage: errorMsg,
    });

    throw new loteriaError(errorMsg, "loteria", "consultarSorteosDisponibles");
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

              let errorData = {
                input: message,
                output: errorCode,
                function: "obtenerCombinacionesDisponibles",
              };
              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;
            loteriaVentasLogger.error("obtenerCombinacionesDisponibles.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              input: e,
              output: "",
              function: "obtenerCombinacionesDisponibles",
            };
            reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("obtenerCombinacionesDisponibles.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "obtenerCombinacionesDisponibles",
    };

    throw new loteriaError(errorMsg, "loteria", errorData);
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
              let errorData = {
                input: message,
                output: errorCode,
                function: "reservarCombinaciones",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("reservarCombinaciones.error", {
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

    loteriaVentasLogger.error("reservarCombinaciones.error", {
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
              let errorData = {
                input: message,
                output: errorCode,
                function: "eliminarReservas",
              };

              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("eliminarReservas.error", {
              data: message,
              errorMessage: `${errorCode}-${errorMsg}`,
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

    loteriaVentasLogger.error("eliminarReservas.error", {
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

module.exports.venderBoletos = async (
  ordComp,
  total,
  totalConDesc,
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
    let venta = totalConDesc
      ? `<V total="${total}" totalConDesc="${totalConDesc}"></V>`
      : `<V total="${total}"></V>`;
    let totalVenta = totalConDesc ? totalConDesc : total;
    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
        <c>
        <aplicacion>25</aplicacion>
        <transaccion>15</transaccion>
        <usuario>${user}</usuario>
        <maquina>${ip}</maquina>
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
        ${venta}
        <FP ordComp="${ordComp}" >
        <R forCo="CVT" Total="${totalVenta}" />
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
                status: true,
              };

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info("venderBoletos.loteria", logData);
              resolve(response);
            } else {
              let errorMsg = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("venderBoletos.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMsg}`,
              });
              let errorData = {
                status: false,
                input: message,
                output: errorCode,
                function: "venderBoletos",
              };
              resolve(errorData);
              //              reject(new loteriaError(errorMsg, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("venderBoletos.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              status: false,
              input: e,
              output: "",
              function: "venderBoletos",
            };
            resolve(errorData);

            //reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("venderBoletos.error", {
      errorMessage: errorMsg,
    });

    let errorData = {
      status: false,
      input: e,
      output: "",
      function: "venderBoletos",
    };
    return errorData;
    //throw new loteriaError(errorMsg, "loteria", errorData);
  }
};

module.exports.cancelarVenta = async (token, reservaId, user, motivo, ip) => {
  try {
    loteriaVentasLogger.silly("cancelarVenta");
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
          <MotivoAnulacion>${motivo}</MotivoAnulacion>
          <UsuarioId>${user}</UsuarioId>s
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
              let response = {
                status: true,
              };
              resolve(response);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("cancelarVenta.loteria.error", {
                message: `${errorCode}-${errorMessage}`,
              });
              let errorData = {
                status: false,
                input: message,
                output: errorCode,
                function: "cancelarVenta",
              };

              resolve(errorData);
              //reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("cancelarVenta.error", {
              data: message,
              errorMessage: `${errorCode}-${errorMsg}`,
            });
            let errorData = {
              status: false,
              input: e,
              output: "",
              function: "cancelarVenta",
            };
            resolve(errorData);
            //reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("cancelarVenta.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      status: false,
      input: e,
      output: "",
      function: "cancelarVenta",
    };
    return errorData;
    //throw new loteriaError(errorMsg, "loteria", errorData);
  }
};
