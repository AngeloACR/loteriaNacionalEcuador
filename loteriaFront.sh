#!/bin/bash
ng new loteriaNacionalFront --style scss --routing true --force

cd loteriaNacionalFront/

ng generate module public --route public --module app.module
ng generate module consultas --route consulta --module app.module
ng generate module ventas --route ventas --module app.module
ng generate module shared --route shared --module app.module
ng generate module juegos --route juegos --module app.module

ng add @angular/material

cd src/app
cd ./consultas
    mkdir components
    mkdir containers
    mkdir services

    cd ./components
        ng g c menu
        ng g c resultado
        ng g c resultados

    cd ../containers                
        ng g c consultas
        ng g c loteria
        ng g c pozo
        ng g c lotto
        ng g c millonaria

    cd ../services
        ng generate service consultas
    

cd ../../shared
    mkdir components
    mkdir containers

    cd ./components
        ng generate component loader
        ng generate component error
        ng generate component confirm
                
    cd ../containers                
        ng generate component notFound

cd ../../juegos
    ng generate module loteria --route loteria --module juegos.module
    ng generate module lotto --route lotto --module juegos.module
    ng generate module pozo --route pozo --module juegos.module
    ng generate module millonaria --route millonaria --module juegos.module

    cd ./loteria
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component consulta
            ng generate component sorteo
            ng generate component venta
            ng generate component boletin
            ng generate component ticket
            ng generate component ultimoResultado

        cd ../services
            ng generate service loteria

        cd ../interfaces
            ng generate interface ticket
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../lotto
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component consulta
            ng generate component boletin
            ng generate component sorteo
            ng generate component venta
            ng generate component ticket
            ng generate component ultimoResultado

        cd ../services
            ng generate service lotto

        cd ../interfaces
            ng generate interface ticket
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../pozo
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component consulta
            ng generate component boletin
            ng generate component sorteo
            ng generate component venta
            ng generate component ticket
            ng generate component ultimoResultado

        cd ../services
            ng generate service pozo

        cd ../interfaces
            ng generate interface ticket
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../millonaria
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component consulta
            ng generate component venta
            ng generate component sorteo
            ng generate component boletin
            ng generate component ticket
            ng generate component ultimoResultado

        cd ../services
            ng generate service millonaria

        cd ../interfaces
            ng generate interface ticket
            ng generate interface ultimoResultado
            ng generate interface sorteo

cd ../../../ventas
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
        ng g component confirmacionDeVenta
        ng g component ventaFinalizada
        ng g component descripcionDeVenta
        ng g component carrito
        ng g component instantanea
        ng g component instantaneas 
        ng g component menuHeader
        ng g component menuBox
        ng g component floatingMenu

    cd ../containers                
        ng g c detalleDeVenta
        ng g c ventas
        ng g c loteria
        ng g c pozo
        ng g c lotto
        ng g c millonaria

    cd ../services
        ng generate service pagos
        ng generate service carrito
    
    cd ../interfaces
        ng generate interface carrito
        ng generate interface venta
