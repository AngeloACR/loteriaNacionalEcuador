#!/bin/bash

mkdir -p /etc/nginx/api_conf.d

#cp ./api_gateway.conf /etc/nginx/conf.d/api_gateway.conf
cp ./api_backends.conf /etc/nginx/api_backends.conf
cp ./sorteosLoteria_api.conf /etc/nginx/api_conf.d/sorteosLoteria_api.conf
cp ./sorteosLotto_api.conf /etc/nginx/api_conf.d/sorteosLotto_api.conf
cp ./sorteosPozoMillonario_api.conf /etc/nginx/api_conf.d/sorteosPozoMillonario_api.conf
cp ./sorteosLaMillonaria_api.conf /etc/nginx/api_conf.d/sorteosLaMillonaria_api.conf
cp ./ganadores_api.conf /etc/nginx/api_conf.d/ganadores_api.conf
cp ./reservas_api.conf /etc/nginx/api_conf.d/reservas_api.conf
cp ./ventas_api.conf /etc/nginx/api_conf.d/ventas_api.conf
cp ./auth_api.conf /etc/nginx/api_conf.d/auth_api.conf
cp ./wallet_api.conf /etc/nginx/api_conf.d/wallet_api.conf
cp ./helper_api.conf /etc/nginx/api_conf.d/helper_api.conf
cp ./uploads_api.conf /etc/nginx/api_conf.d/uploads_api.conf
