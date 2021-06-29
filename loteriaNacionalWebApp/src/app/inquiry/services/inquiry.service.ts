import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InquiryService {
  today = new Date();
  localSource = "http://localhost:5480";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

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
        let sorteosJugados = data.values;
        console.log(sorteosJugados);
        resolve(sorteosJugados);
      });
    });
  }

  recuperarUltimosResultados(tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaUltimosResultados`;
        console.log("Recuperando sorteos de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoUltimosResultados`;
        console.log("Recuperando sorteos de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoUltimosResultados`;
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

  recuperarBoletoGanador(tipoLoteria, sorteo, combinaciones) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaGanador`;
        console.log("Recuperando boleto ganador de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoGanador`;
        console.log("Recuperando boleto ganador de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoGanador`;
        console.log("Recuperando boleto ganador de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

    address = address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any[]) => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        });
    });
  }
  recuperarBoletoGanadorPorPlancha(boletoInicial, boletoFinal, sorteo) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry/pozoPlancha";
    var address = this.mySource;

    address = address + endpoint;
    let body = {
      sorteo,
      boletoInicial,
      boletoFinal
    };
    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any[]) => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        });
    });
  }

  obtenerBoletin(tipoLoteria, sorteo) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaBoletin`;
        console.log("Recuperando boletin de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoBoletin`;
        console.log("Recuperando boletin de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoBoletin`;
        console.log("Recuperando boletin de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

    address = address + endpoint;
    let body = {
      sorteo
    };

    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any) => {
          let boletin = data.address;
          console.log(boletin);
          resolve(boletin);
        });
    });
  }
}
