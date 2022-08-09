#!/bin/bash

mkdir -p /etc/nginx/api_conf.d

cp ./api_gateway.conf /etc/nginx/conf.d/api_gateway.conf
cp ./api_backends.conf /etc/nginx/api_backends.conf
cp ./loteria_api.conf /etc/nginx/api_conf.d/loteria_api.conf
cp ./lotto_api.conf /etc/nginx/api_conf.d/lotto_api.conf
cp ./pozoMillonario_api.conf /etc/nginx/api_conf.d/pozoMillonario_api.conf
cp ./laMillonaria_api.conf /etc/nginx/api_conf.d/laMillonaria_api.conf
cp ./ganadores_api.conf /etc/nginx/api_conf.d/ganadores_api.conf
cp ./reservas_api.conf /etc/nginx/api_conf.d/reservas_api.conf
cp ./ventas_api.conf /etc/nginx/api_conf.d/ventas_api.conf
cp ./auth_api.conf /etc/nginx/api_conf.d/auth_api.conf
cp ./wallet_api.conf /etc/nginx/api_conf.d/wallet_api.conf
cp ./helper_api.conf /etc/nginx/api_conf.d/helper_api.conf
cp ./uploads_api.conf /etc/nginx/api_conf.d/uploads_api.conf
cp ./web.conf /etc/nginx/conf.d/web.conf
cp ./cors /etc/nginx/cors


sudo service nginx restart