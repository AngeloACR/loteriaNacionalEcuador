#!/bin/bash

cd loteriaNacionalFront/

ng generate module admin --route admin --module app.module

cd src/app/admin

ng generate module descuentos --route descuentos --module admin.module
ng generate module codigosPromocionales --route codigosPromocionales --module admin.module

cd ./descuentos
mkdir services
    cd ./services
        ng generate service descuentos
    
cd ../../codigos-promocionales
mkdir services
    cd ./services
        ng generate service codigosPromocionales
                
