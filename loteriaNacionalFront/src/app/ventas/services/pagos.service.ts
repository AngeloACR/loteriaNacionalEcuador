import { Injectable } from '@angular/core';
import { CarritoService } from './carrito.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  mySource = environment.source;
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

  async hasBalance(subtotal: any, token: any) {
    try {
      let cartTotal = parseFloat(this.cart.getTotal());
      let testAmount = parseFloat(subtotal) + cartTotal;
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/wallet';
      let endpoint = '';
      let body = {
        token,
      };
      endpoint = `${endpoint}/getBalance`;

      address = this.mySource + address + endpoint;
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      let balance = parseFloat(data.balance);
      let hasBalance = balance >= testAmount;
      return hasBalance;
    } catch (error) {
      throw error;
    }
  }

  async getCompra(ticketId: any, accountId: any) {
    try {
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
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      if (!data.status) {
        throw new Error('No se pudo encontrar la compra solicitada');
      }
      return data.values;
    } catch (error) {
      throw error;
    }
  }
  async getGanador(ticketId: any) {
    try {
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
      let data = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCodigosPromocionales(ventaId: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/codigosPromocionales';
      let endpoint = '';
      let body = {
        ventaId,
      };
      endpoint = `${endpoint}/getCodes`;

      address = this.mySource + address + endpoint;
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async confirmarCompra(token: any, reservaId: any): Promise<any> {
    try {
      let loteria = await this.cart.getCarritoLoteria();
      let lotto = await this.cart.getCarritoLotto();
      let pozo = await this.cart.getCarritoPozo();
      let pozoRevancha = await this.cart.getCarritoPozoRevancha();
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
        pozoRevancha,
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
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw new Error(
        'Ha ocurrido un error procesando la compra. Por favor, intente de nuevo.'
      );
      //throw error;
    }
  }
  cancelarCompra() {}
  finalizarCompra() {
    parent.postMessage('getBalance', '*');
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
