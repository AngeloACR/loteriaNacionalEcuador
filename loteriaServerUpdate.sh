#!/bin/bash
mkdir loteriaNacionalServer2
cp ./loteriaNacionalServer/package.json ./loteriaNacionalServer2/package.json
cd loteriaNacionalServer2/

touch database.js
mkdir environments

mkdir alboran
mkdir exalogic
mkdir psdLoteria
mkdir correos

mkdir ftpBoletines
mkdir ftpBoletos

mkdir cache
mkdir sorteosLoteriaNacional
mkdir sorteosLotto
mkdir sorteosPozoMillonario
mkdir sorteosLaMillonaria
mkdir ganadores
mkdir reservas
mkdir ventas
mkdir auth
mkdir wallet

mkdir web

cp ../loteriaNacionalServer/serviciomt-prep.wsdl ./psdLoteria/serviciomt-prep.wsdl
cp ../loteriaNacionalServer/serviciomt-prod.wsdl ./psdLoteria/serviciomt-prod.wsdl

cd environments
    touch local.js
    touch test.js
    touch production.js

cd ../web
    touch webServer.js
    touch webApp.js
    mkdir public

cd ../ftpBoletines
    touch ftpBoletinesServer.json
    touch ftpBoletinesApp.json
    touch logging.js
    touch errors.js
cd ../ftpBoletos
    touch ftpBoletosServer.json
    touch ftpBoletosApp.json
    touch logging.js
    touch errors.js

cd ../correos
    touch ganadores.json
cd ../psdLoteria
    touch auth.js
    touch ventas.js
    touch resultados.js
    touch reservas.js
    touch sorteos.js
cd ../alboran
    touch auth.js
    touch wallet.js
    touch prize.js
cd ../exalogic
    touch auth.js
    touch wallet.js
    touch prize.js


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



cd ../../sorteosLoteriaNacional
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
            touch sorteos.js
            touch resultado.js
            
        cd ../routes
            touch index.js
            touch main.js
            

        cd ../middlewares
            touch index.js
            touch main.js

cd ../../sorteosLotto
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

cd ../../sorteosPozoMillonario
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

cd ../../sorteosLaMillonaria
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

cd ../../auth
    touch authServer.js
    touch authApp.js

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
    touch walletApp.js

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



