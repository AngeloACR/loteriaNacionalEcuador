#!/bin/bash

mkdir config
mkdir lottery
mkdir exalogic
mkdir loterianacional
mkdir usuario

touch app.js
touch database.js
touch landingServer.js
touch userServer.js
touch lotteryServer.js

cd config
    touch environment.js

cd ../lottery
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js
        touch tickets.js
        touch transactions.js

    cd ../model
        touch index.js
        touch ticket.js
        touch transaction.js

    cd ../routes
        touch index.js
        touch tickets.js
        touch transactions.js

cd ../../exalogic
    mkdir controller
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

cd ../../loterianacional
    mkdir controller
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js


cd ../../usuario
    mkdir controller
    mkdir model
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js
        touch auth.js
        touch users.js
        touch roles.js

    cd ../model
        touch index.js
        touch user.js
        touch rol.js
        
    cd ../routes
        touch index.js
        touch auth.js
        touch users.js
        touch roles.js

    cd ../middlewares
        touch auth.js


