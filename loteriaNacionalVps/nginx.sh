#!/bin/bash

sudo mv ./proxy_params /etc/nginx/
sudo rm /etc/nginx/nginx.conf
sudo mv ./nginx.conf /etc/nginx/
sudo mv ./ventas-api-prueba.conf /etc/nginx/conf.d/
sudo mv ./ventas-prueba.conf /etc/nginx/conf.d/
sudo mv ./contenidos-prueba.conf /etc/nginx/conf.d/
sudo service nginx reload