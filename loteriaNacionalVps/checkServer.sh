#!/bin/bash

#Check for disk space
echo "Getting disk space"
echo ""
echo ""
diskspace=$(df -h | sed -n -e '2{p;q}')
IFS=' ' read -r -a diskinfo <<< "$diskspace"
echo "The disk usage is ${diskinfo[4]}"
echo ""
echo ""
echo "Getting memory usage"
echo ""
echo ""
memoryavailable=$(free -m | sed -n -e '2{p;q}')
IFS=' ' read -r -a memoryinfo <<< "$memoryavailable"
echo "The total memory is ${memoryinfo[1]}MB and the available memory is ${memoryinfo[6]}MB"

echo ""
echo ""
echo "Checking Mongodb status"
echo ""
echo ""
STR=$(ps -edaf | grep mongo | grep -v grep)
SUB='mongod --dbpath'
if [[ "$STR" == *"$SUB"* ]]; 
then
    echo "Mongo is up"
else
    echo "Mongo is down"
fi

echo ""
echo ""
echo "Checking MySQL status"
echo ""
echo ""
mysqlstatus=$(service mysql status | grep 'Active')

echo ""
echo ""
echo "Checking Apache status"
echo ""
echo ""

