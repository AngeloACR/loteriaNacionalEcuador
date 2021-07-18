var xml2js = require('xml2js');
var parser = xml2js.Parser();
var soap = require('soap');
const config = require('../../config/environment');

const medioId = config.medioAplicatioId;

const address = config.aplicativoAddressTest;
const usuarioClientePsd = config.usuarioAplicativoTest;
const claveClientePsd = config.passwordAplicativoTest;
/* const address = config.aplicativoAddressProd;
const usuarioClientePsd = config.usuarioAplicativoProd;
const claveClientePsd = config.passwordAplicativoProd; */

module.exports.autenticarUsuario = async () => {
    try {
        console.log('Autenticando usuario');
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
                console.log(res);
                let data = await parser.parseStringPromise(res.fnAutenticacionResult)
                let errorCode = parseInt(data.mt.c[0].codError[0]);

                if (!errorCode) {
                    let response = {
                        token: data.mt.c[0].token[0]
                    }
                    console.log('Recibiendo token');
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
                        return sorteo.$;
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
      <Registros>20</Registros>
      <UsuarioId>italtronicprep</UsuarioId>
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

module.exports.reservarCombinaciones = async (tipoLoteria, sorteo, combinaciones, token) => {
    try {

        let client = await soap.createClientAsync(address, { envelopeKey: "s" });
        let combinacionesXML = "";
        combinaciones.forEach(combinacion => {
            let fraccionesXML = "";
            if (tipoLoteria == 1) {

                let fracciones = combinacion.Fra.split(',');
                fracciones.forEach(fraccion => {
                    fraccionesXML = `${fraccionesXML}<F id="${fraccion}" />`
                });
            }
            combinacionesXML = `${combinacionesXML}<R sorteo="${sorteo}" numero="${combinacion.Num}" cantid="${combinacion.Cant}" >${fraccionesXML}</R>`
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
    <UsuarioId>italtronicprep</UsuarioId>
      <ReservaId>0</ReservaId>
      <Observacion>Reserva de Boletos</Observacion>
      <xmlNumeros>
  <RS >
    <JG id="${tipoLoteria}">
      ${combinacionesXML} 
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
                    let aux = data.mt.rs[0].r[0];
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
