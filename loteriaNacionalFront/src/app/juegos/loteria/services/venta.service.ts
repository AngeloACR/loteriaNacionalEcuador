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
      let address = '/loteria';
      let endpoint = `/cache/sorteosDisponibles`;
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
      let address = '/loteria';

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
}
