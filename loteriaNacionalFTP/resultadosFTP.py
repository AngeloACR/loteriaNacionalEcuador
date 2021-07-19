from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer
from pyftpdlib.authorizers import DummyAuthorizer


class MyHandler(FTPHandler):

    def on_connect(self):
        print("Connected")

    def on_disconnect(self):
        # do something when client disconnects
        pass

    def on_login(self, username):
        # do something when user login
        pass

    def on_logout(self, username):
        # do something when user logs out
        pass

    def on_file_sent(self, file):
        # do something when a file has been sent
        pass

    def on_file_received(self, file):
        print(file)

            # if (error) return;
            # let aux = filePath.split('/');
            # let fileName = aux[aux.length - 1];
            # let fileAux = fileName.split('-');
            # let sorteo = fileAux[2].split('.')[0];
            # let fileData = {

            #     fileType: fileAux[0],
            #     tipoLoteria: fileAux[1],
            #     sorteo
            # }
            # console.log(fileData);

            # switch (fileData.fileType) {
            #     case 'BOLPRE':
            #         ResultadosController.agregarResultados(fileData.sorteo, fileData.tipoLoteria)
            #         break;
            #     case 'PREM':
            #         ResultadosController.agregarPremios(fileData.sorteo, fileData.tipoLoteria)

            #         break;
            #     default:
            #         break;
            # }
        pass

    def on_incomplete_file_sent(self, file):
        # do something when a file is partially sent
        pass

    def on_incomplete_file_received(self, file):
        # remove partially uploaded files
        import os
        os.remove(file)


def main():
    username = 'loterianacional'
    password = '$lnftp123..$'
    ftpPath = '/root/loteriaNacionalEcuador/loteriaNacionalServer/uploads/resultados'
    ftpPort = 2222
    ftpHost = 'ventas-prueba.loteria.com.ec'
    #ftpHost = 'ventas.loteria.com.ec'
    authorizer = DummyAuthorizer()
    authorizer.add_user(username, password, homedir=ftpPath, perm='elradfmwMT')

    handler = MyHandler
    handler.authorizer = authorizer
    server = FTPServer((ftpHost, ftpPort), handler)
    server.serve_forever()

if __name__ == "__main__":
    main()