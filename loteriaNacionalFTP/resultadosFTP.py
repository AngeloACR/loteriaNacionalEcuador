#!/usr/bin/python3

import xml.etree.ElementTree as ET
from pymongo import MongoClient
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
        loteriaDB = connection['loteriaPruebaDB']
        #loteriaDB = connection['loteriaDB']
        resultados = loteriaDB['resultados']
        for x in resultadosNuevos:
            resultadoData = x.attrib
            premioData = x[0][0].attrib
            sendResult(resultadoData)
            sendResult(premioData)
            combinacion2 = ''
            combinacion3 = ''
            if('C2' in resultadoData):
                combinacion2 = resultadoData['C2']
            if('C3' in resultadoData):
                combinacion3 = resultadoData['C3']
            codigoPremio = sorteo+"-"+premioData['P']
            indexLottito = 0
            resultadosLottito = []
            premioPozo = False
            reintegroPozo = False
            resultado = {
                "tipoLoteria": tipoLoteria,
                "numeroSorteo": sorteo,
                "combinacion1": resultadoData['C1'],
                "combinacion2": combinacion2,
                "combinacion3": combinacion3,
                "codigo": resultadoData['B'],
                "codigoPremio": codigoPremio,
                "combinacionGanadora": premioData['CG']
            }
            resultadoId = loteriaDB['resultados'].insert_one(resultado)
            if(premioData['P'] == "1"):
                myquery = { "tipoLoteria": tipoLoteria }
                newvalues = { "$set": { 
                    "tipoLoteria": tipoLoteria,
                    "numeroSorteo": sorteo,
                    "codigoPremioPrincipal": codigoPremio,
                    "ultimoResultado": resultadoId
                } }
                loteriaDB['ultimoresultados'].update_one(myquery, newvalues)
                if(tipoLoteria == "5"):
                    premioPozo = True
            if (tipoLoteria == "2"):
                if (premioData['P'] == "23"):
                    myquery = { "tipoLoteria": tipoLoteria }
                    data = { "$set":{
                        "resultadoLottoPlus": resultadoId,
                        "codigoPremioLottoPlus": codigoPremio
                    }}
                    loteriaDB['ultimoresultados'].update_one(myquery, data)
                if (premioData['P'] == "24"):
                    resultadosLottito.append(resultadoId)
                    indexLottito++;
            if (tipoLoteria == "5" && premioData['P'] == "6" && !reintegroPozo):
                reintegroPozo = True;
                nombreMascota = combinacion3;
                myquery = { "tipoLoteria": tipoLoteria }
                switch (nombreMascota) {
                    case "Camar�n":
                        mascota = "01"
                        break;
                    case "Delf�n":
                        mascota = "02"
                        break;
                    case "Perro":
                        mascota = "03"
                        break;
                    case "Llama":
                        mascota = "04"
                        break;
                    case "Papagayo":
                        mascota = "05"
                        break;
                    case "Conejo":
                        mascota = "06"
                        break;
                    case "Mono":
                        mascota = "07"
                        break;
                    case "Gal�pago":
                        mascota = "08"
                        break;
                    case "Tuc�n":
                        mascota = "09"
                        break;
                    case "Ballena":
                        mascota = "10"
                        break;
                    case "Oso":
                        mascota = "11"
                        break;
                    case "Foca":
                        mascota = "12"
                        break;
                    case "Cangrejo":
                        mascota = "13"
                        break;
                    case "C�ndor":
                        mascota = "14"
                        break;
                    case "Iguana":
                        mascota = "15"
                        break;
                }
                data = { "$set":{
                    "mascota": mascota,
                }}
                loteriaDB['ultimoresultados'].update_one(myquery, data)
        if(tipoLoteria == "2"):
            myquery = { "tipoLoteria": tipoLoteria }
            codigoPremioLottito = sorteo + '-24'
            data = { "$set":{
                "resultadosLottito": resultadosLottito,
                "codigoPremioLottito": codigoPremioLottito,
                "indexLottito": indexLottito
            }}
            loteriaDB['ultimoresultados'].update_one(myquery, data)
        if(tipoLoteria == "5" && !premioPozo):
            url = "https://ventas.loteria.com.ec"
            response = requests.get(url)
            resultado = response
            resultadoId = loteriaDB['resultados'].insert_one(resultado)
            myquery = { "tipoLoteria": tipoLoteria }            
            data = { "$set":{
                "ultimoResultado": resultadoId,
                "numeroSorteo": resultado['numeroSorteo'],
                "codigoPremioPrincipal": resultado['codigoPremio'],
            }}
            loteriaDB['ultimoresultados'].update_one(myquery, data)

                            
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
    #db = "mongodb://localhost:27017/loteriaDB"
    filename = sys.argv[1]
    filepath = "/home/loterianacional/resultados" + filename
    file = open(filepath, 'r+', encoding="iso-8859-1")
    content = file.read()
    file.seek(0, 0)
    file.write("<dataset>" + content+ '</dataset>')
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