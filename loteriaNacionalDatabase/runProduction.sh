#!/bin/bash!

mongod --dbpath /var/lib/mongo --keyFile backup.key --logpath /var/log/mongodb/mongod.log --replSet backup --bind_ip localhost,ventas.loteria.com.ec --fork
