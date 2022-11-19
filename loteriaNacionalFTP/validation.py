#!/usr/bin/python3
import requests
import sys
import subprocess

def sendResult(message):
    print(message)
    sys.stdout.flush()


def main():
    url = "http://67.43.9.57:9000/uploads/"
    response = requests.get(url)
    resultado = response.json()

    subprocess.call("python ganwebFTP.py "+"GANWEB"+"-14-"+str(resultado['ganadoresMillonaria']), shell=True)
    subprocess.call("python premiosFTP.py "+"PREM"+"-14-"+str(resultado['premiosMillonaria']), shell=True)
    subprocess.call("python resultadosFTP.py "+"BOLPRE"+"-14-"+str(resultado['resultadosMillonaria']), shell=True)
    
    subprocess.call("python ganwebFTP.py "+"GANWEB"+"-1-"+str(resultado['ganadoresLoteria']), shell=True)
    subprocess.call("python premiosFTP.py "+"PREM"+"-1-"+str(resultado['premiosLoteria']), shell=True)
    subprocess.call("python resultadosFTP.py "+"BOLPRE"+"-1-"+str(resultado['resultadosLoteria']), shell=True)
    
    subprocess.call("python ganwebFTP.py "+"GANWEB"+"-2-"+str(resultado['ganadoresLotto']), shell=True)
    subprocess.call("python premiosFTP.py "+"PREM"+"-2-"+str(resultado['premiosLotto']), shell=True)
    subprocess.call("python resultadosFTP.py "+"BOLPRE"+"-2-"+str(resultado['resultadosLotto']), shell=True)
    
    subprocess.call("python ganwebFTP.py "+"GANWEB"+"-5-"+str(resultado['ganadoresPozo']), shell=True)
    subprocess.call("python premiosFTP.py "+"PREM"+"-5-"+str(resultado['premiosPozo']), shell=True)
    subprocess.call("python resultadosFTP.py "+"BOLPRE"+"-5-"+str(resultado['resultadosPozo']), shell=True)


if __name__ == "__main__":
    main()
