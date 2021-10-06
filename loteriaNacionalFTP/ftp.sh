#!/bin/sh

tail -F /var/log/xferlog | while read line; do
  if echo "$line" | grep -q 'i r'; then
    IFS=" " read -a myarray <<< $line
    filename=${myarray[8]}
    if [[ $filename == *"BOLPRE"* ]]; then
        python3 ./resultadosFTP.py $filename
    fi    
    if [[ $filename == *"PREM"* ]]; then
        python3 ./premiosFTP.py $filename
    fi        
    if [[ $filename == *"GANWEB"* ]]; then
        python3 ./ganwebFTP.py $filename
    fi    
  fi
done

