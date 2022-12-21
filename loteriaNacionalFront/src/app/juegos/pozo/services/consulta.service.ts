import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  today = new Date();
  mySource = environment.source

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
        resolve(sorteosJugados);
      });
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

  obtenerMascota(mascota: string) {
    let mascotaPath;
    switch (mascota) {
      case '01':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Camaron.png';
        break;
      case '02':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Delfin.png';
        break;
      case '03':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Perro.png';
        break;
      case '04':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Llama.png';
        break;
      case '05':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Papagayo.png';
        break;
      case '06':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Conejo.png';
        break;
      case '07':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mono.png';
        break;
      case '08':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Galapago.png';
        break;
      case '09':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tucan.png';
        break;
      case '10':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Ballena.png';
        break;
      case '11':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oso.png';
        break;
      case '12':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Foca.png';
        break;
      case '13':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cangrejo.png';
        break;
      case '14':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Condor.png';
        break;
      case '15':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Iguana.png';
        break;
      case '16':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caballo.png';
        break;
      case '17':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Rana.png';
        break;
      case '18':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tiburon.png';
        break;
      case '19':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caracol.png';
        break;
      case '20':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oveja.png';
        break;
      case '21':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gallo.png';
        break;
      case '22':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Abeja.png';
        break;
      case '23':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mariposa.png';
        break;
      case '24':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pez.png';
        break;
      case '25':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pinguino.png';
        break;
      case '26':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png';
        break;
      case '27':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Vaca.png';
        break;
      case '28':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Chanchito.png';
        break;
      case '29':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tigre.png';
        break;
      case '30':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gato.png';
        break;

      default:
        break;
    }
    return mascotaPath;
  }
}
