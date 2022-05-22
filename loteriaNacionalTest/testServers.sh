#!/bin/sh

ab -p loteriaData.txt -T application/json -n 400 -c 5 http://localhost:5500/ganador > loteriaTestResults.txt &
ab -p lottoData.txt -T application/json -n 400 -c 5 http://localhost:6000/ganador > lottoTestResults.txt &
ab -p pozoData.txt -T application/json -n 400 -c 5 http://localhost:6500/ganador > pozoTestResults.txt &
ab -p millonariaData.txt -T application/json -n 400 -c 5 http://localhost:7000/ganador > millonariaTestResults.txt &
