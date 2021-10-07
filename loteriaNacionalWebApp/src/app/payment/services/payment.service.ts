import { Injectable } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  localSource = "http://localhost:5480";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

  constructor(private cart: ShoppingCartService, private http: HttpClient) {}

  getAuthData() {
    let data = JSON.parse(localStorage.getItem("userData"));
    let lotteryToken = data.lotteryToken;
    let user = data.playerDocument;
    let personalId = data.personalId;
    if(data.user_ == 'italtronicprep') user = data.user_;
    let response = {
      lotteryToken,
      user,
      personalId
    };
    return response;
  }

  reservarSaldo() {}

  liberarSaldo() {}

  recargarSaldo() {}
  hasBalance(subtotal, token) {
    let cartTotal = parseFloat(this.cart.getTotal());
    let testAmount = parseFloat(subtotal)+cartTotal;
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/lottery";
    let body = {
      token
    };
    endpoint = `${endpoint}/getBalance`;
    var address = this.mySource;

    address = address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
    this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let balance = parseFloat(data.balance);
          resolve(balance>=testAmount);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  getCompra(ticketId) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    let body = {
      ticketId
    };
    endpoint = `${endpoint}/getCompra`;
    var address = this.mySource;

    address = address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
    this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data.values);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  getGanador(ticketId) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    let body = {
      ticketId
    };
    endpoint = `${endpoint}/getGanador`;
    var address = this.mySource;

    address = address + endpoint;
    return new Promise<boolean>((resolve, reject) => {
    this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data.values);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  confirmarCompra(token, reservaId): Promise<any> {
    let loteria = this.cart.getCarritoLoteria();
    let lotto = this.cart.getCarritoLotto();
    let pozo = this.cart.getCarritoPozo();
    let total = this.cart.getTotal();
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";

    let endpoint = "/lottery";
    let authData = this.getAuthData();
    let body = {
      loteria,
      lotto,
      pozo,
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      personaId: authData.personalId,
      amount: total,
      token,
      reservaId,
    };
    endpoint = `${endpoint}/comprarBoletos`;
    var address = this.mySource;
    address = address + endpoint;
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
  cancelarCompra() {}
  finalizarCompra() {
    this.cart.borrarCarrito()
  }
  getTotal() {
    let total = JSON.parse(localStorage.getItem("total"));
    if(total){
      return total
    } else{
      return 0
    }
  }
}
