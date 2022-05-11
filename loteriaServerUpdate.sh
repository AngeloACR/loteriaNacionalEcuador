#!/bin/bash
mkdir loteriaNacionalServerNew
mv ./package.json ./loteriaNacionalServerNew/package.json
cd loteriaNacionalServerNew/

touch database.js
mkdir environments
mkdir webServer
mkdir alboran
mkdir psdLoteria
mkdir cache
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
    touch logging.js
    touch errors.js

cd ../correos
    touch ganadores.json
cd ../psdLoteriaNacional
    touch auth.js
    touch ventas.js
    touch consultas.js
    touch reservas.js
    touch sorteos.js
cd ../alboran
    touch auth.js
    touch wallet.js
    touch prize.js

    touch logging.js
    touch errors.js


cd ../helpers
    touch main.js

    touch logging.js
    touch errors.js
    touch cronjobs.js
cd ../cache
    touch cacheServer.js
    touch cacheApp.js

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
    touch ganadoresApp.js

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


cd ../../ventas
    touch ventasServer.js
    touch ventasApp.js

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


cd ../../reservas
    touch reservasServer.js
    touch reservasApp.js

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


cd ../../webServer
    touch webServer.js
    mkdir public/
    cd public/

cd ../../consultas
    mkdir loteriaNacional
    mkdir lotto
    mkdir pozoMillonario
    mkdir laMillonaria

    cd ./loteriaNacional
        touch loteriaNacionalServer.js
        touch loteriaNacionalApp.js
        mkdir controller
        mkdir models
        mkdir routes
        mkdir middlewares
        touch logging.js
        touch errors.js
        touch cronjobs.js

        cd controller
            touch index.js
            touch main.js
            

        cd ../models
            touch index.js
            touch main.js
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../lotto
        touch lottoServer.js
        touch lottoApp.js
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
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            
            touch main.js

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../pozoMillonario
        touch pozoMillonarioServer.js
        touch pozoMillonarioApp.js
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
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            

        cd ../middlewares
            touch index.js
            touch main.js

    cd ../laMillonaria
        touch logging.js
        touch errors.js
        touch cronjobs.js
        touch laMillonariaServer.js
        touch laMillonariaApp.js
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
            touch resultado.js
            touch sorteo.js
            
        cd ../routes
            touch index.js
            touch main.js
            

        cd ../middlewares
            touch index.js
            touch main.js

