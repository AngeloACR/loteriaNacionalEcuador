#!/bin/bash
ng new incidenciasFront --style scss --routing true --force

cd incidenciasFront/

ng generate module ventas --route ventas --module app.module
ng generate module ganadores --route ganadores --module app.module
ng generate module juegos --route juegos --module app.module
ng generate module health --route health --module app.module
ng generate module shared

ng add @angular/material

cd src/app
cd ./ganadores
    mkdir services
    cd ./services
        ng generate service ganadores
    

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
        ng generate service http
        ng generate service confirm
                
cd ../../juegos
    mkdir services
    cd ./services
        ng generate service juegos
                
cd ../../ventas
    mkdir services
    cd ./services
        ng generate service ventas
