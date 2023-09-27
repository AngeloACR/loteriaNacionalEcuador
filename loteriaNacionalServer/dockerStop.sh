#!/bin/bash

cd usuario
docker-compose down -v

cd ..

cd results
docker-compose down -v

cd ..

cd lottery
docker-compose down -v

cd .. 
cd exalogic
docker-compose down -v

cd ..
cd cache
docker-compose down -v

