#!/bin/sh

sudo dnf install vsftpd
sudo systemctl start vsftpd
sudo systemctl enable vsftpd --now
sudo adduser loterianacional
sudo passwd loterianacional
sudo mkdir -p /home/loterianacional/resultados
sudo chmod -R 750 /home/loterianacional/resultados
sudo chown -R loterianacional:loterianacional /home/loterianacional/resultados
sudo bash -c 'echo loterianacional >> /etc/vsftpd/user_list'
mv vsftpd.conf /etc/vsftpd/vsftpd.conf
sudo systemctl restart vsftpd
python3 -m pip install -r requirements.txt