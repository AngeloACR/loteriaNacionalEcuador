var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
var { loteriaError } = require("./errors");
const path = require("path");

const { loteriaVentasLogger } = require("./logging");
const config = require("../environments/test");

const medioId = config.medioAplicativoId;
const address = path.join(__dirname, config.aplicativoAddress);

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
              let response = [];
              aux.forEach((descuento) => {
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
                  response.push(descuentoAux);
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

module.exports.venderBoletos = async (
  ordComp,
  total,
  totalConDesc,
  loteria,
  lotto,
  pozo,
  pozoRevancha,
  millonaria,
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
    let pozoRevanchaCombinacionesXML = "";
    let millonariaCombinacionesXML = "";
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
    if (pozoRevancha.length != 0) {
      pozoRevancha.forEach((item) => {
        let combinacion = item.ticket.combinacion1;
        let cant = 1;
        pozoRevanchaCombinacionesXML = `
                ${pozoRevanchaCombinacionesXML}
                <R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`;
      });
      pozoRevanchaCombinacionesXML = `
            <JG id="17">
                ${pozoRevanchaCombinacionesXML}
            </JG>        
              
            `;
    }
    if (millonaria.length != 0) {
      millonaria.forEach((item) => {
        let combinacion = item.ticket.combinacion1;
        let combinacion2 = item.ticket.combinacion2;
        let fraccionesXML = "";
        let cant = 0;
        item.ticket.seleccionados.forEach((element) => {
          fraccionesXML = `${fraccionesXML}<F id="${element}" />`;
          cant += 1;
        });

        millonariaCombinacionesXML = `
                ${millonariaCombinacionesXML}
                <R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" numero2="${combinacion2}" cantid="${cant}" >${fraccionesXML}</R>`;
      });
      millonariaCombinacionesXML = `
            <JG id="14">
                ${millonariaCombinacionesXML}
            </JG>        
              
            `;
    }
    /*Ensure your message below looks like a valid working SOAP UI request*/
    /*     let venta = totalConDesc
      ? `<V total="${total}" totalConDesc="${totalConDesc}"></V>`
      : `<V total="${total}"></V>`;
 */
    let venta = `<V total="${total}"></V>`;

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
        <R forCo="CVT" Total="${total}" />
        </FP>
        </VT>
        </xmlVenta>
        <xmlNumeros>
        <RS>
        ${loteriaCombinacionesXML} 
        ${lottoCombinacionesXML} 
        ${pozoCombinacionesXML}
        ${pozoRevanchaCombinacionesXML}
        ${millonariaCombinacionesXML}
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

module.exports.agregarOrdenPago = async (
  ventaId,
  tipoJuego,
  sorteo,
  boletoId,
  premioId,
  lotteryToken,
  numeroDeRetiro,
  numeroDeTransaccion,
  cliente,
  ip
) => {
  try {
    loteriaVentasLogger.silly("agregarOrdenDePago");
    const usuarioClientePsd = config.usuarioAplicativo;
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });
    let orden = `<R ReTest="0" JId="${tipoJuego}" Sort="${sorteo}" BolId="${boletoId}" PremId="${premioId}" VId="${ventaId}" TPrem="ESP"/>`;
    //let orden = `<R ReTest="0" TPrem="ESP" NuReti="${numeroDeRetiro}" NuTranWeb="${numeroDeTransaccion}" />`;

    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
        <c>
        <aplicacion>25</aplicacion>
        <transaccion>82</transaccion>
        <usuario>${usuarioClientePsd}</usuario>
        <maquina>${ip}</maquina>
        <codError>0</codError>
        <msgError />
        <medio>${medioId}</medio>
        <token>${lotteryToken}</token>
        <operacion>${Date.now()}</operacion>
        </c>
        <i>
          <MedioId>${medioId}</MedioId>
          <UsuarioId>${cliente}</UsuarioId>   
          <xmlOrdenPago>
            <OPA>
              ${orden}
            </OPA>
          </xmlOrdenPago> 
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
              let ordenDePagoId = data.mt.o[0].ReturnValue[0];
              let response = {
                ordenDePagoId,
                status: true,
              };
              /* let response = {
                data: data.mt,
              };
               */ let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: response,
              };
              loteriaVentasLogger.info("agregarOrdenDePago.loteria", logData);
              resolve(response);
            } else {
              let errorMsg = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error("agregarOrdenDePago.loteria.error", {
                data: message,
                errorMessage: `${errorCode}-${errorMsg}`,
              });
              let errorData = {
                status: false,
                input: message,
                output: errorCode,
                function: "agregarOrdenDePago",
              };
              resolve(errorData);
              //              reject(new loteriaError(errorMsg, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;

            loteriaVentasLogger.error("agregarOrdenDePago.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              status: false,
              input: e,
              output: "",
              function: "agregarOrdenDePago",
            };
            resolve(errorData);

            //reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("agregarOrdenDePago.error", {
      errorMessage: errorMsg,
    });

    let errorData = {
      status: false,
      input: e,
      output: "",
      function: "agregarOrdenDePago",
    };
    return errorData;
    //throw new loteriaError(errorMsg, "loteria", errorData);
  }
};

