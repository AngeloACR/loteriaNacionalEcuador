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

def agregarPremios(premiosNuevos, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaPruebaDB']
        #loteriaDB = connection['loteriaDB']
        premios = loteriaDB['premios']
        sendResult(premios)
        sendResult(premiosNuevos)
        for x in premiosNuevos:
            premioData = x.attrib
            codigo = sorteo + premioData['P']
            descripcionDescuento = ''
            if(premioData.key('OD') != None):
                descripcionDescuento = premioData['OD']
            premio = {
                "tipoLoteria": premioData['J'],
                "numeroSorteo": sorteo,
                "nombre": premioData['N'],
                "codigo": codigo,
                "tipoPremio": premioData['TP'],
                "primeraSuerte": premioData['PS'],
                "valorPremio": premioData['VP'],
                "valorPremioConDescuento": premioData['VD'],
                "valorFraccion": premioData['VF'],
                "valorFraccionConDescuento": premioData['FD'],
                "descripcionDescuento": descripcionDescuento
            }
            loteriaDB['premios'].insert_one(premio)
        closeConnect(connection)
        status = True
        return status
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        sendResult(message)
        status = False
        return status

def sendResult(message):
    print(message)
    sys.stdout.flush()

def main():
    db = "mongodb://localhost:27017/loteriaPruebaDB"
    #myDB = "mongodb://localhost:27017/loteriaDB"
    filename = sys.argv[1]
    filepath = "/home/loterianacional/resultados" + filename
    file = open(filepath, encoding="iso-8859-1")
    content = file.read()
    file.close()
    content = "<dataset>"+content+"</dataset>"
    premios = ET.fromstring(content)
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]
    agregarPremios(premios, sorteo, db)
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