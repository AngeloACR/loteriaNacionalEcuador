import { Injectable } from '@angular/core';
import { sorteo } from '../interfaces/sorteo';
import { ticketsVenta } from '../interfaces/ticket-venta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  mySource = environment.source

  animales: any;
  animalesTabs: any;

  constructor(private http: HttpClient) {
    this.obtenerAnimalesSelecionados();
    this.obtenerAnimalesTabs();
  }
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

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Camaron.png',
        identificador: '01',
        nombre: 'Camarón',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Cangrejo.png',
        identificador: '13',
        nombre: 'Cangrejo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Ballena.png',
        identificador: '10',
        nombre: 'Ballena',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Condor.png',
        identificador: '14',
        nombre: 'Cóndor',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Conejo.png',
        identificador: '06',
        nombre: 'Conejo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Delfin.png',
        identificador: '02',
        nombre: 'Delfín',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Foca.png',
        identificador: '12',
        nombre: 'Foca',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Galapago.png',
        identificador: '08',
        nombre: 'Galápago',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Iguana.png',
        identificador: '15',
        nombre: 'Iguana',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Llama.png',
        identificador: '04',
        nombre: 'Llama',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Mono.png',
        identificador: '07',
        nombre: 'Mono',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Oso.png',
        identificador: '11',
        nombre: 'Oso',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Papagayo.png',
        identificador: '05',
        nombre: 'Papagayo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Perro.png',
        identificador: '03',
        nombre: 'Perro',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tucan.png',
        identificador: '09',
        nombre: 'Tucán',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Caballo.png',
        identificador: '16',
        nombre: 'Caballo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Rana.png',
        identificador: '17',
        nombre: 'Rana',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tiburon.png',
        identificador: '18',
        nombre: 'Tiburón',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Caracol.png',
        identificador: '19',
        nombre: 'Caracol',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Oveja.png',
        identificador: '20',
        nombre: 'Oveja',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Gallo.png',
        identificador: '21',
        nombre: 'Gallo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Abeja.png',
        identificador: '22',
        nombre: 'Abeja',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Mariposa.png',
        identificador: '23',
        nombre: 'Mariposa',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Pez.png',
        identificador: '24',
        nombre: 'Pez',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Pinguino.png',
        identificador: '25',
        nombre: 'Pingüino',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png',
        identificador: '26',
        nombre: 'Cocodrilo',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Vaca.png',
        identificador: '27',
        nombre: 'Vaca',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Chanchito.png',
        identificador: '28',
        nombre: 'Chanchito',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tigre.png',
        identificador: '29',
        nombre: 'Tigre',
        status: false,
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Gato.png',
        identificador: '30',
        nombre: 'Gato',
        status: false,
      },
    ];

    localStorage.setItem(
      'animalesSeleccionados',
      JSON.stringify(this.animales)
    );
  }
  obtenerAnimalesTabs() {
    this.animalesTabs = [];

    localStorage.setItem('animalesTabs', JSON.stringify(this.animalesTabs));
  }

  obtenerCaracteristicasDeMascota(mascota: any) {
    let animales = [
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Camaron.png',
        identificador: '01',
        nombre: 'Camarón',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Cangrejo.png',
        identificador: '13',
        nombre: 'Cangrejo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Ballena.png',
        identificador: '10',
        nombre: 'Ballena',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Condor.png',
        identificador: '14',
        nombre: 'Cóndor',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Conejo.png',
        identificador: '06',
        nombre: 'Conejo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Delfin.png',
        identificador: '02',
        nombre: 'Delfín',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Foca.png',
        identificador: '12',
        nombre: 'Foca',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Galapago.png',
        identificador: '08',
        nombre: 'Galápago',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Iguana.png',
        identificador: '15',
        nombre: 'Iguana',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Llama.png',
        identificador: '04',
        nombre: 'Llama',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Mono.png',
        identificador: '07',
        nombre: 'Mono',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Oso.png',
        identificador: '11',
        nombre: 'Oso',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Papagayo.png',
        identificador: '05',
        nombre: 'Papagayo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Perro.png',
        identificador: '03',
        nombre: 'Perro',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tucan.png',
        identificador: '09',
        nombre: 'Tucán',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Caballo.png',
        identificador: '16',
        nombre: 'Caballo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Rana.png',
        identificador: '17',
        nombre: 'Rana',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tiburon.png',
        identificador: '18',
        nombre: 'Tiburón',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Caracol.png',
        identificador: '19',
        nombre: 'Caracol',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Oveja.png',
        identificador: '20',
        nombre: 'Oveja',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Gallo.png',
        identificador: '21',
        nombre: 'Gallo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Abeja.png',
        identificador: '22',
        nombre: 'Abeja',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Mariposa.png',
        identificador: '23',
        nombre: 'Mariposa',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Pez.png',
        identificador: '24',
        nombre: 'Pez',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Pinguino.png',
        identificador: '25',
        nombre: 'Pingüino',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png',
        identificador: '26',
        nombre: 'Cocodrilo',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Vaca.png',
        identificador: '27',
        nombre: 'Vaca',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Chanchito.png',
        identificador: '28',
        nombre: 'Chanchito',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Tigre.png',
        identificador: '29',
        nombre: 'Tigre',
      },
      {
        ruta: 'assets/mascotas/mascotas pozo millonario-Gato.png',
        identificador: '30',
        nombre: 'Gato',
      },
    ];
    let aux = animales.find((x) => x.identificador === mascota);
    return aux;
  }
}
