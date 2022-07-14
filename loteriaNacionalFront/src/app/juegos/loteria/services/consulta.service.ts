import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  today = new Date();
  mySource = environment.source

  constructor(private http: HttpClient) {}

  recuperarSorteosJugados() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    var address = '/loteria';
    let endpoint = '/cache';
    endpoint = `${endpoint}/sorteosJugados`;

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

  recuperarBoletoGanador(sorteo: number, combinaciones: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let address = '/loteria';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones,
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let boletoGanador = data;
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
    let address = '/loteria';
    let endpoint = '/cache/ultimoResultado';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, { headers: headers }).subscribe(
        (data: any) => {
          let response;
          let loteriaNacional = data;
          localStorage.setItem(
            'loteriaNacionalUltimoResultado',
            JSON.stringify(loteriaNacional)
          );

          response = { tipo: 'loteriaNacional', data: loteriaNacional };
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  obtenerBoletin(sorteo: string) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    return new Promise((resolve, reject) => {
      let boletinAddress = `${sourceBoletines}T1${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }
}
