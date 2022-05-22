#!/bin/sh

ab -p loteriaData.txt -n 300 -c 10 http://localhost:5500/ganador > loteriaTestResults.txt &
ab -p lottoData.txt -n 300 -c 10 http://localhost:6000/ganador > lottoTestResults.txt &
ab -p pozoData.txt -n 300 -c 10 http://localhost:6500/ganador > pozoTestResults.txt &
ab -p millonariaData.txt -n 300 -c 10 http://localhost:7000/ganador > millonariaTestResults.txt &
