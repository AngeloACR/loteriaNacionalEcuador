#!/bin/bash

sudo mv ./proxy_params /etc/nginx/
sudo rm /etc/nginx/nginx.conf
sudo mv ./nginx.conf /etc/nginx/
sudo mv ./nginx.conf /etc/nginx/default.d/ventas-api-prueba.conf
sudo mv ./nginx.conf /etc/nginx/default.d/ventas-prueba.conf
sudo mv ./nginx.conf /etc/nginx/default.d/contenidos-prueba.conf
sudo service nginx reload