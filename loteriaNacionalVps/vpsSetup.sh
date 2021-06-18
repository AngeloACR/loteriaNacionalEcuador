#!/bin/bash

#mongodb install
mv mongodb-org-4.4.repo /etc/yum.repos.d
sudo yum install -y mongodb-org


#mysql install
rpm -Uvh https://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm
sed -i 's/enabled=1/enabled=0/' /etc/yum.repos.d/mysql-community.repo
yum --enablerepo=mysql80-community install mysql-community-server
service mysqld start
grep "A temporary password" /var/log/mysqld.log
mysql_secure_installation
service mysqld restart
chkconfig mysqld on

#mariaDB install
#sudo yum install mariadb-server

#nginx install
 sudo yum install epel-release
 sudo yum update
 sudo yum install nginx

#nginx+php setup
sudo yum install yum-utils –y
sudo yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
sudo yum-config-manager ––enable remi–php72
sudo yum install php php-common php-opcache php-mcrypt php-cli php-gd php-curl php-mysql –y

#node and npm install
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
nvm install 10.13.0

#python install
sudo yum install -y https://repo.ius.io/ius-release-el7.rpm
sudo yum update
sudo yum install -y python36u python36u-libs python36u-devel python36u-pip

#certbot install
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

sudo yum install certbot python3-certbot-nginx
sudo certbot --nginx -d venta-prueba.loteria.com.ec 
sudo certbot --nginx -d contenidos-prueba.loteria.com.ec 
sudo certbot --nginx -d venta-api-prueba.loteria.com.ec 

#git install
sudo apt-get install git

#nodemon install
sudo npm install nodemon -g

#pm2 install
sudo npm install pm2 -g

#mongo import
#mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray

#screen install
sudo yum install screen
