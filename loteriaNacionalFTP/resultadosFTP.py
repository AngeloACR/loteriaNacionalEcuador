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

def agregarResultados(resultadosNuevos, tipoLoteria, sorteo, db):
    try:
        connection = connectDB(db)
        loteriaDB = connection['loteriaPruebaDB']
        #loteriaDB = connection['loteriaDB']
        premios = loteriaDB['resultados']
        for x in resultadosNuevos:
            resultadoData = x.attrib

            """ let indexLottito = 0;
                let resultadosLottito = []
                let mascota;
                let premioPozo = false;
                let reintegroPozo = false;
                for (let i = 0; i < length; i++) {
                    let codigoPremioAux = data[i].X[0].R[0].$.P;
                    let codigoPremio = `${sorteo}-${codigoPremioAux}`;
                    let resultado = {
                        tipoLoteria,
                        numeroSorteo: sorteo,
                        combinacion1: data[i].$.C1,
                        combinacion2: data[i].$.C2,
                        combinacion3: data[i].$.C3,
                        codigo: data[i].$.B,
                        codigoPremio,
                        combinacionGanadora: data[i].X[0].R[0].$.CG
                    }
                    resultado = (await ResultadosController.addResultado(resultado)).values;
                    if (codigoPremioAux == "1") {
                        await ResultadosController.setUltimoResultado(tipoLoteria, resultado, codigoPremio);
                        if (tipoLoteria == "5") {
                            premioPozo = true;
                        }
                    }
                    if (tipoLoteria == "2") {
                        if (codigoPremioAux == "23") {
                            await ResultadosController.setUltimoLottoPlus(tipoLoteria, resultado, codigoPremio);
                        } else if (codigoPremioAux == "24") {
                            resultadosLottito.push(resultado._id);
                            indexLottito++;
                        }

                    }
                    if (tipoLoteria == "5" && codigoPremioAux == "6" && !reintegroPozo) {
                        reintegroPozo == true;
                        mascota = resultado.combinacion3;
                    }
                }
                if (tipoLoteria == "2") {
                    let codigoPremioLottito = `${sorteo}-24`;
                    await ResultadosController.setUltimoLottito(tipoLoteria, resultadosLottito, codigoPremioLottito, indexLottito);
                }
                if (tipoLoteria == "5") {
                    await ResultadosController.setMascota(tipoLoteria, mascota);
                    if (!premioPozo) {

                        let data = await Lottery.autenticarUsuario()
                        let ultimoResultado = await Lottery.consultarUltimosResultados(5, data.token);

                        let codigoPremio = `${ultimoResultado.SortId}-1`;
                        let resultado = {
                            tipoLoteria,
                            numeroSorteo: ultimoResultado.SortId,
                            combinacion2: ultimoResultado.Comb,
                            combinacion3: '',
                            combinacion1: '',
                            codigoPremio,
                            combinacionGanadora: "2"
                        }
                        resultado = (await ResultadosController.addResultado(resultado)).values;
                        await ResultadosController.setUltimoResultado(tipoLoteria, resultado, codigoPremio);
                    }

                } """
            resultado = {
                "tipoLoteria": tipoLoteria,
                "numeroSorteo": sorteo,
                "combinacion1": resultadoData['C1'],
                "combinacion2": resultadoData['C2'],
                "combinacion3": resultadoData['C3'],
                "codigo": resultadoData['B'],
                "codigoPremio",
                #"combinacionGanadora": data[i].X[0].R[0].$.CG
            }
            sendResult(resultadoData['X'])
            #loteriaDB['resultados'].insert_one(resultado)
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
    file = open(filepath, encoding="iso-8859-1")
    content = file.read()
    file.close()
    content = "<dataset>"+content+"</dataset>"
    premios = ET.fromstring(content)
    data = filename.split("-")
    tipoLoteria = data[1]
    sorteo = data[2].split(".")[0]
    agregarResultados(resultados, tipoLoteria, sorteo, db)

                
        

if __name__ == "__main__":
    main()