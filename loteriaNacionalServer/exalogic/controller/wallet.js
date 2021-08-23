const Ventas = require('../../loterianacional/controller/ventas');
const config = require('../../config/environment');
const https = require('https')

let exalogicHost = config.exalogicHostTest
//let exalogicHost = config.exalogicHostProd

const walletController = {


    reserveLottery: async (token) => {
        try {
            return new Promise(async (resolve, reject) => {

                /*let data = {
                    "command": "reserveLottery ",
                    "systemCode": "1",
                    "sessionToken": token,
                    "transactionId": "2223846696262170",
                    "language": "en",
                    "currency": "USD",
                    "operationTimeStamp": "2017-03-12 17:56:22.456",
                    "amount": "30.00",
                    "reservationDetails": [
                        {
                            "lotteryType": 1,
                            "lotteryName": "Loteria Nacional",
                            "drawNumber": 2578,
                            "drawDate": "10/05/2021",
                            "subTotal": 20.0,
                            "combinationC": "267855",
                            "combinationC2": "256987",
                            "combinationC3": "526987",
                            "combinationC4": "07",
                            "fractions": " [1, 3, 9, 10]"
                        }]
                }
                data = JSON.stringify(data);
                const options = {
                    hostname: exalogicHost,
                    port: 443,
                    path: '/todos',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': data.length
                    }
                }
    
                const req = https.request(options, res => {
                    console.log(`statusCode: ${res.statusCode}`)
    
                        var body = '';
    
        res.on('data', function (chunk) {
          body = body + chunk;
        });
    
        res.on('end',function(){
          console.log("Body :" + body);
          if (res.statusCode != 200) {
            reject("error")
        } else {
                resolve(body);
          }

        });
                })
    
                req.on('error', error => {
                    console.error(error)
                })
    
                req.write(data)
                req.end()
    */
                let response = await Ventas.autenticarUsuario();
                let lotteryToken = response.token;
                response = {
                    "resultCode": "0",
                    "resultDescription": "Successful transaction",
                    "transactionId": "2223846696262170",
                }
                resolve(response);

            });

        } catch (e) {
            throw e
        }
    },
    sellLottery: async (token) => {
        try {
            return new Promise(async (resolve, reject) => {

            /*             let data = {
"command":"sellLottery ",
"systemCode":"1",                
"sessionToken": token,
"transactionId":"2223846696262170",
"reserveId":"2223846696299987",
"language":"en",
"currency":"USD",
"operationTimeStamp":"2017-03-12 17:56:22.456",
"ticketId":”5643299987",
"amount":"30.00"
}
            data = JSON.stringify(data);
            const options = {
                hostname: exalogicHost,
                port: 443,
                path: '/todos',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            }

            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)

                    var body = '';

    res.on('data', function (chunk) {
      body = body + chunk;
    });

    res.on('end',function(){
      console.log("Body :" + body);
          if (res.statusCode != 200) {
            reject("error")
        } else {
                resolve(body);
          }

    });
            })

            req.on('error', error => {
                console.error(error)
            })

            req.write(data)
            req.end()

 */            let response = await Ventas.autenticarUsuario();
                let lotteryToken = response.token;
                response = {
                    "resultCode": "0",
                    "resultDescription": "Successful transaction",
                    "transactionId": "2223846696262170",
                }
                resolve(response);

            });

        } catch (e) {
            throw e
        }
    },
    cancelLottery: async (token) => {
        try {
            return new Promise(async (resolve, reject) => {

                /*            let data = {
                                "command": "cancelLottery",
                                "systemCode": "1",
                                "sessionToken": token,
                                "transactionId": "2223846696262170",
                                "reserveId": "2223846696299987",
                                "language": "en",
                                "currency": "USD",
                                "operationTimeStamp": "2017-03-12 17:56:22.456",
                                "amount": "30.00"
                            }
                            data = JSON.stringify(data);
                            const options = {
                                hostname: exalogicHost,
                                port: 443,
                                path: '/todos',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Content-Length': data.length
                                }
                            }
                
                            const req = https.request(options, res => {
                                console.log(`statusCode: ${res.statusCode}`)
                

                                    var body = '';
    
        res.on('data', function (chunk) {
          body = body + chunk;
        });
    
        res.on('end',function(){
          console.log("Body :" + body);
          if (res.statusCode != 200) {
            reject("error")
        } else {
                resolve(body);
          }
                            })
                
                            req.on('error', error => {
                                console.error(error)
                            })
                
                            req.write(data)
                            req.end()
                */
                let response = await Ventas.autenticarUsuario();
                let lotteryToken = response.token;
                response = {
                    "resultCode": "0",
                    "resultDescription": "Successful transaction",
                    "transactionId": "2223846696262170",
                }
                resolve(response);

            });

        } catch (e) {
            throw e
        }
    },
    getBalance: async (token) => {
        try {
            return new Promise(async (resolve, reject) => {

                /*            let data = {
                                "command": "getBalance",
                                "systemCode": "1",
                                "sessionToken": token,
                                "language": "en",
                                "currency": "USD"
                            }
                            data = JSON.stringify(data);
                            const options = {
                                hostname: exalogicHost,
                                port: 443,
                                path: '/todos',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Content-Length': data.length
                                }
                            }
                
                            const req = https.request(options, res => {
                                console.log(`statusCode: ${res.statusCode}`)
                
                                    var body = '';
    
        res.on('data', function (chunk) {
          body = body + chunk;
        });
    
        res.on('end',function(){
          console.log("Body :" + body);
          if (res.statusCode != 200) {
            reject("error")
        } else {
                resolve(body);
          }

        });
                            })
                
                            req.on('error', error => {
                                console.error(error)
                            })
                
                            req.write(data)
                            req.end()
                */
                let response = await Ventas.autenticarUsuario();
                let lotteryToken = response.token;
                response = {
                    "resultCode": "0",
                    "resultDescription": "Successful transaction",
                    "currency": "USD",
                    "balance": "30.00"
                }
                resolve(response);

            });

        } catch (e) {
            throw e
        }
    },
}

module.exports = walletController;