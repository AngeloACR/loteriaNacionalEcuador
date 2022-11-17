import flask
import subprocess

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/ganadores/<archivo>', methods=['GET'])
def ganadores(archivo):
    subprocess.call("python3.6 ganwebFTP.py "+archivo, shell=True)
    return archivo

@app.route('/premios/<archivo>', methods=['GET'])
def premios(archivo):
    subprocess.call("python3.6 premiosFTP.py "+archivo, shell=True)
    return archivo

@app.route('/resultados/<archivo>', methods=['GET'])
def resultados(archivo):
    subprocess.call("python3.6 resultadosFTP.py "+archivo, shell=True)
    return archivo

app.run()