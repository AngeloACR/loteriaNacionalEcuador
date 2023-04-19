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
  async obtenerSorteo(authData: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let endpoint = `/cache/sorteosDisponibles`;
      let address = '/pozoRevancha';

      address = this.mySource + address + endpoint;
      let data: any = await this.http
        .get(address, {
          params: {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
          },
          headers: headers,
        })
        .toPromise();
      let sorteosDisponibles: Array<sorteo> = data;
      sorteosDisponibles.sort(this.ordenaSorteos);
      return sorteosDisponibles;
    } catch (error) {
      throw error;
    }
  }

  ordenaSorteos(a: any, b: any) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return a1 - b1;
  }

  async obtenerTickets(
    sorteo: any,
    combinacion: any,
    combinacionFigura: any,
    tipoSeleccion: any,
    authData: any
  ) {
    try {
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
      let data: any = await this.http.post(address, body, { headers: headers });
      let combinacionesDisponibles: Array<ticketsVenta> = data.combinaciones;
      return combinacionesDisponibles;
    } catch (error) {
      throw error;
    }
  }
  obtenerMascota(mascota: any) {
    let mascotaPath;
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

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: 'assets/mascotas/Condor.png',
        identificador: '06',
        nombre: 'Cóndor',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Iguana.png',
        identificador: '07',
        nombre: 'Iguana',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Conejo.png',
        identificador: '01',
        nombre: 'Conejo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Delfin.png',
        identificador: '04',
        nombre: 'Delfín',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Galapago.png',
        identificador: '03',
        nombre: 'Galápago',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Llama.png',
        identificador: '08',
        nombre: 'Llama',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Mono.png',
        identificador: '10',
        nombre: 'Mono',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Papagayo.png',
        identificador: '09',
        nombre: 'Papagayo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Perro.png',
        identificador: '02',
        nombre: 'Perro',
        status: false,
      },
      {
        ruta: 'assets/mascotas/Foca.png',
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
        ruta: 'assets/mascotas/Condor.png',
        identificador: '06',
        nombre: 'Cóndor',
      },
      {
        ruta: 'assets/mascotas/Iguana.png',
        identificador: '07',
        nombre: 'Iguana',
      },
      {
        ruta: 'assets/mascotas/Conejo.png',
        identificador: '01',
        nombre: 'Conejo',
      },
      {
        ruta: 'assets/mascotas/Delfin.png',
        identificador: '04',
        nombre: 'Delfín',
      },
      {
        ruta: 'assets/mascotas/Galapago.png',
        identificador: '03',
        nombre: 'Galápago',
      },
      {
        ruta: 'assets/mascotas/Llama.png',
        identificador: '08',
        nombre: 'Llama',
      },
      {
        ruta: 'assets/mascotas/Mono.png',
        identificador: '10',
        nombre: 'Mono',
      },
      {
        ruta: 'assets/mascotas/Papagayo.png',
        identificador: '09',
        nombre: 'Papagayo',
      },
      {
        ruta: 'assets/mascotas/Perro.png',
        identificador: '02',
        nombre: 'Perro',
      },
      {
        ruta: 'assets/mascotas/Foca.png',
        identificador: '05',
        nombre: 'Foca',
      },
    ];
    let aux = animales.find((x) => x.identificador === mascota);
    return aux;
  }
}
