#!/bin/bash

 cd auth
 pm2 start authApp.js --name authApp
# cd ../ftpBoletines
# pm2 start ftpBoletinesApp.js --name ftpBoletinesApp
# cd ../ftpBoletos
# pm2 start ftpBoletosApp.js --name ftpBoletosApp
 cd ../ganadores
 pm2 start ganadoresApp.js --name ganadoresApp
# cd ../helper
# pm2 start helperApp.js --name helperApp
 cd ../reservas
 pm2 start reservasApp.js --name reservasApp
cd  ../sorteosLaMillonaria
pm2 start laMillonariaApp.js --name laMillonariaApp
cd ../sorteosLoteriaNacional
pm2 start loteriaNacionalApp.js --name loteriaNacionalApp
cd ../sorteosLotto
pm2 start lottoApp.js --name lottoApp
cd ../sorteosPozoMillonario
pm2 start pozoMillonarioApp.js --name pozoMillonarioApp
# cd ../uploads
# pm2 start uploadsApp.js --name uploadsApp
 cd ../ventas
 pm2 start ventasApp.js --name ventasApp
 cd ../wallet
 pm2 start walletApp.js --name walletApp
# cd ../web
# pm2 start webApp.js --name webApp