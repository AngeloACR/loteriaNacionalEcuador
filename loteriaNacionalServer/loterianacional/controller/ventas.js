var xml2js = require('xml2js');
var parser = xml2js.Parser();
var soap = require('soap');
const config = require('../../config/environment');

const medioId = config.medioAplicatioId;
const address = config.aplicativoAddressTest;
const usuarioClientePsd = config.usuarioClienteTest;
const claveClientePsd = config.passwordClienteTest;
/* const address = config.aplicativoAddressProd;
const usuarioClientePsd = config.usuarioAplicativoProd;
const claveClientePsd = config.passwordAplicativoProd; */

module.exports.autenticarUsuario = async () => {
    try {
        const medioId = config.medioAplicatioId;
        const address = config.aplicativoAddressTest;
        const usuarioClientePsd = config.usuarioClienteTest;
        const claveClientePsd = config.passwordClienteTest;
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
        </PI_DatosXml>`
        }


        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnAutenticacion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);
                let data = await parser.parseStringPromise(res.fnAutenticacionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);

                if (!errorCode) {
                    let response = {
                        token: data.mt.c[0].token[0]
                    }
                    resolve(response);
                } else {
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};

module.exports.consultarSorteosDisponibles = async (tipoLoteria, token, user) => {
    try {

        const usuarioClientePsd = config.usuarioClienteTest;
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
        `
        }

        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);
                let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);

                if (!errorCode) {
                    let aux = data.mt.rs[0].r[0].Row;
                    let response = aux.map(sorteo => {
                        let sorteoAux = {
                            fecha: sorteo.$.FCadSort,
                            cantidadDeFracciones: sorteo.$.CFrac,
                            valorPremioPrincipal: sorteo.$.VPremio,
                            precio: sorteo.$.PVP,
                            sorteo: sorteo.$.SortId,
                            nombre: sorteo.$.SortNomb
                        }
                        return sorteoAux;
                    });
                    resolve(response);
                } else {
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};

module.exports.obtenerCombinacionesDisponibles = async (tipoLoteria, sorteo, token, combinacion, combinacionFigura, user) => {
    try {

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
      <SorteoId>${sorteo}</SorteoId>
      <Combinacion>${combinacion}</Combinacion>
      <Registros>96</Registros>
      <UsuarioId>${user}</UsuarioId>
      <CombFigura>${combinacionFigura}</CombFigura>
      <Sugerir>True</Sugerir>
    </i>
  </mt>	
          ]]>
        </PI_DatosXml>
        `
        }


        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);

                let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);

                if (!errorCode) {
                    let aux = data.mt.rs[0].r;
                    let response = [];
                    aux.forEach(aux2 => {
                        if (aux2.Row) {
                            aux2.Row.forEach(aux3 => {

                                response.push(aux3.$)
                            });
                        }
                    });
                    resolve(response);
                } else {
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};

module.exports.reservarCombinaciones = async (loteria, lotto, pozo, token, reservaId, user) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let loteriaCombinacionesXML = "";
        let lottoCombinacionesXML = "";
        let pozoCombinacionesXML = "";
        if (loteria.length != 0) {

            loteria.forEach(item => {
                let combinacion = item.combinacion;
                let fraccionesXML = ""
                fraccionesXML = `${fraccionesXML}<F id="${item.fraccion}" />`
                let cant = 1;
                loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`

            });
            loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `
        }
        if (lotto.length != 0) {
            lotto.forEach(item => {
                let combinacion = item.combinacion;
                let cant = 1;
                lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`

            });
            lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `
        }
        if (pozo.length != 0) {
            pozo.forEach(item => {
                let combinacion = item.combinacion;
                let cant = 1;
                pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`

            });
            pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `
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
    <maquina>192.168.1.13</maquina>
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
        `
        }

        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);

                let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);

                if (!errorCode) {
                    let reservaId = data.mt.o[0].ReturnValue;
                    let response = {
                        reservaId
                    }
                    /* let aux = data.mt.rs[0].r[0];
                    let boletosReservados = [];
                    aux.Row.forEach(boletoReservado => {
                        boletosReservados.push(boletoReservado.$);
                    });
                    switch (tipoLoteria) {
                        case 1:
                            let aux2 = data.mt.rs[0].r[1];
                            let fraccionesReservadas = [];
                            aux2.Row.forEach(fraccionReservada => {
                                fraccionesReservadas.push(fraccionReservada.$);
                            });
                            response = {
                                reservaId,
                                boletosReservados,
                                fraccionesReservadas
                            }
                            break;
                        case 2:
 
                            response = {
                                reservaId,
                                boletosReservados
                            }
                            break;
                        case 5:
                            response = {
                                reservaId,
                                boletosReservados
                            }
                            break;
 
                        default:
                            break;
                    } */
                    resolve(response);
                } else {
                    let errorMsg = data.mt.c[0].msgError[0];
                    console.log(errorMsg)
                    reject(errorMsg)
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};

