#!/usr/bin/python3

from datetime import datetime
import xml.etree.ElementTree as ET
from pymongo import MongoClient
import sys
import os
import urllib.request  # the lib that handles the url stuff
import codecs

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

def agregarMaestro(nombre, tamaño, cantidad, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaDB']
        date = datetime.now()
        data = {
            "numeroSorteo": sorteo,
            "premios": {
                "status": True,
                "nombre": nombre,
                "tamaño": tamaño,
                "cantidad": cantidad,
                "recibido": date,
                },
            "actualizado": date,        }
        query = {
            "numeroSorteo": sorteo,
        }
        updateQuery = {"$set": data}
        if (tipoLoteria == "1"):
            loteriaDB['masterloterias'].update_one(query, updateQuery, True)
        if (tipoLoteria == "2"):
            loteriaDB['masterlottos'].update_one(query, updateQuery, True)
        if (tipoLoteria == "5"):
            loteriaDB['masterpozos'].update_one(query, updateQuery, True)
        if (tipoLoteria == "14"):
            loteriaDB['mastermillonarias'].update_one(query, updateQuery, True)
        closeConnect(connection)
        status = True
        return status
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        sendResult(message)
        status = False
        return status



def agregarPremios(premiosNuevos, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaDB']
        premios = loteriaDB['premios']
        for x in premiosNuevos:
            premioData = x.attrib
            codigo = sorteo + "-" + premioData['P']
            descripcionDescuento = ''
            valorFraccion = ''
            valorFraccionConDescuento = ''
            if('OD' in premioData):
                descripcionDescuento = premioData['OD']
            if('VF' in premioData):
                valorFraccion = premioData['VF']
            if('FD' in premioData):
                valorFraccionConDescuento = premioData['FD']
            premio = {
                "tipoLoteria": int(tipoLoteria),
                "numeroSorteo": sorteo,
                "nombre": premioData['N'],
                "codigo": codigo,
                "tipoPremio": premioData['TP'],
                "primeraSuerte": premioData['PS'],
                "valorPremio": premioData['VP'],
                "valorPremioConDescuento": premioData['VD'],
                "valorFraccion": valorFraccion,
                "valorFraccionConDescuento": valorFraccionConDescuento,
                "descripcionDescuento": descripcionDescuento
            }

            query = {
                "tipoLoteria": int(tipoLoteria),
                "codigoPremio": codigo,
            }
            updateQuery = {"$set": premio}
            if (tipoLoteria == "1"):
                loteriaDB['premioloterias'].update_one(query, updateQuery, True)
            if (tipoLoteria == "2"):
                loteriaDB['premiolottos'].update_one(query, updateQuery, True)
            if (tipoLoteria == "5"):
                loteriaDB['premiopozos'].update_one(query, updateQuery, True)
            if (tipoLoteria == "14"):
                loteriaDB['premiolamillonarias'].update_one(query, updateQuery, True)

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
    db = "mongodb://localhost:27017/loteriaDB"
    #db = "mongodb://loterianacional:$lndatabase123..$@localhost:27017/loteriaDB"
    filename = sys.argv[1]+".xml"
    print(sys.argv)
    filepath = "http://67.43.9.57:9000/resultados/" + filename
    #filepath = "/home/acri/ftp/resultados" + filename
    #filepath = "/home/acri/ftpResultados" + filename
    #filepath = "C:/Users/angel/Proyectos/loteria/resultadosNuevos" + filename
    data = urllib.request.urlopen(filepath) # it's a file like object and works just like a file
    with codecs.open(filename, 'w', encoding='utf8') as file:
        for line in data: # files are iterable
            file.write(line.decode("iso-8859-1"))
    
    file = open(filename, 'r+', encoding="utf8")        
    content = file.read()
    file.close()
    content = "<dataset>"+content+"</dataset>"
    premios = ET.fromstring(content)
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]
    size = os.path.getsize(filename)
    os.remove(filename)
    agregarMaestro(filename,size,len(premios),tipoLoteria, sorteo, db)

    agregarPremios(premios, tipoLoteria, sorteo, db)
        

if __name__ == "__main__":
    main()