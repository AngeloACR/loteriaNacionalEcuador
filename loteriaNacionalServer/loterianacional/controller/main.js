var xml2js = require("xml2js");
var parser = xml2js.Parser();
var soap = require("soap");
const config = require("../../config/environment");
const medioId = config.medioAplicativoId;

/* const address = config.aplicativoAddressTest;
const usuarioClientePsd = config.usuarioAplicativoTest;
const claveClientePsd = config.passwordAplicativoTest; */
const address = config.aplicativoAddressProd;
const usuarioClientePsd = config.usuarioAplicativoProd;
const claveClientePsd = config.passwordAplicativoProd;

module.exports.autenticarUsuario = async () => {
  try {
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

module.exports.consultarBoletoGanador = async (
  tipoLoteria,
  sorteo,
  combinacion,
  token
) => {
  try {
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
        <c>
          <aplicacion>25</aplicacion>
          <transaccion>24</transaccion>
          <usuario>${usuarioClientePsd}</usuario>
          <maquina>192.168.1.13</maquina>
          <codError>0</codError>
          <msgError />
          <medio>${medioId}</medio>
          <token>${token}</token>
          <operacion>${Date.now()}</operacion>
        </c>
        <i>
          <JuegoId>${tipoLoteria}</JuegoId>
          <SorteoId>${sorteo}</SorteoId>
          <Combinacion>${combinacion}</Combinacion>
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
            let aux = data.mt.rs[0].r;

            let response;
            if (aux != "" && aux.length != 0) {
              aux = data.mt.rs[0].r[0].Row[0].$;

              response = {
                status: true,
                combinacion,
                sorteo,
                data: aux,
              };
            } else {
              aux = data.mt.rs[0].r;
              response = {
                status: false,
                sorteo,
                combinacion,
                data: aux,
              };
            }
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

module.exports.consultarUltimosResultados = async (tipoLoteria, token) => {
  try {
    let client = await soap.createClientAsync(address, { envelopeKey: "s" });

    let message = {
      $xml: `
      <PI_DatosXml>
      <![CDATA[
        <mt>
        <c>
      <aplicacion>25</aplicacion>
      <transaccion>55</transaccion>
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
      <Cantidad>1</Cantidad>          
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
            let response = [];
            if (data.mt.rs[0].r[0] == "") resolve(response);
            response = data.mt.rs[0].r[0].Row.map((data) => {
              let resultado = {
                tipoLoteria: data.$.JId,
                nombreLoteria: data.$.JNom,
                sorteo: data.$.SortId,
                fechaSorteo: data.$.FSort,
                combinacion: data.$.Comb,
                primeraSuerte: data.$.PriSue,
                descripcionPremio: data.$.DesPre,
                valorPremio: data.$.ValPre,
                codigoPremio: `${data.$.SortId}-${data.$.Prem}`,
              };
              if(resultado.tipoLoteria == "14") resultado['serie'] = data.$.Comb2
              return resultado;
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
