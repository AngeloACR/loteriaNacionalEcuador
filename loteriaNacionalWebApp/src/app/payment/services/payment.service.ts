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
    let user = data.user_;
    let response = {
      lotteryToken,
      user,
    };
    return response;
  }

  reservarSaldo() {}

  liberarSaldo() {}

  recargarSaldo() {}
  hasBalance(subtotal, token) {
    console.log("Asking for balance")
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
    console.log("Balance http")
    this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          console.log(data);
          let balance = parseFloat(data.balance);
          console.log(balance)
          console.log(testAmount)
          resolve(balance>=testAmount);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  getCompra(ticketId) {
    console.log("Asking for balance")
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
    console.log("Balance http")
    this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data.values);
        },
        (error: any) => {
          reject(error);
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
      amount: total,
      token,
      reservaId,
    };
    endpoint = `${endpoint}/comprarBoletos`;
    console.log(body);
    var address = this.mySource;

    address = address + endpoint;
    console.log(body);
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          console.log(response);
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
  cancelarCompra() {}
  finalizarCompra() {
    this.cart.borrarCarrito()
  }
}
