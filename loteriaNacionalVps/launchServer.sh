#!/bin/bash

sudo service mongod start
sudo service httpd start
sudo service mysqld start
screen
cd ../loteriaNacionalEcuador/loteriaNacionalServer
nodemon


