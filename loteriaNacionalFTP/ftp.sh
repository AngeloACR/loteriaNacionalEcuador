#!/bin/sh

tail -F /var/log/xferlog | while read line; do
  if echo "$line" | grep -q 'i r'; then
    IFS=" " read -a myarray <<< $line
    filename=${myarray[8]}
    if [[ $filename == *"BOLPRE"* ]]; then
        echo "It's Resultados!"
    fi    
    if [[ $filename == *"PREM"* ]]; then
        python3 ./premiosFTP.py $filename
    fi    
  fi
done

