import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  today = new Date();
  mySource = environment.source;

  constructor(private http: HttpClient) { }
  async validarSorteo(sorteo: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '';
      let address = '/bingazo';
      endpoint = `${endpoint}/validar`;
      address = this.mySource + address + endpoint;
      let body = {
        sorteo,
      };
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async recuperarSorteosJugados() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/cache';
    var address = '/bingazo';
    endpoint = `${endpoint}/sorteosJugados`;

    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe((data: any) => {
        let sorteosJugados = data.values;

        sorteosJugados.sort(this.ordenaSorteos);
        sorteosJugados = this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
        resolve(sorteosJugados);
      });
    });
  }
  limpiaSorteosDeMasDe3Meses(sorteos: any) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter((sorteo: any) => {
      let fechaSorteo = new Date(
        sorteo.fecha.split(' ')[0].split('/').reverse().join('-')
      );
      return fechaSorteo.getTime() >= minDate.getTime();
    });
  }
  ordenaSorteos(a: any, b: any) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo: any, combinaciones: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let address = '/bingazo';
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
          resolve(boletoGanador);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }


  getUltimoResultado() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '/cache/ultimoResultado';
    let address = '/bingazo';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, { headers: headers }).subscribe(
        (data: any) => {
          let response;
          let bingazo = data;
          localStorage.setItem(
            'bingazoUltimoResultado',
            JSON.stringify(bingazo)
          );
          response = { tipo: 'bingazo', data: bingazo };
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  obtenerBoletin(sorteo: any) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    return new Promise((resolve, reject) => {
      let boletinAddress = `${sourceBoletines}T12${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }


  async getData() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = 'https://ventas-api.loteria.com.ec/uploads/bingazoFiles';
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe(
        (data: any) => {
          let response;
          let bingazo = data;
          localStorage.setItem(
            'bingazoUltimoResultado',
            bingazo.ultimosResultados[0].ruta
          );
          localStorage.setItem(
            'bingazoBoletines',
            JSON.stringify(bingazo.boletines)
          );
          localStorage.setItem('bingazoSorteos', JSON.stringify(bingazo.sorteos));
          response = { tipo: 'bingazo', data: bingazo };
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }


}
