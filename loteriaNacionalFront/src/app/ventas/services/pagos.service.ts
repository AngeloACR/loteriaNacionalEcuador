import { Injectable } from '@angular/core';
import { CarritoService } from './carrito.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  mySource = environment.source
  constructor(private cart: CarritoService, private http: HttpClient) {}

  getAuthData() {
    let data = JSON.parse(localStorage.getItem('userData')!);
    let lotteryToken = data.lotteryToken;
    let user = data.playerDocument;
    let personalId = data.personaId;
    let accountId = data.accountId;
    if (data.user_ == 'italtronicprep') user = data.user_;
    let response = {
      lotteryToken,
      user,
      personalId,
      accountId,
    };
    return response;
  }

  reservarSaldo() {}

  liberarSaldo() {}

  recargarSaldo() {}

  hasBalance(subtotal: any, token: any) {
    let cartTotal = parseFloat(this.cart.getTotal());
    let testAmount = parseFloat(subtotal) + cartTotal;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/wallet';
    let endpoint = '';
    let body = {
      token,
    };
    endpoint = `${endpoint}/getBalance`;

    address = this.mySource + address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let balance = parseFloat(data.balance);
          let hasBalance = balance >= testAmount;
          resolve(hasBalance);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  getCompra(ticketId: any, accountId: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/ventas';
    let endpoint = '';
    let body = {
      ticketId,
      accountId,
    };
    endpoint = `${endpoint}/getCompra`;

    address = this.mySource + address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          if (!data.status) {
            reject(new Error('No se pudo encontrar la compra solicitada'));
          }
          resolve(data.values);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  getGanador(ticketId: any) {
    ticketId = ticketId.toString();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/ganadores';
    let endpoint = '';
    let body = {
      ticketId,
    };
    endpoint = `${endpoint}/getGanador`;

    address = this.mySource + address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  
  getCodigosPromocionales(ventaId: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "/codigosPromocionales";
    let endpoint = "";
    let body = {
      ventaId,
    };
    endpoint = `${endpoint}/getCodes`;

    address = this.mySource + address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  async confirmarCompra(token: any, reservaId: any): Promise<any> {
    let loteria = await this.cart.getCarritoLoteria();
    let lotto = await this.cart.getCarritoLotto();
    let pozo = await this.cart.getCarritoPozo();
    let millonaria = await this.cart.getCarritoMillonaria();
    let total = this.cart.getTotal();
    let totalConDesc = this.cart.getTotalConDesc();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/ventas';
    let endpoint = '';
    let authData = this.getAuthData();
    let body = {
      loteria,
      lotto,
      pozo,
      millonaria,
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      personaId: authData.personalId,
      accountId: authData.accountId,
      amount: total,
      amountConDesc: totalConDesc,
      hasDescuento: !(total == totalConDesc),
      token,
      reservaId,
    };
    endpoint = `${endpoint}/comprarBoletos`;
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          //reject(new Error(error.error.message));
          reject(
            new Error(
              'Ha ocurrido un error procesando la compra. Por favor, intente de nuevo.'
            )
          );
        }
      );
    });
  }
  cancelarCompra() {}
  finalizarCompra() {
    parent.postMessage("getBalance","*");
    console.log("Finalizando compra")
    this.cart.borrarCarrito();
  }
  getTotal() {
    let total = JSON.parse(localStorage.getItem('total')!);
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
}
