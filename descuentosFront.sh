#!/bin/bash
ng new adminFront --style scss 

cd adminFront/

ng generate module descuentos --route descuentos --module app.module
ng generate module codigosPromocionales --route codigosPromocionales --module app.module
ng generate module shared

ng add @angular/material

cd src/app
cd ./descuentos
    cd ../services
        ng generate service descuentos
    

cd ../../shared
    mkdir components
    mkdir containers

    cd ./components
        ng generate component loader
        ng generate component error
        ng generate component confirm
        ng g component menu

    cd ./services
        ng generate service loader
        ng generate service error
        ng generate service confirm
        ng generate service http
                

cd ../../codigosPromocionales
    cd ./services
        ng generate service codigosPromocionales
                
