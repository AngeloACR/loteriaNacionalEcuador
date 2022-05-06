#!/bin/bash
mkdir loteriaNacionalServerNew
mv ./package.json ./loteriaNacionalServerNew/package.json
cd loteriaNacionalServerNew/

touch database.js
mkdir environments
mkdir webServer
mkdir auth
mkdir wallet
mkdir ftp
mkdir consultas
mkdir ganadores
mkdir reservas
mkdir ventas
mkdir helpers
mkdir correos

cd environments
    touch local.js
    touch test.js
    touch production.js
cd ../ftp
    touch boletinesServer.json
    touch boletosServer.json
cd ../correos
    touch ganadores.json

cd ../auth
    touch authServer.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../helpers
    touch helpersServer.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../wallet
    touch walletServer.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../ganadores
    touch ganadoresServer.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares
    mkdir psd

    cd psd
        touch index.js
        touch main.js

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../ventas
    touch ventasServer.js
    mkdir psd
    cd psd
        touch index.js
        touch main.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js
        touch cache.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js
        touch cache.js


    cd ../middlewares
        touch index.js
        touch main.js


cd ../../reservas
    touch reservasServer.js

    touch logging.js
    touch errors.js
    touch cronjobs.js

    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    mkdir psd
    cd psd
        touch index.js
        touch main.js

    cd controller
        touch index.js
        touch main.js
        touch cache.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js
        touch cache.js


    cd ../middlewares
        touch index.js
        touch main.js


cd ../../webServer
    touch webServer.js
    mkdir public/
    cd public/

cd ../../consultas
    mkdir loteriaNacional
    mkdir lotto
    mkdir pozoMillonario
    mkdir laMillonaria
    mkdir psd
    cd psd
        touch index.js
        touch main.js

    cd ./loteriaNacional
        touch loteriaNacionalServer.js
        mkdir controller
        mkdir models
        mkdir routes
        mkdir middlewares
        touch logging.js
        touch errors.js
        touch database.js
        touch cronjobs.js

        cd controller
            touch index.js
            touch main.js
            touch cache.js

        cd ../models
            touch index.js
            touch main.js
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            touch cache.js

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../lotto
        touch lottoServer.js
        touch logging.js
        touch errors.js
        touch database.js
        touch cronjobs.js
        mkdir controller
        mkdir models
        mkdir routes
        mkdir middlewares

        cd controller
            touch index.js
            touch main.js
            touch cache.js

            touch resultado.js
        cd ../models
            touch index.js
            touch main.js
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch cache.js
            touch main.js

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../pozoMillonario
        touch pozoMillonarioServer.js
        touch logging.js
        touch errors.js
        touch database.js
        touch cronjobs.js
        mkdir controller
        mkdir models
        mkdir routes
        mkdir middlewares

        cd controller
            touch index.js
            touch main.js
            touch cache.js

        cd ../models
            touch index.js
            touch main.js
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            touch cache.js

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../laMillonaria
        touch logging.js
        touch errors.js
        touch cronjobs.js
        touch laMillonariaServer.js
        mkdir controller
        mkdir models
        mkdir routes
        mkdir middlewares

        cd controller
            touch index.js
            touch main.js

            touch cache.js
        cd ../models
            touch index.js
            touch main.js
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            touch cache.js

        cd ../middlewares
            touch index.js
            touch main.js

