import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InquiryService {
  today = new Date();
  localSource = "http://localhost:3400";
  serverSource = "";

  //mySource = this.localSource;
  mySource = this.localSource;

  constructor(private http: HttpClient) {}

  recuperarSorteosJugados(tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaSorteosJugados`;
        console.log("Recuperando sorteos de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoSorteosJugados`;
        console.log("Recuperando sorteos de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoSorteosJugados`;
        console.log("Recuperando sorteos de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

    address = address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe((data: any[]) => {
        let sorteosJugados = data;
        console.log(sorteosJugados);
        resolve(sorteosJugados);
      });
    });
  }

  obtenerBoletin(tipoLoteria, sorteo) {

    switch (tipoLoteria) {
      case 1:
        return 'ruta de imagen de loteria nacional';
      case 2:
        return 'ruta de imagen de lotto';
      case 3:
        return 'ruta de imagen de pozo millonario';

      default:
        break;
    }
  }
}