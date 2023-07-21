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
    //let endpoint = "/inquiry";
    let endpoint = `/cache/sorteosDisponibles`;
    let address = '/pega3';
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
  getSorteo(sorteo: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = `/getSorteo`;
    let address = '/pega3';
    address = this.mySource + address + endpoint;
    let body = {
      sorteo
    }
    return new Promise<sorteo>((resolve, reject) => {
      this.http
        .post(address, body, {
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            let sorteo: sorteo = data;
            resolve(sorteo);
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
    let address = '/pega3';

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

  obtenerCaracteristicasDeAntojito(antojito: any) {
    let antojitos = [
      {
        ruta: "assets/antojitos/1.jpg",
        identificador: "01",
        nombre: "Choclo con queso",
      },
      {
        ruta: "assets/antojitos/13.jpg",
        identificador: "13",
        nombre: "Cangrejo criollo",
      },
      {
        ruta: "assets/antojitos/10.jpg",
        identificador: "10",
        nombre: "Quimbolitos",
      },
      {
        ruta: "assets/antojitos/14.jpg",
        identificador: "14",
        nombre: "Carne en palito",
      },
      {
        ruta: "assets/antojitos/6.jpg",
        identificador: "06",
        nombre: "Caldo de bola",
      },
      {
        ruta: "assets/antojitos/2.jpg",
        identificador: "02",
        nombre: "Muchín con miel",
      },
      {
        ruta: "assets/antojitos/12.jpg",
        identificador: "12",
        nombre: "Higos con queso",
      },
      {
        ruta: "assets/antojitos/8.jpg",
        identificador: "08",
        nombre: "Patacones con queso",
      },
      {
        ruta: "assets/antojitos/15.jpg",
        identificador: "15",
        nombre: "Hayaca",
      },
      {
        ruta: "assets/antojitos/4.jpg",
        identificador: "04",
        nombre: "Pescado frito",
      },
      {
        ruta: "assets/antojitos/7.jpg",
        identificador: "07",
        nombre: "Llapingacho",
      },
      {
        ruta: "assets/antojitos/11.jpg",
        identificador: "11",
        nombre: "Coco helado",
      },
      {
        ruta: "assets/antojitos/5.jpg",
        identificador: "05",
        nombre: "Cuy",
      },
      {
        ruta: "assets/antojitos/3.jpg",
        identificador: "03",
        nombre: "Humitas",
      },
      {
        ruta: "assets/antojitos/9.jpg",
        identificador: "09",
        nombre: "Melcocha",
      },
      {
        ruta: "assets/antojitos/16.jpg",
        identificador: "16",
        nombre: "Empanadas de morocho",
      },
    ];
    let aux = antojitos.find(
      (x) => parseInt(x.identificador) === parseInt(antojito)
    );
    return aux;
  }
}
