import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  total: any = 0;
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  ticketsPozo: any = {};
  ticketsCarrito: any = [];
  reservaId: any = 0;

  localSource = "http://localhost:5480";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";
  
  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

  constructor(private cart: ShoppingCartService, private http: HttpClient) {}

  async removeFromCart(ticket, tipoLoteria) {
    let carrito = await this.getCarrito();
    let deletedIndex = carrito.findIndex(
      (x) =>
        x.identificador === ticket.identificador && x.tipoLoteria == tipoLoteria
    );
    carrito.splice(deletedIndex, 1);
    this.ticketsCarrito = carrito;
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(carrito));
  }

  getReservaId() {
    let reservaId = JSON.parse(localStorage.getItem("reservaId"));
    if (reservaId && reservaId != "") {
      return reservaId;
    } else {
      return 0;
    }
  }

  setReservaId(id) {
    localStorage.setItem("reservaId", JSON.stringify(id));
  }
  async getCount() {
    let carrito = await this.getCarrito();
    let count = 0;
    if (carrito && carrito.length) {
      carrito.forEach((item) => {
        if (item.tipoLoteria == 1) {
          count += item.ticket.seleccionados.length;
        } else {
          count += 1;
        }
      });
    }
    return count;
  }

  async setCarrito(ticket, tipoLoteria) {
    let carrito: any = this.getCarritoLocal();
    if (!carrito) carrito = [];
    ticket["identificador"] = ticket.ticket.identificador;
    ticket["tipoLoteria"] = tipoLoteria;
    let addIndex = carrito.findIndex(
      (x) => x.identificador === ticket.identificador
    );
    if (tipoLoteria == 1 && addIndex != -1) {
      carrito[addIndex] = ticket;
    } else {
      carrito.push(ticket);
    }
    this.ticketsCarrito = carrito;
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(carrito));
  }

  actualizarCarrito() {
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      //let endpoint = "/inquiry";
      let endpoint = "/cart";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        loteria: this.getLoteriaLocal(),
        lotto: this.getLottoLocal(),
        pozo: this.getPozoLocal(),
        carrito: this.getCarritoLocal(),
        total: this.getTotal(),
        reservaId: this.getReservaId(),
        user,
      };
      endpoint = `${endpoint}/actualizarCarrito`;
      var address = this.mySource;
      address = address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve("Done");
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  async setCarritoLoteria(tickets) {
    return new Promise<any>(async (resolve, reject) => {
      localStorage.setItem("seleccionadosLoteria", JSON.stringify(tickets));
      //this.ticketsLoteria = tickets;
      await this.setTotal();
      await this.actualizarCarrito();
      resolve("Done");
    });
  }

  async setCarritoLotto(tickets) {
    return new Promise<any>(async (resolve, reject) => {
      localStorage.setItem("seleccionadosLotto", JSON.stringify(tickets));
      //this.ticketsLotto = tickets;
      await this.setTotal();
      await this.actualizarCarrito();
      resolve("Done");
    });
  }

  async setCarritoPozo(tickets) {
    return new Promise<any>(async (resolve, reject) => {
      localStorage.setItem("seleccionadosPozo", JSON.stringify(tickets));
      //this.ticketsPozo = tickets;
      await this.setTotal();
      await this.actualizarCarrito();
      resolve("Done");
    });
  }

  setCarritoLocal(data) {
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(data));
  }
  setLoteriaLocal(data) {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify(data));
  }
  setLottoLocal(data) {
    localStorage.setItem("seleccionadosLotto", JSON.stringify(data));
  }
  setPozoLocal(data) {
    localStorage.setItem("seleccionadosPozo", JSON.stringify(data));
  }

  getCarritoLocal() {
    let carrito = JSON.parse(localStorage.getItem("seleccionadosCarrito"));
    if (carrito && carrito.length) {
      return carrito;
    } else {
      return [];
    }
  }
  getLoteriaLocal() {
    return JSON.parse(localStorage.getItem("seleccionadosLoteria"));
  }
  getLottoLocal() {
    return JSON.parse(localStorage.getItem("seleccionadosLotto"));
  }
  getPozoLocal() {
    return JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }

  async buscarCarrito() {
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      //let endpoint = "/inquiry";
      let endpoint = "/cart";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        user,
      };
      endpoint = `${endpoint}/getCarrito`;
      var address = this.mySource;
      address = address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        async (data: any) => {
          this.setCarritoLocal(data.carrito);
          this.setLoteriaLocal(data.loteria);
          this.setLottoLocal(data.lotto);
          this.setPozoLocal(data.pozo);
          this.setReservaId(data.reservaId);
          await this.setTotal();
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }


  async validarCarrito() {
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      //let endpoint = "/inquiry";
      let endpoint = "/cart";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;
      let token = JSON.parse(localStorage.getItem("userData")).lotteryToken;
      let reservaId = JSON.parse(localStorage.getItem("reservaId"));

      let body = {
        user,
        token,
        reservaId
      };
      endpoint = `${endpoint}/validar`;
      var address = this.mySource;
      address = address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        async (data: any) => {
          if(!data.status){
            reject(new Error(data.message));
          }
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  async getCarrito() {
    return new Promise<any>(async (resolve, reject) => {
      let carritoDB = await this.buscarCarrito();
      resolve(carritoDB.carrito);
      //resolve(JSON.parse(localStorage.getItem("seleccionadosCarrito")));
    });
  }
  async getCarritoLoteria() {
    return new Promise<any>(async (resolve, reject) => {
      let carritoDB = await this.buscarCarrito();
      resolve(carritoDB.loteria);
      //resolve(JSON.parse(localStorage.getItem("seleccionadosLoteria")));
    });
  }
  async getCarritoLotto() {
    return new Promise<any>(async (resolve, reject) => {
      let carritoDB = await this.buscarCarrito();
      resolve(carritoDB.lotto);
      //resolve(JSON.parse(localStorage.getItem("seleccionadosLotto")));
    });
  }
  async getCarritoPozo() {
    return new Promise<any>(async (resolve, reject) => {
      let carritoDB = await this.buscarCarrito();
      resolve(carritoDB.pozo);
      //resolve(JSON.parse(localStorage.getItem("seleccionadosPozo")));
    });
  }
  async borrarCarrito() {
    this.ticketsCarrito = [];
    this.ticketsLoteria = {};
    this.ticketsLotto = {};
    this.ticketsPozo = {};
    this.reservaId = 0;
    this.total = 0;
    localStorage.removeItem("seleccionadosLoteria");
    localStorage.removeItem("seleccionadosLotto");
    localStorage.removeItem("seleccionadosPozo");
    localStorage.removeItem("seleccionadosCarrito");
    localStorage.removeItem("reservaId");
    localStorage.removeItem("total");
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      //let endpoint = "/inquiry";
      let endpoint = "/cart";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        user,
      };
      endpoint = `${endpoint}/borrarCarrito`;
      var address = this.mySource;
      address = address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve("Done");
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  async setTotal() {
    return new Promise<any>(async (resolve, reject) => {
      //await this.buscarCarrito();
      let loteriaAux = this.getLoteriaLocal();
      let lottoAux = this.getLottoLocal();
      let pozoAux = this.getPozoLocal();
      let loteria = 0;
      for (let id in loteriaAux) {
        loteria += parseFloat(loteriaAux[id].subtotal);
      }
      let lotto = 0;
      for (let id in lottoAux) {
        lotto += parseFloat(lottoAux[id].subtotal);
      }
      let pozo = 0;
      for (let id in pozoAux) {
        pozo += parseFloat(pozoAux[id].subtotal);
      }
      let aux = loteria + lotto + pozo;
      this.total = aux;
      localStorage.setItem("total", JSON.stringify(aux));
      //localStorage.setItem("total", JSON.stringify(total));
      resolve("Done");
    });
  }
  getTotal() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem("total"));
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
}
