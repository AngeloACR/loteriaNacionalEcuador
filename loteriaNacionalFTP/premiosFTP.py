#!/usr/bin/python3

import xml.etree.ElementTree as ET
from pymongo import MongoClient
import sys

def connectDB(myDB):
	try:
		connection = MongoClient(myDB)
		return connection
	except:
		sendResult("Connect Error")

def closeConnect(connection):
	try:
		connection.close()
	except:
		sendResult("Close Error")

def agregarPremios(premios, sorteo, db)
    try:
        print(premios)
    except:

def main():
	myDB = "mongodb://localhost:27017/loteriaPruebaDB"
	#myDB = "mongodb://localhost:27017/loteriaDB"
	filename = sys.argv[1]
	filepath = "/root/loteriaNacionalEcuador/loteriaNacionalServer" + filename
    file = open(filepath)

    content = file.read().replace("\n", " ")
    file.close()
    content = "<dataset>"+content+"</dataset>"

    premios = ET.fromstring(content)
    
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]
    agregarPremios(premios. sorteo, myDB)

                """ let data = aux.dataset.R;
                let length = data.length;

                for (let i = 0; i < length; i++) {
                    let premioAux = data[i]
                    let premio = {
                        tipoLoteria,
                        numeroSorteo: sorteo,
                        nombre: premioAux.$.N,
                        codigo: `${sorteo}-${premioAux.$.P}`,
                        tipoPremio: premioAux.$.TP,
                        primeraSuerte: premioAux.$.PS,
                        valorPremio: premioAux.$.VP,
                        valorPremioConDescuento: premioAux.$.VD,
                        valorFraccion: premioAux.$.VF,
                        valorFraccionConDescuento: premioAux.$.FD,
                        descripcionDescuento: premioAux.$.OD,
                    }

                    await PremiosController.addPremio(premio);
                }; """
        

if __name__ == "__main__":
    main()