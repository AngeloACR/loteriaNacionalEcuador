#!/bin/bash

ng generate module inquiry --route inquiry --module app.module

cd src/app

cd ./inquiry
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component lottoConsulta
        ng generate component loteriaNacionalConsulta
        ng generate component pozoMillonarioConsulta
        ng generate component lottoSelector
        ng generate component loteriaNacionalSelector
        ng generate component pozoMillonarioSelector
        ng generate component lottoTicket
        ng generate component loteriaNacionalTicket
        ng generate component pozoMillonarioTicket
        ng generate component lottoBoletin
        ng generate component loteriaNacionalBoletin
        ng generate component pozoMillonarioBoletin
        ng generate component seleccionTipo
                
    cd ../containers
        ng generate component seleccion
        ng generate component boletinLotto
        ng generate component boletinLoteriaNacional
        ng generate component boletinPozoMillonario
        
    cd ../services
        ng generate service inquiry
    
    cd ../interfaces
        touch inquiry.interface.ts

cd ../../lottery
    mkdir containers
    
    cd ./components
        ng generate component selector
        ng generate component ticketScroller
        ng generate component lottoTicket
        ng generate component loteriaNacionalTicket
        ng generate component pozoMillonarioTicket
        ng generate component lottoConfigurador
        ng generate component loteriaNacionalConfigurador
        ng generate component pozoMillonarioConfigurador
        ng generate component seleccionTipo

    cd ../containers
        ng generate component seleccion
        ng generate component resumen