module.exports.recuperarSeriesLaMillonaria = async (
  lotteryToken,
  user,
  sorteo,
  ip
) => {
  try {
    loteriaVentasLogger.silly("recuperarSeriesLaMillonaria");
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
  <c>
    <aplicacion>25</aplicacion>
    <transaccion>113</transaccion>
    <usuario>${user}</usuario>
    <maquina>${ip}</maquina>
    <codError>0</codError>
    <msgError />
    <medio>${medioId}</medio>
    <token>${lotteryToken}</token>
    <operacion>${Date.now()}</operacion>
  </c>
  <i>
    <JuegoId>14</JuegoId>
    <SorteoId>${sorteo}</SorteoId>
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
              if (data.mt.rs[0].r == "") {
                let errorMessage = "No hay series disponibles para este sorteo";
                loteriaVentasLogger.error(
                  "recuperarSeriesLaMillonaria.loteria.error",
                  {
                    data: message,
                    errorMessage,
                  }
                );

                let errorData = {
                  input: message,
                  output: errorCode,
                  function: "recuperarSeriesLaMillonaria",
                };
                reject(new loteriaError(errorMessage, "loteria", errorData));
              }
              let series = data.mt.rs[0].r[0].Row.map((row) => {
                return row.$.Serie;
              });

              let logData = {
                data: message,
                loteriaResponse: rawResponse,
                customResponse: series,
              };
              loteriaVentasLogger.info(
                "recuperarSeriesLaMillonaria.loteria",
                logData
              );
              resolve(series);
            } else {
              let errorMessage = data.mt.c[0].msgError[0];
              loteriaVentasLogger.error(
                "recuperarSeriesLaMillonaria.loteria.error",
                {
                  data: message,
                  errorMessage: `${errorCode}-${errorMessage}`,
                }
              );

              let errorData = {
                input: message,
                output: errorCode,
                function: "recuperarSeriesLaMillonaria",
              };
              reject(new loteriaError(errorMessage, "loteria", errorData));
            }
          } catch (e) {
            let errorMsg = e.message;
            loteriaVentasLogger.error("recuperarSeriesLaMillonaria.error", {
              errorMessage: errorMsg,
            });
            let errorData = {
              input: e,
              output: "",
              function: "recuperarSeriesLaMillonaria",
            };
            reject(new loteriaError(errorMsg, "loteria", errorData));
          }
        }
      );
    });
  } catch (e) {
    let errorMsg = e.message;

    loteriaVentasLogger.error("recuperarSeriesLaMillonaria.error", {
      errorMessage: errorMsg,
    });
    let errorData = {
      input: e,
      output: "",
      function: "recuperarSeriesLaMillonaria",
    };

    throw new loteriaError(errorMsg, "loteria", errorData);
  }
};
