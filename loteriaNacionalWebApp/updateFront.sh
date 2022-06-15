#!/bin/bash

#ng generate module codigosPromocionales --route codigosPromocionales --module app.module

cd src/app

cd ./codigos-promocionales
    mkdir services
        
    cd ./services
        ng generate service codigosPromocionales
    
