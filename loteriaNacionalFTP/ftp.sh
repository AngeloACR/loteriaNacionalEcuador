#!/bin/sh

sudo tail -F /home/acri/ftp/log/xferlog | while read line; do
  if echo "$line" | grep -q 'i r'; then
    IFS=" " read -a myarray <<< $line
    filename=${myarray[8]}
    if [[ $filename == *"BOLPRE"* ]]; then
        python3.6 ./resultadosFTP.py $filename
    fi    
    if [[ $filename == *"PREM"* ]]; then
        python3.6 ./premiosFTP.py $filename
    fi        
    if [[ $filename == *"GANWEB"* ]]; then
        python3.6 ./ganwebFTP.py $filename
    fi
    if [[ $filename == *"boletos"* ]]; then
        cp /home/acri/ftp/resultados/$filename /home/acri/loteriaNacionalEcuador/loteriaNacionalUploads/boletos
    fi
    if [[ $filename == *"boletines"* ]]; then
        cp /home/acri/ftp/resultados/$filename /home/acri/loteriaNacionalEcuador/loteriaNacionalUploads/boletines
    fi

  fi
done

