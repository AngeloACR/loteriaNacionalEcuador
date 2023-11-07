import { Injectable } from '@angular/core';
import { sorteo } from '../interfaces/sorteo';
import { ticketsVenta } from '../interfaces/ticket-venta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  mySource = environment.source;

  animales: any;
  animalesTabs: any;

  constructor(private http: HttpClient) {}
  obtenerSorteo(authData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = `/cache/sorteosDisponibles`;
    let address = '/pozoRevancha';

    address = this.mySource + address + endpoint;
    return new Promise<Array<sorteo>>((resolve, reject) => {
      this.http
        .get(address, {
          params: {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
          },
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            let sorteosDisponibles: Array<sorteo> = data;
            sorteosDisponibles.sort(this.ordenaSorteos);
            resolve(sorteosDisponibles);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }

  ordenaSorteos(a: any, b: any) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return a1 - b1;
  }

  obtenerTickets(
    sorteo: any,
    combinacion: any,
    combinacionFigura: any,
    tipoSeleccion: any,
    authData: any
  ): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let body = {
      sorteo,
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      combinacion,
      combinacionFigura,
      tipoSeleccion,
    };
    endpoint = `${endpoint}/combinacionesDisponibles`;

    let address = '/pozoRevancha';

    address = this.mySource + address + endpoint;
    return new Promise<Array<ticketsVenta>>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let combinacionesDisponibles: Array<ticketsVenta> =
            data.combinaciones;
          resolve(combinacionesDisponibles);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  obtenerMascota(mascota: any) {
    let mascotaPath;
    switch (mascota) {
      case '04':
        mascotaPath = 'assets/mascotas/Delfin.webp';
        break;
      case '02':
        mascotaPath = 'assets/mascotas/Perro.webp';
        break;
      case '08':
        mascotaPath = 'assets/mascotas/Llama.webp';
        break;
      case '09':
        mascotaPath = 'assets/mascotas/Papagayo.webp';
        break;
      case '01':
        mascotaPath = 'assets/mascotas/Conejo.webp';
        break;
      case '10':
        mascotaPath = 'assets/mascotas/Mono.webp';
        break;
      case '03':
        mascotaPath = 'assets/mascotas/Galapago.webp';
        break;
      case '05':
        mascotaPath = 'assets/mascotas/Foca.webp';
        break;
      case '06':
        mascotaPath = 'assets/mascotas/Condor.webp';
        break;
      case '07':
        mascotaPath = 'assets/mascotas/Iguana.webp';
        break;
      default:
        break;
    }
    return mascotaPath;
  }

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: 'assets/mascotas/Condor.webp',
        identificador: '06',
        nombre: 'Cóndor',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Iguana.webp',
        identificador: '07',
        nombre: 'Iguana',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Conejo.webp',
        identificador: '01',
        nombre: 'Conejo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Delfin.webp',
        identificador: '04',
        nombre: 'Delfín',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Galapago.webp',
        identificador: '03',
        nombre: 'Galápago',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Llama.webp',
        identificador: '08',
        nombre: 'Llama',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Mono.webp',
        identificador: '10',
        nombre: 'Mono',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Papagayo.webp',
        identificador: '09',
        nombre: 'Papagayo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Perro.webp',
        identificador: '02',
        nombre: 'Perro',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Foca.webp',
        identificador: '05',
        nombre: 'Foca',
        status: false,
      },
    ];

    localStorage.setItem(
      'animalesSeleccionados',
      JSON.stringify(this.animales)
    );
  }

  obtenerCaracteristicasDeMascota(mascota: any) {
    let animales = [
      {
        ruta: 'assets/mascotas/Condor.webp',
        identificador: '06',
        nombre: 'Cóndor',
      },
      {
        ruta: 'assets/mascotas/Iguana.webp',
        identificador: '07',
        nombre: 'Iguana',
      },
      {
        ruta: 'assets/mascotas/Conejo.webp',
        identificador: '01',
        nombre: 'Conejo',
      },
      {
        ruta: 'assets/mascotas/Delfin.webp',
        identificador: '04',
        nombre: 'Delfín',
      },
      {
        ruta: 'assets/mascotas/Galapago.webp',
        identificador: '03',
        nombre: 'Galápago',
      },
      {
        ruta: 'assets/mascotas/Llama.webp',
        identificador: '08',
        nombre: 'Llama',
      },
      {
        ruta: 'assets/mascotas/Mono.webp',
        identificador: '10',
        nombre: 'Mono',
      },
      {
        ruta: 'assets/mascotas/Papagayo.webp',
        identificador: '09',
        nombre: 'Papagayo',
      },
      {
        ruta: 'assets/mascotas/Perro.webp',
        identificador: '02',
        nombre: 'Perro',
      },
      {
        ruta: 'assets/mascotas/Foca.webp',
        identificador: '05',
        nombre: 'Foca',
      },
    ];
    let aux = animales.find((x) => x.identificador === mascota);
    return aux;
  }
}
