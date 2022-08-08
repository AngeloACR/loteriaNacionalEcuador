#!/bin/sh
#curl -d '  { "reserveId": "1659558139711", "transactionId": "1659558139712", "token": "6b1c1059d40ef976afdd", "amount": "5.00"}' -H "Content-Type: application/json" -X POST https://ventas-api.loteria.com.ec/wallet/cancelLottery
curl -d '  { "reserveId": "1659405231895", "transactionId": "1659405231896", "token": "8d1c105e6036340a5f60", "amount": "1.00"}' -H "Content-Type: application/json" -X POST https://ventas-api.loteria.com.ec/wallet/cancelLottery
