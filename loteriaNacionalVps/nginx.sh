#!/bin/bash

sudo mv ./proxy_params /etc/nginx/
sudo rm /etc/nginx/nginx.conf
sudo mv ./nginx.conf /etc/nginx/nginx.conf
sudo mv ./nginx.conf /etc/nginx/conf.d/ventas-api-prueba.conf
sudo mv ./nginx.conf /etc/nginx/conf.d/ventas-prueba.conf
sudo mv ./nginx.conf /etc/nginx/conf.d/contenidos-prueba.conf
sudo service nginx reload