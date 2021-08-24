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

module.exports.consultarSorteosDisponibles = async (tipoLoteria, token) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });

        let message = {

            $xml: `
        <PI_DatosXml>
        <![CDATA[
          <mt>
            <c>
              <aplicacion>25</aplicacion>
              <transaccion>8</transaccion>
              <usuario>${usuarioClientePsd}</usuario>
              <maquina>192.168.1.13</maquina>
              <codError>0</codError>
              <msgError />
              <medio>${medioId}</medio>
              <token>${token}</token>
              <operacion>1234567890</operacion>
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

module.exports.obtenerCombinacionesDisponibles = async (tipoLoteria, sorteo, token, combinacion, combinacionFigura) => {
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
      <usuario>${usuarioClientePsd}</usuario>
      <maquina>192.168.1.13</maquina>
      <codError>0</codError>
      <msgError />
      <medio>${medioId}</medio>
      <token>${token}</token>
      <operacion>1234567890</operacion>
    </c>
    <i>
    <MedioId>${medioId}</MedioId>
    <JuegoId>${tipoLoteria}</JuegoId>
      <SorteoId>${sorteo}</SorteoId>
      <Combinacion>${combinacion}</Combinacion>
      <Registros>96</Registros>
      <UsuarioId>${usuarioClientePsd}</UsuarioId>
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

module.exports.reservarCombinaciones = async (loteria, lotto, pozo, token, reservaId) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let loteriaCombinacionesXML = "";
        let lottoCombinacionesXML = "";
        let pozoCombinacionesXML = "";
        loteria.forEach(item => {
            item.combinaciones.forEach(elemento => {
                let combinacion = elemento.combinacion;
                let fraccionesXML = ""
                let fracciones = elemento.fracciones.map(seleccion => {
                    return seleccion.fraccion;
                });
                fracciones.forEach(fraccion => {
                    fraccionesXML = `${fraccionesXML}<F id="${fraccion}" />`
                });
                let cant = fracciones.length;
                loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`
            });
        });
        lotto.forEach(item => {
            item.combinaciones.forEach(combinacion => {
                let cant = 1;
                lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
        });
        pozo.forEach(item => {
            item.combinaciones.forEach(combinacion => {
                let cant = 1;
                pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
        });
        let message = {

            $xml: `
        <PI_DatosXml>
        <![CDATA[
  <mt>
  <c>
    <aplicacion>25</aplicacion>
    <transaccion>12</transaccion>
    <usuario>${usuarioClientePsd}</usuario>
    <maquina>192.168.1.13</maquina>
    <codError>0</codError>
    <msgError />
    <medio>${medioId}</medio>
    <token>${token}</token>
    <operacion>1234567890</operacion>
  </c>
    <i>
    <MedioId>${medioId}</MedioId>
    <UsuarioId>${usuarioClientePsd}</UsuarioId>
      <ReservaId>${reservaId}</ReservaId>
      <Observacion>Reserva de Boletos</Observacion>
      <xmlNumeros>
  <RS >

    <JG id="1">
    ${loteriaCombinacionesXML} 
    </JG>        
    <JG id="2">
    ${lottoCombinacionesXML} 
    </JG>        
    <JG id="5">
    ${pozoCombinacionesXML} 
    </JG>        

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
                    let response = [];
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
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
};

module.exports.liberarReservas = async (req, res) => {
    try {


        /*Ensure your message below looks like a valid working SOAP UI request*/
        let message = `<mt>
          <c>
            <aplicacion>25</aplicacion>
            <transaccion>9</transaccion>
            <usuario> UsuarioCliente </usuario>
            <maquina>DireccionIpLocal</maquina>
            <codError>0</codError>
            <msgError />
            <medio>MedioId</medio>
            <token>55033007112012121148550330074812</token>
            <operacion>1234567890</operacion>
          </c>
          <i>
            <JuegoId>1</JuegoId>
            <MedioId>17</MedioId>
            <SorteoId>5413</SorteoId>
            <Combinacion>%87</Combinacion>
            <Registros>3</Registros>
            <UsuarioId>usrClientePsd</UsuarioId>
            <CombFigura></CombFigura>
            <Sugerir>False</Sugerir>
          </i>
        </mt>`;
        /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/


    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.eliminarReservas = async (loteria, lotto, pozo, token, reservaId) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let loteriaCombinacionesXML = "";
        let lottoCombinacionesXML = "";
        let pozoCombinacionesXML = "";
        loteria.forEach(item => {
            item.combinaciones.forEach(elemento => {
                let combinacion = elemento.combinacion;
                let fraccionesXML = ""
                let fracciones = elemento.fracciones.map(seleccion => {
                    return seleccion.fraccion;
                });
                fracciones.forEach(fraccion => {
                    fraccionesXML = `${fraccionesXML}<F id="${fraccion}" />`
                });
                let cant = fracciones.length;
                loteriaCombinacionesXML = `${loteriaCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" >${fraccionesXML}</R>`
            });
        });
        lotto.forEach(item => {
            item.combinaciones.forEach(combinacion => {
                let cant = 1;
                lottoCombinacionesXML = `${lottoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
        });
        pozo.forEach(item => {
            item.combinaciones.forEach(combinacion => {
                let cant = 1;
                pozoCombinacionesXML = `${pozoCombinacionesXML}<R sorteo="${item.sorteo}" numero="${combinacion}" cantid="${cant}" />`
            });
        });

        let message = {

            $xml: `
        <PI_DatosXml>
        <![CDATA[
                    <mt>
          <c>
            <aplicacion>25</aplicacion>
            <transaccion>66</transaccion>
            <usuario>${usuarioClientePsd}</usuario>
            <maquina>192.168.1.13</maquina>
            <codError>0</codError>
            <msgError />
            <medio>${medioId}</medio>
            <token>${token}</token>
            <operacion>1234567890</operacion>
            </c>
              <i>
              <MedioId>${medioId}</MedioId>
              <UsuarioId>${usuarioClientePsd}</UsuarioId>
                <ReservaId>${reservaId}</ReservaId>
                <Observacion>Reserva de Boletos</Observacion>
                <xmlNumeros>
            <RS >
          
              <JG id="1">
              ${loteriaCombinacionesXML} 
              </JG>        
              <JG id="2">
              ${lottoCombinacionesXML} 
              </JG>        
              <JG id="5">
              ${pozoCombinacionesXML} 
              </JG>        
          
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
                    let response = [];
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
                    reject(data.mt.c[0].msgError[0])
                }
            });
        });
    } catch (e) {
        console.log(e.toString());
        throw e;
    }
}

module.exports.venderBoletos = async (req, res) => {
    try {



        /*Ensure your message below looks like a valid working SOAP UI request*/
        let message = `<mt>
          <c>
            <aplicacion>25</aplicacion>
            <transaccion>9</transaccion>
            <usuario> UsuarioCliente </usuario>
            <maquina>DireccionIpLocal</maquina>
            <codError>0</codError>
            <msgError />
            <medio>MedioId</medio>
            <token>55033007112012121148550330074812</token>
            <operacion>1234567890</operacion>
          </c>
          <i>
            <JuegoId>1</JuegoId>
            <MedioId>17</MedioId>
            <SorteoId>5413</SorteoId>
            <Combinacion>%87</Combinacion>
            <Registros>3</Registros>
            <UsuarioId>usrClientePsd</UsuarioId>
            <CombFigura></CombFigura>
            <Sugerir>False</Sugerir>
          </i>
        </mt>`;
        /*The message that you created above, ensure it works properly in SOAP UI rather copy a working request from SOAP UI*/


    } catch (e) {
        res.status(400).json(e.toString());
    }
};
