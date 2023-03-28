#!/bin/bash
curl -k -X PUT https://ventas-api.loteria.com.ec/loteria/ultimoResultado 
curl -k -X PUT https://ventas-api.loteria.com.ec/pozoRevancha/ultimoResultado 
curl -k -X PUT https://ventas-api.loteria.com.ec/millonaria/ultimoResultado 
curl -k -X PUT https://ventas-api.loteria.com.ec/pozo/ultimoResultado 
curl -k -X PUT https://ventas-api.loteria.com.ec/lotto/ultimoResultado 
#curl -k -X PUT https://ventas-api.loteria.com.ec/facilotto/ultimoResultado 
curl -k https://ventas-api.loteria.com.ec/loteria/cache/actualizar 
curl -k https://ventas-api.loteria.com.ec/millonaria/cache/actualizar 
curl -k https://ventas-api.loteria.com.ec/pozo/cache/actualizar 
curl -k https://ventas-api.loteria.com.ec/pozoRevancha/cache/actualizar 
curl -k https://ventas-api.loteria.com.ec/lotto/cache/actualizar 
#curl -k https://ventas-api.loteria.com.ec/facilotto/cache/actualizar 
