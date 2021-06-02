#!/bin/bash

ng generate module lottery --route lottery --module app.module
ng generate module user --route user --module app.module
ng generate module landing --route landing --module app.module
ng generate module payment --route payment --module app.module

cd src/app

cd ./lottery
    mkdir components
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component singleInquiry
        ng generate component lotteryType
        ng generate component numberSelection
        ng generate component ticketConfirmation
        ng generate component allInquiry

    cd ../services
        ng generate service lottery
    
    cd ../interfaces
        touch lottery.interface.ts

cd ../../landing


    mkdir components
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component landing
    
    cd ../services
        ng generate service landing
    
    cd ../interfaces
        touch landing.interface.ts

cd ../../payment


    mkdir components
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component shoppingCart
        ng generate component checkout
        ng generate component insufficientBalance
        ng generate component summary
        ng generate component invoice
        ng generate component totals
        ng generate component completedPurchase
    
    cd ../services
        ng generate service shoppingCart
        ng generate service payment
    
    cd ../interfaces
        touch payment.interface.ts

cd ../../user


    mkdir components
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component login
    
    cd ../services
        ng generate service user
    
    cd ../interfaces
        touch user.interface.ts