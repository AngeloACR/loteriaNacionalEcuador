var Proxy = require('wcf.js').Proxy;
var BasicHttpBinding = require('wcf.js').BasicHttpBinding;
var xml2js = require('xml2js');
var parser = xml2js.Parser();
var soap = require('soap');
//const address = "http://200.24.198.70/WCFMT_PREP/servicioMT.svc?wsdl";
//const address = "http://www1.loteria.com.ec/WCFMT/ServicioMT.svc?singleWsdl";
const address = "serviciomt-prep.wsdl"

const medioId = 17;
const usuarioClientePsd = 'sitiowebprep';
const claveClientePsd = 12345678;

module.exports.autenticarUsuario = async () => {
  try {
    console.log('Entrando al api de loteria nacional');
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
      </PI_DatosXml>
      `
    }

    console.log(client.describe());
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnAutenticacion(message
        //{ mt: [{ c: [{ aplicacion: 17, usuario: "sitiowebprep", maquina: "192.168.1.13", medio: 17, operacion: 1234567890 }] }] }
        , async function (err, res, rawResponse, soapHeader, rawRequest) {
          if (err) reject(err);
          console.log(rawRequest);
          let data = await parser.parseStringPromise(res.fnAutenticacionResult)
          let errorCode = parseInt(data.mt.c[0].codError[0]);
          console.log(errorCode)
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

module.exports.consultarBoletoGanador = async (tipoLoteria, sorteo, combinacion, token) => {
  try {
    console.log('Entrando al api de loteria nacional');
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
          <operacion>1234567890</operacion>
        </c>
        <i>
          <JuegoId>${tipoLoteria}</JuegoId>
          <SorteoId>${sorteo}</SorteoId>
          <Combinacion>${combinacion}</Combinacion>
        </i>
      </mt>
        ]]>
      </PI_DatosXml>
      `
    }

    console.log(client.describe());
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message
        //{ mt: [{ c: [{ aplicacion: 17, usuario: "sitiowebprep", maquina: "192.168.1.13", medio: 17, operacion: 1234567890 }] }] }
        , async function (err, res, rawResponse, soapHeader, rawRequest) {
          if (err) reject(err);
          console.log(rawRequest);
          let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
          let errorCode = parseInt(data.mt.c[0].codError[0]);
          console.log(errorCode)
          if (!errorCode) {
            let response = data.mt;
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

module.exports.consultarBoletos = async (tipoLoteria, token) => {
  try {
    console.log('Entrando al api de loteria nacional');
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
      <operacion>1234567890</operacion>
        </c>
        <i>
        <MedioId>${medioId}</MedioId>
      <Cantidad>50</Cantidad>          
      <JuegoId>${tipoLoteria}</JuegoId>
        </i>
    </mt>
        ]]>
      </PI_DatosXml>
      `
    }

    console.log(client.describe());
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
        if (err) reject(err);
        console.log(rawRequest);
        let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
        let errorCode = parseInt(data.mt.c[0].codError[0]);
        console.log(errorCode)
        if (!errorCode) {
          let response = data.mt;
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

module.exports.consultarSorteos = async (tipoLoteria, token) => {
  try {
    console.log('Entrando al api de loteria nacional');
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
        <operacion>1234567890</operacion>
          </c>
          <i>
        <MedioId>17</MedioId>
        <JuegoId>${tipoLoteria}</JuegoId>
          </i>
      </mt>
        ]]>
      </PI_DatosXml>
      `
    }

    console.log(client.describe());
    return new Promise(async (resolve, reject) => {
      client.ServicioMT.BasicHttpBinding_IServicioMT.fnEjecutaTransaccion(message, async function (err, res, rawResponse, soapHeader, rawRequest) {
        if (err) reject(err);
        console.log(rawRequest);
        let data = await parser.parseStringPromise(res.fnEjecutaTransaccionResult)
        let errorCode = parseInt(data.mt.c[0].codError[0]);
        console.log(errorCode)
        if (!errorCode) {
          let response = data.mt;
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

module.exports.cambioClave = async () => {
  try {
    console.log('Entrando al api de loteria nacional');
    let client = await soap.createClientAsync(wsdlFile, { envelopeKey: "s" });
    console.log(client.describe());
    return new Promise(async (resolve, reject) => {
      client.fnCambioClave({ mt: [{ s: [{ aplicacion: 17, usuario: "sitiowebprep", clave: 12345678, maquina: "192.168.1.13", medio: 17, operacion: 1234567890 }] }] }, function (err, res, rawResponse, soapHeader, rawRequest) {
        if (err) reject(err);
        console.log(res);
        resolve(rawRequest);
      });
    });
  } catch (e) {
    console.log(e.toString());
    throw e;
  }
};


module.exports.obtenerNumerosLoteria = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.obtenerNumerosLotto = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.obtenerNumerosPozo = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.reservarBoletos = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.liberarReservas = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.venderBoletos = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};

module.exports.consultarResultados = async (req, res) => {
  try {
    let binding = new BasicHttpBinding(
      {
        MessageEncoding: "Mtom"
        , SecurityMode: "TransportWithMessageCredential"
      })
    let proxy = new Proxy(binding, address)


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

    /*proxy.send's second argument is the soap action; you can find the soap action in your wsdl*/
    proxy.send(message, "http://YourNamespace/IYourService/YourMethod", function (response, ctx) {
      console.log(response);
      /*Your response is in xml and which can either be used as it is of you can parse it to JSON etc.....*/
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).json(e.toString());
  }
};