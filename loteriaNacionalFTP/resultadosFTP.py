import logging
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer
from pyftpdlib.authorizers import UnixAuthorizer
from pyftpdlib.filesystems import UnixFilesystem



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
    #authorizer = DummyAuthorizer()
    authorizer = UnixAuthorizer(rejected_users=["root"], require_valid_shell=True)
    authorizer.add_user(username, password, homedir=ftpPath, perm='elradfmwMT')
    # Instantiate FTP handler class
    handler = FTPHandler
    handler.authorizer = authorizer

    handler.abstracted_fs = UnixFilesystem
    # Define a customized banner (string returned when client connects)
    handler.banner = "FTP de resultados de Lotería Nacional de Ecuador."
    server = FTPServer((ftpHost, ftpPort), handler)
    server.max_cons = 256
    server.max_cons_per_ip = 5
    logging.basicConfig(level=logging.DEBUG)
    server.serve_forever()

if __name__ == "__main__":
    main()