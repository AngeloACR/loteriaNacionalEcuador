const Ventas = require('../../loterianacional/controller/ventas');
const config = require('../../config/environment');
const https = require('https')

let exalogicHost = config.exalogicHostTest
let exalogicEndpoint = config.exalogicEndpointTest
//let exalogicHost = config.exalogicHostProd

const authController = {


    authUser: async (authData) => {
        try {
            return new Promise(async (resolve, reject) => {
                //await authController.logoutUser();

                authData = JSON.stringify(authData);
                const options = {
                    hostname: exalogicHost,
                    port: 443,
                    path: exalogicEndpoint,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': authData.length
                    }
                }
                console.log(options)
                const req = https.request(options, res => {
                    console.log(`statusCode: ${res.statusCode}`)

                    var body = '';
                    res.on('data', function (chunk) {
                        body = body + chunk;
                    });

                    res.on('end', function () {
                        console.log("Body :" + body);
                        if (res.statusCode != 200) {
                            reject("error")
                        } else {
                            resolve(body);
                        }
                    })
                });

                    req.on('error', error => {
                        console.error(error)
                        reject(error);
                    })

                    req.write(authData)
                    req.end()

                    /*             let response = await Ventas.autenticarUsuario();
                                    let lotteryToken = response.token;
                                    response = {
                                        "resultCode": "0",
                                        "resultDescription": "Successful transaction",
                                        "transactionId": "2223846696262170",
                                        lotteryToken,
                                        "user": "PaolinoPaperino",
                                        "accountId": "789885645",
                                        "personalId": 145345,
                                        "playerDocument": "6759088653452",
                                        "currency": "USD",
                                        "balance": "30.00"
                                    }
                                    resolve(response); */
            })
        } catch (e) {
            throw e
        }
    },
    logoutUser: async () => {
        try {
        } catch (e) {
            throw e
        }
    },
}

module.exports = authController;