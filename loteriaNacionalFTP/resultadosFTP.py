#!/usr/bin/python3
from datetime import datetime
import os
from bson.objectid import ObjectId
from pymongo import MongoClient
import codecs
import xml.etree.ElementTree as ET
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

def agregarMaestro(nombre, size, cantidad, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaDB']
        date = datetime.now()
        data = {
            "numeroSorteo": sorteo,
            "resultados": {
                "status": True,
                "nombre": nombre,
                "tamaño": size,
                "cantidad": cantidad,
                "recibido": date,
                },
            "actualizado": date,
        }
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


def agregarResultados(resultadosNuevos, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaDB']
        for x in resultadosNuevos:
            resultadoData = x.attrib
            premioData = x[0][0].attrib
            combinacion2 = ''
            combinacion3 = ''
            combinacion4 = ''
            combinacion5 = ''
            if('C2' in resultadoData):
                combinacion2 = resultadoData['C2']
            if('C3' in resultadoData):
                combinacion3 = resultadoData['C3']
            if('C4' in resultadoData):
                combinacion4 = resultadoData['C4']
            if('C5' in resultadoData):
                combinacion5 = resultadoData['C5']
            codigoPremio = sorteo+"-"+premioData['P']
            if (tipoLoteria == "1"):
                resultado = {
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "codigo": int(resultadoData['B']),
                    "codigoPremio": codigoPremio
                }

                query = {
                    "tipoLoteria": int(tipoLoteria),
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                }
                updateQuery = {"$set": resultado}
                loteriaDB['resultadoloterias'].update_one(query, updateQuery, True)
            if (tipoLoteria == "2"):
                resultado = {
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "combinacion2": combinacion2,
                    "combinacion3": combinacion3,
                    "combinacion4": combinacion4,
                    "combinacion5": combinacion5,
                    "codigo": int(resultadoData['B']),
                    "codigoPremio": codigoPremio
                }
                query = {
                    "tipoLoteria": int(tipoLoteria),
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                }
                updateQuery = {"$set": resultado}
                loteriaDB['resultadolottos'].update_one(query, updateQuery, True)

            if (tipoLoteria == "5"):
                resultado = {
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "combinacion2": combinacion2,
                    "combinacion3": combinacion3,
                    "codigo": int(resultadoData['B']),
                    "codigoPremio": codigoPremio
                }
                query = {
                    "tipoLoteria": int(tipoLoteria),
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                }
                updateQuery = {"$set": resultado}
                loteriaDB['resultadopozos'].update_one(query, updateQuery, True)
            if (tipoLoteria == "14"):
                resultado = {
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "combinacion2": combinacion2,
                    "codigo": int(resultadoData['B']),
                    "codigoPremio": codigoPremio
                    }
                query = {
                    "tipoLoteria": int(tipoLoteria),
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "combinacion2": combinacion2,
                }
                updateQuery = {"$set": resultado}
                loteriaDB['resultadomillonarias'].update_one(query, updateQuery, True)

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
    filename = sys.argv[1]
    filepath = "http://67.43.9.57:9000/resultados/" + filename
    #filepath = "/home/acri/ftp/resultados" + filename
    #filepath = "/home/acri/ftpResultados" + filename
    #filepath = "C:/Users/angel/Proyectos/loteria/resultadosNuevos" + filename
    size = os.path.getsize(filepath)
    with codecs.open(filepath, 'r', encoding='iso-8859-1') as file:
        lines = file.read()

    with codecs.open(filepath, 'w', encoding='utf8') as file:
        file.write(lines)

    file = open(filepath, 'r+', encoding="utf8")

    content = file.read()
    file.seek(0, 0)
    file.write("<dataset>" + content + '</dataset>')
    file.close()
    resultadosTree = ET.parse(filepath)
    resultados = resultadosTree.getroot()
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]

    file = open(filepath, 'w+', encoding="utf8")
    file.seek(0, 0)
    file.write(content)
    file.close()

    agregarMaestro(filename,size,len(resultados),tipoLoteria, sorteo, db)
    agregarResultados(resultados, tipoLoteria, sorteo, db)


if __name__ == "__main__":
    main()
