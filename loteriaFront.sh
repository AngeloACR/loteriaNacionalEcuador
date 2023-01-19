#!/bin/bash
ng new loteriaNacionalFront2 --style scss --routing true --force

cd loteriaNacionalFront2/

ng generate module public --route inicio --module app.module
ng generate module consultas --route consulta --module app.module
ng generate module ventas --route ventas --module app.module
ng generate module codigosPromocionales --route codigosPromocionales --module app.module
ng generate module shared
ng generate module juegos

ng add @angular/material

cd src/app
cd ./consultas
    mkdir components
    mkdir containers
    mkdir services

    cd ./components
        ng g c resultado
        ng g c resultados
        ng g c ultimosResultados

    cd ../containers                
        ng g c home
        ng g c consultas
        ng g c boletin

    cd ../services
        ng generate service consultas
    

cd ../../shared
    mkdir components
    mkdir containers

    cd ./components
        ng generate component loader
        ng generate component error
        ng generate component confirm
        ng g component menuComprasHeader
        ng g component menuConsultasHeader
        ng g component menuComprasBox
        ng g component floatingMenu

    cd ./services
        ng generate service loader
        ng generate service error
        ng generate service confirm
                
    cd ../pipes
        ng generate pipe paginate

    cd ../directives
        ng generate directive autotab
        ng generate directive positioning
        ng generate directive stylePaginator

cd ../../codigosPromocionales
    mkdir components
    mkdir containers

    cd ./components
        ng generate component popupPromo

    cd ./services
        ng generate service codigosPromocionales
                
cd ../../juegos
    ng generate module loteria
    ng generate module lotto
    ng generate module pozo
    ng generate module millonaria

    cd ./loteria
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component boletin
            ng generate component consulta
            ng generate component sorteo
            ng generate component ticketConsulta
            ng generate component ticketVentas
            ng generate component ultimoResultado
            ng generate component venta

        cd ../services
            ng generate service venta
            ng generate service consulta

        cd ../interfaces
            ng generate interface ticketConsulta
            ng generate interface ticketVentas
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../lotto
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component boletin
            ng generate component consulta
            ng generate component sorteo
            ng generate component ticketConsulta
            ng generate component ticketVentas
            ng generate component ultimoResultado
            ng generate component venta

        cd ../services
            ng generate service venta
            ng generate service consulta

        cd ../interfaces
            ng generate interface ticketConsulta
            ng generate interface ticketVentas
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../pozo
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component boletin
            ng generate component consulta
            ng generate component sorteo
            ng generate component ticketConsulta
            ng generate component ticketVentas
            ng generate component ultimoResultado
            ng generate component venta

        cd ../services
            ng generate service venta
            ng generate service consulta

        cd ../interfaces
            ng generate interface ticketConsulta
            ng generate interface ticketVentas
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../revancha
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component boletin
            ng generate component consulta
            ng generate component sorteo
            ng generate component ticketConsulta
            ng generate component ticketVentas
            ng generate component ultimoResultado
            ng generate component venta

        cd ../services            
            ng generate service venta
            ng generate service consulta

        cd ../interfaces
            ng generate interface ticketConsulta
            ng generate interface ticketVentas
            ng generate interface ultimoResultado
            ng generate interface sorteo

    cd ../../millonaria
        mkdir components
        mkdir services
        mkdir interfaces

        cd ./components
            ng generate component boletin
            ng generate component consulta
            ng generate component sorteo
            ng generate component ticketConsulta
            ng generate component ticketVentas
            ng generate component ultimoResultado
            ng generate component venta

        cd ../services
            ng generate service venta
            ng generate service consulta

        cd ../interfaces
            ng generate interface ticketConsulta
            ng generate interface ticketVentas
            ng generate interface ultimoResultado
            ng generate interface sorteo

cd ../../../ventas
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
        ng g component confirmacion
        ng g component finalizada
        ng g component descripcion
        ng g component carrito
        ng g component instantanea
        ng g component instantaneas

    cd ../containers                
        ng g c detalle
        ng g c home
        ng g c venta

    cd ../services
        ng generate service cartera
        ng generate service venta
        ng generate service reserva
        ng generate service carrito
        ng generate service descuento
    
    cd ../interfaces
        ng generate interface carrito
        ng generate interface venta
