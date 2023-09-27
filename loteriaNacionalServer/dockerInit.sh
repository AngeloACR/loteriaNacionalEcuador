#!/bin/bash

cd usuario
docker-compose up -d

cd ..

cd results
docker-compose up -d

cd ..

cd lottery
docker-compose up -d

cd .. 
cd exalogic
docker-compose up -d

cd ..
cd cache
docker-compose up -d

