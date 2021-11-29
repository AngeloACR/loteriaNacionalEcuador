#!/usr/bin/python3
from bson.objectid import ObjectId
from pymongo import MongoClient
import codecs
import xml.etree.ElementTree as ET
import sys
import requests


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


def agregarResultados(resultadosNuevos, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        #loteriaDB = connection['loteriaPruebaDB']
        loteriaDB = connection['loteriaDB']
        resultados = loteriaDB['resultados']
        indexLottito = 0
        resultadosLottito = []
        premioPozo = False
        reintegroPozo = False
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
                resultadoId = loteriaDB['resultadoloterias'].insert_one(
                    resultado)
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
                resultadoId = loteriaDB['resultadolottos'].insert_one(
                    resultado)
            if (tipoLoteria == "5"):
                resultado = {
                    "numeroSorteo": sorteo,
                    "combinacion1": resultadoData['C1'],
                    "combinacion2": combinacion2,
                    "combinacion3": combinacion3,
                    "codigo": int(resultadoData['B']),
                    "codigoPremio": codigoPremio
                }
                resultadoId = loteriaDB['resultadopozos'].insert_one(resultado)

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
    #db = "mongodb://localhost:27017/loteriaPruebaDB"
    db = "mongodb://localhost:27017/loteriaDB"
    filename = sys.argv[1]
    filepath = "/home/loterianacional/resultados" + filename
    with codecs.open(filepath, 'r', encoding='iso-8859-1') as file:
        lines = file.read()

    with codecs.open(filepath, 'w', encoding='utf8') as file:
        file.write(lines)

    file = open(filepath, 'r+', encoding="utf8")

    content = file.read()
    file.seek(0, 0)
    file.write("<dataset>" + content + '</dataset>')
    file.close()
    # content = "<dataset>"+content+"</dataset>"
    resultadosTree = ET.parse(filepath)
    resultados = resultadosTree.getroot()
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]
    agregarResultados(resultados, tipoLoteria, sorteo, db)


if __name__ == "__main__":
    main()
