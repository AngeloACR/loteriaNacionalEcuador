#!/bin/bash

sudo cp ./proxy_params /etc/nginx/
sudo rm /etc/nginx/nginx.conf
sudo cp ./nginx.conf /etc/nginx/
sudo cp ./ventas-api.conf /etc/nginx/conf.d/
sudo cp ./ventas.conf /etc/nginx/conf.d/
sudo cp ./contenidos.conf /etc/nginx/conf.d/
sudo service nginx start