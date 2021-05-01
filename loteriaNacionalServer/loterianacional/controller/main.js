var Proxy = require('wcf.js').Proxy;
var WSHttpBinding = require('wcf.js').WSHttpBinding;
const address = "http://200.24.198.70/WCFMT_PREP/servicioMT.svc";

module.exports.obtenerNumerosLoteria = async (req, res) => {
    try {
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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
        let binding = new WSHttpBinding(
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