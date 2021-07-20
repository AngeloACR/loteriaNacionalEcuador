#!/bin/sh

sudo dnf install vsftpd
sudo systemctl start vsftpd
sudo systemctl enable vsftpd --now
sudo adduser loterianacional
sudo passwd loterianacional
sudo mkdir -p /root/loteriaNacionalEcuador/loteriaNacionalServer/uploads/resultados
sudo chmod -R 750 /root/loteriaNacionalEcuador/loteriaNacionalServer/uploads/resultados
sudo chown -R loterianacional: /root/loteriaNacionalEcuador/loteriaNacionalServer/uploads/resultados
sudo bash -c 'echo loterianacional >> /etc/vsftpd/user_list'
mv vsftpd.conf /etc/vsftpd/vsftpd.conf
sudo systemctl restart vsftpd
python3 -m pip install -r requirements.txt