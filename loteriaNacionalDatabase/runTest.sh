#bin/bash!

mongod --dbpath /var/lib/mongo --keyFile backuptest.key --logpath /var/log/mongodb/mongod.log --replSet backuptest --bind_ip localhost,ventas-prueba.loteria.com.ec --fork