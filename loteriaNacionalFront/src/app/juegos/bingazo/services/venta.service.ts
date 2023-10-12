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

  frutas: any;

  constructor(private http: HttpClient) {
    this.obtenerFrutasSelecionadas();
  }
  obtenerSorteo(authData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = `/cache/sorteosDisponibles`;
    let address = '/bingazo';

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

    let address = '/bingazo';

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

  obtenerFrutasSelecionadas() {
    this.frutas = [


      { ruta: 'assets/frutas/banano.webp', nombre: 'Banano', identificador: '01', status: false },
      { ruta: 'assets/frutas/pera.webp', nombre: 'Pera', identificador: '02', status: false },
      { ruta: 'assets/frutas/papaya.webp', nombre: 'Papaya', identificador: '03', status: false },
      { ruta: 'assets/frutas/sandia.webp', nombre: 'Sandía', identificador: '04', status: false },
      { ruta: 'assets/frutas/mora.webp', nombre: 'Mora', identificador: '05', status: false },
      { ruta: 'assets/frutas/guayaba.webp', nombre: 'Guayaba', identificador: '06', status: false },
      { ruta: 'assets/frutas/naranja.webp', nombre: 'Naranja', identificador: '07', status: false },
      { ruta: 'assets/frutas/mandarina.webp', nombre: 'Mandarina', identificador: '08', status: false },
      { ruta: 'assets/frutas/melon.webp', nombre: 'Melón', identificador: '09', status: false },
      { ruta: 'assets/frutas/piña.webp', nombre: 'Piña', identificador: '10', status: false },
      { ruta: 'assets/frutas/kiwi.webp', nombre: 'Kiwi', identificador: '11', status: false },
      { ruta: 'assets/frutas/durazno.webp', nombre: 'Durazno', identificador: '12', status: false },
      { ruta: 'assets/frutas/uva.webp', nombre: 'Uva', identificador: '13', status: false },
      { ruta: 'assets/frutas/mango.webp', nombre: 'Mango', identificador: '14', status: false },
      { ruta: 'assets/frutas/coco.webp', nombre: 'Coco', identificador: '15', status: false },
      { ruta: 'assets/frutas/frutilla.webp', nombre: 'Frutilla', identificador: '16', status: false },
      { ruta: 'assets/frutas/guanabana.webp', nombre: 'Guanábana', identificador: '17', status: false },
      { ruta: 'assets/frutas/pitahaya.webp', nombre: 'Pitahaya', identificador: '18', status: false },
      { ruta: 'assets/frutas/manzana.webp', nombre: 'Manzana', identificador: '19', status: false },
      { ruta: 'assets/frutas/limon.webp', nombre: 'Limón', identificador: '20', status: false },
    ];

    localStorage.setItem(
      'frutasSeleccionadas',
      JSON.stringify(this.frutas)
    );
  }

  obtenerCaracteristicasDeFruta(fruta: any) {

    let frutas = [

      { ruta: 'assets/frutas/banano.webp', nombre: 'Banano', identificador: '01' },
      { ruta: 'assets/frutas/pera.webp', nombre: 'Pera', identificador: '02' },
      { ruta: 'assets/frutas/papaya.webp', nombre: 'Papaya', identificador: '03' },
      { ruta: 'assets/frutas/sandia.webp', nombre: 'Sandía', identificador: '04' },
      { ruta: 'assets/frutas/mora.webp', nombre: 'Mora', identificador: '05' },
      { ruta: 'assets/frutas/guayaba.webp', nombre: 'Guayaba', identificador: '06' },
      { ruta: 'assets/frutas/naranja.webp', nombre: 'Naranja', identificador: '07' },
      { ruta: 'assets/frutas/mandarina.webp', nombre: 'Mandarina', identificador: '08' },
      { ruta: 'assets/frutas/melon.webp', nombre: 'Melón', identificador: '09' },
      { ruta: 'assets/frutas/piña.webp', nombre: 'Piña', identificador: '10' },
      { ruta: 'assets/frutas/kiwi.webp', nombre: 'Kiwi', identificador: '11' },
      { ruta: 'assets/frutas/durazno.webp', nombre: 'Durazno', identificador: '12' },
      { ruta: 'assets/frutas/uva.webp', nombre: 'Uva', identificador: '13' },
      { ruta: 'assets/frutas/mango.webp', nombre: 'Mango', identificador: '14' },
      { ruta: 'assets/frutas/coco.webp', nombre: 'Coco', identificador: '15' },
      { ruta: 'assets/frutas/frutilla.webp', nombre: 'Frutilla', identificador: '16' },
      { ruta: 'assets/frutas/guanabana.webp', nombre: 'Guanábana', identificador: '17' },
      { ruta: 'assets/frutas/pitahaya.webp', nombre: 'Pitahaya', identificador: '18' },
      { ruta: 'assets/frutas/manzana.webp', nombre: 'Manzana', identificador: '19' },
      { ruta: 'assets/frutas/limon.webp', nombre: 'Limón', identificador: '20' },
    ];
    let aux = frutas.find((x) => x.identificador === fruta);
    return aux;
  }

}
