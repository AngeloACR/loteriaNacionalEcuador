import { Injectable } from '@angular/core';
import {
  animales,
  ticketsAnimales,
  sorteo,
  ticketsLotto,
  ticketsNacional,
  ticketsMillonaria,
} from '../interfaces/venta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class VentasService {
  mySource = environment.source;

  sorteo?: Array<sorteo>;
  ticketsNacional?: ticketsNacional[];
  ticketsLotto?: ticketsLotto[];
  ticketsAnimales?: ticketsAnimales[];
  animales?: animales[];
  animalesTabs?: animales[];
  constructor(private http: HttpClient) {}

  formatNumber(number: any) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(number);
  }

  getAuthData() {
    let data = JSON.parse(localStorage.getItem('userData')!);
    let response = {
      user: '',
      lotteryToken: '',
    };
    if (data) {
      let lotteryToken = data.lotteryToken;
      let user = data.playerDocument;
      //if (data.user_ == 'italtronicprep') user = data.user_;
      response = {
        lotteryToken,
        user,
      };
    }
    return response;
  }

  obtenerDescuentos() {
    return;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/ventas';
    let endpoint = '/getDescuentos';
    let authData = this.getAuthData();

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
            let descuentos: Array<any> = data;
            resolve(descuentos);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }

  obtenerImagenBoleto(tipoLoteria: any, sorteo: any) {
    let sourceBoletos = `${this.mySource}/uploads/boletos/`;
    return new Promise<string>((resolve, reject) => {
      let boletoAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.png`;
      resolve(boletoAddress);
    });
  }

  authUser(token: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/auth';

    let endpoint = '/';
    let body = {
      token,
    };

    address = this.mySource + address + endpoint;
    return new Promise<Array<any>>((resolve, reject) => {
      let data = JSON.parse(localStorage.getItem('userData')!);
      if (true) {
        // if (!data || data.resultCode) {
        this.http.post(address, body, { headers: headers }).subscribe(
          (data: any) => {
            localStorage.setItem('userData', JSON.stringify(data));
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
      } else {
        resolve(data);
      }
    });
  }

  getReservaId() {
    if (
      JSON.parse(localStorage.getItem('reservaId')!) &&
      JSON.parse(localStorage.getItem('reservaId')!) != ''
    ) {
      return JSON.parse(localStorage.getItem('reservaId')!);
    } else {
      return 0;
    }
  }

  setReservaId(id: any) {
    localStorage.setItem('reservaId', JSON.stringify(id));
  }

  reservarBoletos(
    token: string,
    boleto: any,
    tipoLoteria: any,
    reservaId: any
  ) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/reservas';
    let endpoint = '/reservarBoletos';

    address = this.mySource + address + endpoint;
    let authData = this.getAuthData();
    let body: any = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.ticket.combinacion,
            fracciones: boleto.fracciones,
            sorteo: boleto.sorteo,
          },
        ];
        body['loteria'] = aux;
        break;
      case 2:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo,
          },
        ];
        body['lotto'] = aux;
        break;

      case 5:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo,
          },
        ];
        body['pozo'] = aux;
        break;
      case 17:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo,
          },
        ];
        body['pozoRevancha'] = aux;
        break;
      case 14:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            combinacion2: boleto.ticket.combinacion2,
            fracciones: boleto.fracciones,
            sorteo: boleto.sorteo,
          },
        ];
        body['millonaria'] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  reservarRevancha(pozo: any, revancha: any, reservaId: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/reservas';
    let endpoint = '/reservarBoletos';

    address = this.mySource + address + endpoint;
    let authData = this.getAuthData();
    let body: any = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let auxPozo = [
      {
        combinacion: pozo.ticket.combinacion1,
        sorteo: pozo.sorteo,
      },
    ];
    body['pozo'] = auxPozo;
    let auxRevancha = [
      {
        combinacion: revancha.ticket.combinacion1,
        sorteo: revancha.sorteo,
      },
    ];
    body['pozoRevancha'] = auxRevancha;

    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  eliminarBoletosDeReserva(
    token: any,
    boleto: any,
    sorteo: any,
    fracciones: any,
    tipoLoteria: any,
    reservaId: any
  ) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/reservas';
    let endpoint = '/eliminarBoletosDeReserva';

    address = this.mySource + address + endpoint;

    let authData = this.getAuthData();
    let body: any = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.combinacion,
            fracciones,
            sorteo: sorteo,
          },
        ];
        body['loteria'] = aux;
        break;
      case 2:
        aux = [
          {
            combinacion: boleto.combinacion1,
            sorteo: sorteo,
          },
        ];
        body['lotto'] = aux;
        break;

      case 5:
        aux = [
          {
            combinacion: boleto.combinacion1,
            sorteo: sorteo,
          },
        ];
        body['pozo'] = aux;
        break;
      case 17:
        aux = [
          {
            combinacion: boleto.combinacion1,
            sorteo: sorteo,
          },
        ];
        body['pozoRevancha'] = aux;
        break;
      case 14:
        aux = [
          {
            combinacion: boleto.combinacion1,
            combinacion2: boleto.combinacion2,
            fracciones,
            sorteo: sorteo,
          },
        ];
        body['millonaria'] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  eliminarTodosLosBoletosDeReserva(
    token: any,
    boletosLoteria: any,
    boletosLotto: any,
    boletosPozo: any,
    boletosPozoRevancha: any,
    boletosMillonaria: any,
    reservaId: any
  ) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/reservas';
    let endpoint = '/eliminarBoletosDeReserva';

    address = this.mySource + address + endpoint;

    let authData = this.getAuthData();
    let body: any = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let auxLoteria: any = [];
    let auxLotto: any = [];
    let auxPozo: any = [];
    let auxPozoRevancha: any = [];
    let auxMillonaria: any = [];
    boletosLoteria.forEach((boleto: any) => {
      auxLoteria.push({
        combinacion: boleto.ticket.combinacion,
        fracciones: boleto.ticket.seleccionados,
        sorteo: boleto.sorteo,
      });
      body['loteria'] = auxLoteria;
    });
    boletosLotto.forEach((boleto: any) => {
      auxLotto.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body['lotto'] = auxLotto;
    });
    boletosPozo.forEach((boleto: any) => {
      auxPozo.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body['pozo'] = auxPozo;
    });
    boletosPozoRevancha.forEach((boleto: any) => {
      auxPozoRevancha.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body['pozoRevancha'] = auxPozoRevancha;
    });
    boletosMillonaria.forEach((boleto: any) => {
      auxMillonaria.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body['millonaria'] = auxMillonaria;
    });

    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
}
