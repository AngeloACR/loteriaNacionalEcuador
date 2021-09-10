#!/bin/bash

sudo mv ./proxy_params /etc/nginx/
sudo rm /etc/nginx/nginx.conf
sudo mv ./nginx.conf /etc/nginx/
sudo mv ./ventas-api.conf /etc/nginx/conf.d/
sudo mv ./ventas.conf /etc/nginx/conf.d/
sudo mv ./contenidos.conf /etc/nginx/conf.d/
sudo service nginx start