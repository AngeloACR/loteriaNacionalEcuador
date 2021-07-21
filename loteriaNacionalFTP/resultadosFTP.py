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
        loteriaDB = connection['loteriaPruebaDB']
        #loteriaDB = connection['loteriaDB']
        resultados = loteriaDB['resultados']
        indexLottito = 0
        resultadosLottito = []
        premioPozo = False
        reintegroPozo = False
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
            resultado = {
                "tipoLoteria": int(tipoLoteria),
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
                myquery = { "tipoLoteria": int(tipoLoteria) }
                newvalues = { "$set": { 
                    "tipoLoteria": int(tipoLoteria),
                    "numeroSorteo": sorteo,
                    "codigoPremioPrincipal": codigoPremio,
                    "ultimoResultado": ObjectId(resultadoId.inserted_id)
                } }
                loteriaDB['ultimoresultados'].update_one(myquery, newvalues)
                if(tipoLoteria == "5"):
                    premioPozo = True
            if (tipoLoteria == "2"):
                if (premioData['P'] == "23"):
                    myquery = { "tipoLoteria": int(tipoLoteria) }
                    data = { "$set":{
                        "resultadoLottoPlus": ObjectId(resultadoId.inserted_id),
                        "codigoPremioLottoPlus": codigoPremio
                    }}
                    loteriaDB['ultimoresultados'].update_one(myquery, data)
                elif (premioData['P'] == "24"):
                    resultadosLottito.append(ObjectId(resultadoId.inserted_id))
                    indexLottito = indexLottito + 1
            if (tipoLoteria == "5" and premioData['P'] == "6" and not reintegroPozo):
                reintegroPozo = True
                nombreMascota = combinacion3
                myquery = { "tipoLoteria": int(tipoLoteria) }
                if(nombreMascota == "Camarón"):
                    mascota = "01"
                elif(nombreMascota == "Delfín"):
                    mascota = "02"
                elif(nombreMascota == "Perro"):
                    mascota = "03"
                elif(nombreMascota == "Llama"):
                    mascota = "04"
                elif(nombreMascota == "Papagayo"):
                    mascota = "05"
                elif(nombreMascota == "Conejo"):
                    mascota = "06"
                elif(nombreMascota == "Mono"):
                    mascota = "07"
                elif(nombreMascota == "Galápago"):
                    mascota = "08"
                elif(nombreMascota == "Tucán"):
                    mascota = "09"
                elif(nombreMascota == "Ballena"):
                    mascota = "10"
                elif(nombreMascota == "Oso"):
                    mascota = "11"
                elif(nombreMascota == "Foca"):
                    mascota = "12"
                elif(nombreMascota == "Cangrejo"):
                    mascota = "13"
                elif(nombreMascota == "Cóndor"):
                    mascota = "14"
                elif(nombreMascota == "Iguana"):
                    mascota = "15"
                data = { "$set":{
                    "mascota": mascota,
                }}
                loteriaDB['ultimoresultados'].update_one(myquery, data)
        if(tipoLoteria == "2"):
            myquery = { "tipoLoteria": int(tipoLoteria) }
            codigoPremioLottito = sorteo + '-24'
            data = { "$set":{
                "resultadosLottito": resultadosLottito,
                "codigoPremioLottito": codigoPremioLottito,
                "indexLottito": indexLottito
            }}
            loteriaDB['ultimoresultados'].update_one(myquery, data)
        if(tipoLoteria == "5" and not premioPozo):
            url = "https://ventas.loteria.com.ec"
            response = requests.get(url)
            resultado = response
            resultadoId = loteriaDB['resultados'].insert_one(resultado)
            myquery = { "tipoLoteria": int(tipoLoteria) }            
            data = { "$set":{
                "ultimoResultado": ObjectId(resultadoId.inserted_id),
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
    with codecs.open(filepath, 'r', encoding = 'iso-8859-1') as file:
        lines = file.read()

    with codecs.open(filepath, 'w', encoding = 'utf8') as file:
        file.write(lines)

    file = open(filepath, 'r+', encoding="utf8")

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