module.exports.eliminarReservas = async (loteria, lotto, pozo, token, reservaId, user) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let loteriaCombinacionesXML = "";
        let lottoCombinacionesXML = "";
        let pozoCombinacionesXML = "";
        if (loteria.length != 0) {
            loteria.forEach(item => {
                let combinacion = item.combinacion;
                let fraccionesXML = ""

                fraccionesXML = `${fraccionesXML}<F id="${item.fraccion}" />`

                let cant = 1;

                loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" >${fraccionesXML}</R>`
            });
            loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `
        }
        if (lotto.length != 0) {
            lotto.forEach(item => {
                let combinacion = item.combinacion;
                let cant = 1;
                lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`
            });
            lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `
        }
        if (pozo.length != 0) {
            pozo.forEach(item => {
                let combinacion = item.combinacion;
                let cant = 1;
                pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" />`
            });
            pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `
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
            <maquina>192.168.1.13</maquina>
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
                  </PI_DatosXml>`
            /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/

        }
        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);

                let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);
                if (!errorCode) {
                    let reservaId = data.mt.o[0].ReturnValue;
                    let response = {
                        reservaId
                    }

                    resolve(response);
                } else {
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
}

module.exports.venderBoletos = async (ordComp, total, loteria, lotto, pozo, lotteryToken, reservaId, user) => {
    try {

        console.log("En venta de loteria 2");

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let loteriaCombinacionesXML = "";
        let lottoCombinacionesXML = "";
        let pozoCombinacionesXML = "";
        if (loteria.length != 0) {
            loteria.forEach(item => {
                let combinacion = item.ticket.combinacion;
                let fraccionesXML = ""
                let cant = 1;
                item.ticket.fracciones.forEach(element => {

                    fraccionesXML = `${fraccionesXML}<F id="${element}" />`
                    cant += 1;
                });


                loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`
            });
            loteriaCombinacionesXML = `
            <JG id="1">
            ${loteriaCombinacionesXML}
            </JG>        
              
            `
        }
        if (lotto.length != 0) {
            lotto.forEach(item => {
                let combinacion = item.ticket.combinacion;
                let cant = 1;
                lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
            lottoCombinacionesXML = `
            <JG id="2">
            ${lottoCombinacionesXML}
            </JG>        
              
            `
        }
        if (pozo.length != 0) {
            pozo.forEach(item => {
                let combinacion = item.ticket.combinacion;
                let cant = 1;
                pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
            pozoCombinacionesXML = `
            <JG id="5">
            ${pozoCombinacionesXML}
            </JG>        
              
            `
        }
        /*Ensure your message below looks like a valid working SOAP UI request*/
        let message = `<mt>
        <c>
          <aplicacion>25</aplicacion>
          <transaccion>15</transaccion>
          <usuario> ${user} </usuario>
          <maquina>DireccionIpLocal</maquina>
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
             <V total="${total}">
             </V>
             <FP 	 ordComp="${ordComp}" >
              <R forCo="CVT" Total="${total}" />
             </FP>
          </VT>
          </xmlVenta>
          <xmlNumeros>
          <RS >
        
            ${loteriaCombinacionesXML} 
            ${lottoCombinacionesXML} 
            ${pozoCombinacionesXML}
        
          </RS>
              </xmlNumeros>
          <MedioId>${medioId}</MedioId>
          <UsuarioId>${user}</UsuarioId>
        </i>
      </mt>`;
        /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/
        console.log(message);

        return new Promise(async (resolve, reject) => {


            resolve(message);
        });
        /* 
        return new Promise(async (resolve, reject) => {
            client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
                if (err) reject(err);
                //console.log(res);
                let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);
                console.log(errorCode)
                if (!errorCode) {
                    //let ticketId = data.mt.o[0].xmlVentaOutput[0].VTA[0].SUE[0].COMP;
                    let ticketId = "365987"
                    let response = {
                        data: data.mt.o[0],
                        ticketId
                    }

                    resolve(response);
                } else {
                    console.log(data.mt.c[0].msgError[0])
                    reject(data.mt.c[0].msgError[0])
                }
            });
        }); */

    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};
