import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  today = new Date();
  mySource = environment.source;

  constructor(private http: HttpClient) {}

  async recuperarSorteosJugados() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/cache';
    var address = '/pozo';
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
      console.log(minDate.getTime(), fechaSorteo.getTime());
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
    let address = '/pozo';
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

  recuperarBoletoGanadorPorPlancha(
    boletoInicial: any,
    boletoFinal: any,
    sorteo: any
  ) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/pozo';

    let endpoint = '/plancha';

    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      boletoInicial,
      boletoFinal,
    };
    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any) => {
          let boletoGanador = data;
          resolve(boletoGanador);
        });
    });
  }

  getUltimoResultado() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '/cache/ultimoResultado';
    let address = '/pozo';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, { headers: headers }).subscribe(
        (data: any) => {
          let response;
          let pozoMillonario = data;
          localStorage.setItem(
            'pozoMillonarioUltimoResultado',
            JSON.stringify(pozoMillonario)
          );
          response = { tipo: 'pozoMillonario', data: pozoMillonario };
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
      let boletinAddress = `${sourceBoletines}T5${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }

  obtenerMascota(mascota: any) {
    let mascotaPath;
    console.log(mascota);
    switch (mascota) {
      case '04':
        mascotaPath = 'assets/mascotas/Delfin.png';
        break;
      case '02':
        mascotaPath = 'assets/mascotas/Perro.png';
        break;
      case '08':
        mascotaPath = 'assets/mascotas/Llama.png';
        break;
      case '09':
        mascotaPath = 'assets/mascotas/Papagayo.png';
        break;
      case '01':
        mascotaPath = 'assets/mascotas/Conejo.png';
        break;
      case '10':
        mascotaPath = 'assets/mascotas/Mono.png';
        break;
      case '03':
        mascotaPath = 'assets/mascotas/Galapago.png';
        break;
      case '05':
        mascotaPath = 'assets/mascotas/Foca.png';
        break;
      case '06':
        mascotaPath = 'assets/mascotas/Condor.png';
        break;
      case '07':
        mascotaPath = 'assets/mascotas/Iguana.png';
        break;
      default:
        break;
    }
    return mascotaPath;
  }
}
