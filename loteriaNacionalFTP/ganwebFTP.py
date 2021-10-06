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


def agregarResultados(ganadoresNuevos, tipoLoteria, numeroSorteo, db):
    try:
        connection = connectDB(db)
        #loteriaDB = connection['loteriaPruebaDB']
        loteriaDB = connection['loteriaDB']
        ganadoreswebs = loteriaDB['ganadoreswebs']
        for x in ganadoresNuevos:
            ganadorData = x.attrib
            personaId = ''
            if('PE' in ganadorData):
                personaId = ganadorData['PE']
            tipoLoteria = ''
            if('J' in ganadorData):
                tipoLoteria = int(ganadorData['J'])
            numeroSorteo = ''
            if('S' in ganadorData):
                numeroSorteo = ganadorData['S']
            fechaCaducidad = ''
            if('PE' in ganadorData):
                fechaCaducidad = ganadorData['FC']
            combinacion1 = ''
            if('C' in ganadorData):
                combinacion1 = ganadorData['C']
            combinacion2 = ''
            if('C2' in ganadorData):
                combinacion2 = ganadorData['C2']
            combinacion3 = ''
            if('C3' in ganadorData):
                combinacion3 = ganadorData['C3']
            combinacion4 = ''
            if('C4' in ganadorData):
                combinacion4 = ganadorData['C4']
            combinacion5 = ''
            if('C5' in ganadorData):
                combinacion5 = ganadorData['C5']
            fraccion = ''
            if('F' in ganadorData):
                fraccion = ganadorData['F']
            boletoId = ''
            if('B' in ganadorData):
                boletoId = ganadorData['B']
            codigoPremio = ''
            if('P' in ganadorData):
                codigoPremio = numeroSorteo+"-"+ganadorData['P']
            descripcionPremio = ''
            if('N' in ganadorData):
                descripcionPremio = ganadorData['N']
            valorPremio = ''
            if('VP' in ganadorData):
                valorPremio = ganadorData['VP']
            valorPremioDescuento = ''
            if('N' in ganadorData):
                valorPremioDescuento = ganadorData['VD']
            tipoPremio = ''
            if('TP' in ganadorData):
                tipoPremio = ganadorData['TP']
            requiereTestimonio = ''
            if('RT' in ganadorData):
                requiereTestimonio = ganadorData['RT']
            ventaId = ''
            if('V' in ganadorData):
                ventaId = ganadorData['V']

            ganador = {
                "personaId": personaId,
                "tipoLoteria": tipoLoteria,
                "numeroSorteo": numeroSorteo,
                "fechaCaducidad": fechaCaducidad,
                "combinacion1": combinacion1,
                "combinacion2": combinacion2,
                "combinacion3": combinacion3,
                "combinacion4": combinacion4,
                "combinacion5": combinacion5,
                "fraccion": fraccion,
                "boletoId": boletoId,
                "codigoPremio": codigoPremio,
                "descripcionPremio": descripcionPremio,
                "valorPremio": valorPremio,
                "valorPremioDescuento": valorPremioDescuento,
                "tipoPremio": tipoPremio,
                "requiereTestimonio": requiereTestimonio,
                "ventaId": ventaId,
                "acreditado": False
            }
            ganadoreswebs.insert_one(ganador)
        url = "https://ventas-api-prueba.loteria.com.ec/lottery/acreditarPremios"
        response = requests.get(url)
        resultado = response.json()
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
    filepath = sys.argv[1]
    #filepath = "/home/loterianacional/resultados" + filename
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
    numeroSorteo = data[2].split(".")[0]
    agregarResultados(resultados, tipoLoteria, numeroSorteo, db)


if __name__ == "__main__":
    main()
