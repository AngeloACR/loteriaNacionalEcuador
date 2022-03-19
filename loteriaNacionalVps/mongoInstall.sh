#!/bin/bash

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo service mongod status

mongod --dbpath /var/lib/mongo --keyFile backup.key --logpath /var/log/mongodb/mongod.log --replSet backup --bind_ip localhost,ventas.loteria.com.ec --fork

mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork