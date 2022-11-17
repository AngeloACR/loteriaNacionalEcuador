#!/bin/sh

sudo tail -F /home/acri/ftp/log/xferlog | while read line; do
#sudo tail -F /home/acri/ftpLogs/xferlog | while read line; do
  if echo "$line" | grep -q 'i r'; then
    IFS=" " read -a myarray <<< $line
    filename=${myarray[8]}
    if [[ $filename == *"BOLPRE"* ]]; then
        curl -k "https://ventas-api-prueba.loteria.com.ec/ftp/resultados$filename"
        #python3.6 ./resultadosFTP.py $filename
    fi    
    if [[ $filename == *"PREM"* ]]; then
        curl -k "https://ventas-api-prueba.loteria.com.ec/ftp/premios$filename"
        #python3.6 ./premiosFTP.py $filename
    fi        
    if [[ $filename == *"GANWEB"* ]]; then
        curl -k "https://ventas-api-prueba.loteria.com.ec/ftp/ganadores$filename"
        #python3.6 ./ganwebFTP.py $filename
    fi
  fi
done

