#!/bin/bash

weekday=$(date +%u)

rm -rf backup-loteriaDB-${weekday}/*
mongodump --db=loteriaDB --out="backup-loteriaDB-${weekday}"