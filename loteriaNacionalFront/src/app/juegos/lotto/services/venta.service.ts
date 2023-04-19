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

  constructor(private http: HttpClient) {}
  async obtenerSorteo(authData: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let endpoint = `/cache/sorteosDisponibles`;
      let address = '/lotto';
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
  async getSorteo(sorteo: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let endpoint = `/getSorteo`;
      let address = '/lotto';
      address = this.mySource + address + endpoint;
      let body = {
        sorteo,
      };
      let data = await this.http
        .post(address, body, {
          headers: headers,
        })
        .toPromise();
      return data;
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
      let address = '/lotto';

      address = this.mySource + address + endpoint;
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      let combinacionesDisponibles: Array<ticketsVenta> = data.combinaciones;
      return combinacionesDisponibles;
    } catch (error) {
      throw error;
    }
  }

  obtenerCaracteristicasDeAntojito(antojito: any) {
    let antojitos = [
      {
        ruta: 'assets/antojitos/1.jpg',
        identificador: '01',
        nombre: 'Choclo con queso',
      },
      {
        ruta: 'assets/antojitos/13.jpg',
        identificador: '13',
        nombre: 'Cangrejo criollo',
      },
      {
        ruta: 'assets/antojitos/10.jpg',
        identificador: '10',
        nombre: 'Quimbolitos',
      },
      {
        ruta: 'assets/antojitos/14.jpg',
        identificador: '14',
        nombre: 'Carne en palito',
      },
      {
        ruta: 'assets/antojitos/6.jpg',
        identificador: '06',
        nombre: 'Caldo de bola',
      },
      {
        ruta: 'assets/antojitos/2.jpg',
        identificador: '02',
        nombre: 'Muchín con miel',
      },
      {
        ruta: 'assets/antojitos/12.jpg',
        identificador: '12',
        nombre: 'Higos con queso',
      },
      {
        ruta: 'assets/antojitos/8.jpg',
        identificador: '08',
        nombre: 'Patacones con queso',
      },
      {
        ruta: 'assets/antojitos/15.jpg',
        identificador: '15',
        nombre: 'Hayaca',
      },
      {
        ruta: 'assets/antojitos/4.jpg',
        identificador: '04',
        nombre: 'Pescado frito',
      },
      {
        ruta: 'assets/antojitos/7.jpg',
        identificador: '07',
        nombre: 'Llapingacho',
      },
      {
        ruta: 'assets/antojitos/11.jpg',
        identificador: '11',
        nombre: 'Coco helado',
      },
      {
        ruta: 'assets/antojitos/5.jpg',
        identificador: '05',
        nombre: 'Cuy',
      },
      {
        ruta: 'assets/antojitos/3.jpg',
        identificador: '03',
        nombre: 'Humitas',
      },
      {
        ruta: 'assets/antojitos/9.jpg',
        identificador: '09',
        nombre: 'Melcocha',
      },
      {
        ruta: 'assets/antojitos/16.jpg',
        identificador: '16',
        nombre: 'Empanadas de morocho',
      },
    ];
    let aux = antojitos.find(
      (x) => parseInt(x.identificador) === parseInt(antojito)
    );
    return aux;
  }
}
