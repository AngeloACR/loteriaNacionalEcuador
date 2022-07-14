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

  constructor(private http: HttpClient) {}

  obtenerSorteo(authData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/loteria';
    let endpoint = `/cache/sorteosDisponibles`;
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
    let address = '/loteria';

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
}
