import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  today = new Date();
  localSource = 'http://localhost:100';
  testSource = 'https://ventas-api-prueba.loteria.com.ec';
  productionSource = 'https://ventas-api.loteria.com.ec';

  //mySource = this.localSource;
  //mySource = this.testSource;
  mySource = this.productionSource;

  constructor(private http: HttpClient) {}

  async recuperarSorteosJugados() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/cache';

    var address = '/millonaria';
    endpoint = `${endpoint}/sorteosJugados`;
    console.log('Recuperando sorteos de pozo millonario');

    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe((data: any) => {
        let sorteosJugados = data.values;
        console.log(sorteosJugados);
        sorteosJugados.sort(this.ordenaSorteos);
        resolve(sorteosJugados);
      });
    });
  }

  ordenaSorteos(a: any, b: any) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  async recuperarBoletoGanador(sorteo: any, combinaciones: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let address = '/millonaria';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones,
    };
    return new Promise((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  async getUltimoResultado() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/millonaria';
    let endpoint = '/cache/ultimoResultado';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, { headers: headers }).subscribe(
        (data: any) => {
          let response;
          let laMillonaria = data;
          localStorage.setItem(
            'laMillonariaUltimoResultado',
            JSON.stringify(laMillonaria)
          );
          response = { tipo: 'laMillonaria', data: laMillonaria };
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  async obtenerBoletin(sorteo: string) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    return new Promise((resolve, reject) => {
      let boletinAddress = `${sourceBoletines}T14${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }
}
