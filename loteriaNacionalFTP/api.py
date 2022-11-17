import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/ganadores/<archivo>', methods=['GET'])
def ganadores(archivo):
    return archivo

@app.route('/premios/<archivo>', methods=['GET'])
def premios(archivo):
    return archivo

@app.route('/resultados/<archivo>', methods=['GET'])
def resultados(archivo):
    return archivo

app.run()