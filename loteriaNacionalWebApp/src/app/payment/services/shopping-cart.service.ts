import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  total: any = 0;
  totalConDesc: any = 0;
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  ticketsPozo: any = {};
  ticketsMillonaria: any = {};
  ticketsCarrito: any = [];
  reservaId: any = 0;

  localSource = "http://localhost:100";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

  constructor(private cart: ShoppingCartService, private http: HttpClient) {}

  async eliminarDescuento(element, tipoLoteria) {
    let sorteo = element.sorteo;
    switch (tipoLoteria) {
      case 1:
        let loteria = this.getLoteriaLocal();
        for (let id in loteria) {
          if (loteria[id].sorteo.sorteo == sorteo) {
            loteria[id].tieneDescuento = false;
            loteria[id].subtotalConDesc = 0;
          }
        }
        this.setLoteriaLocal(loteria);
        break;
      case 2:
        let lotto = this.getLottoLocal();
        for (let id in lotto) {
          if (lotto[id].sorteo.sorteo == sorteo) {
            lotto[id].tieneDescuento = false;
            lotto[id].subtotalConDesc = 0;
          }
        }
        this.setLottoLocal(lotto);
        break;

      case 5:
        let pozo = this.getPozoLocal();
        for (let id in pozo) {
          if (pozo[id].sorteo.sorteo == sorteo) {
            pozo[id].tieneDescuento = false;
            pozo[id].subtotalConDesc = 0;
          }
        }
        this.setPozoLocal(pozo);
        break;
      case 14:
        let millonaria = this.getMillonariaLocal();
        for (let id in millonaria) {
          if (millonaria[id].sorteo.sorteo == sorteo) {
            millonaria[id].tieneDescuento = false;
            millonaria[id].subtotalConDesc = 0;
          }
        }
        this.setMillonariaLocal(millonaria);
        break;
    }
    await this.actualizarCarrito();
  }

  async calcularDescuento(descuento) {
    return
    let precioConDescuento = descuento.valorConDescuento;
    let sorteo = descuento.sorteo;
    switch (descuento.tipoLoteria) {
      case "1":
        let loteria = this.getLoteriaLocal();
        for (let id in loteria) {
          if (loteria[id].sorteo.sorteo == sorteo) {
            loteria[id].tieneDescuento = true;
            loteria[id].subtotalConDesc =
              loteria[id].ticket.seleccionados.length *
              parseFloat(precioConDescuento);
          }
        }
        this.setLoteriaLocal(loteria);
        break;
      case "2":
        let lotto = this.getLottoLocal();
        for (let id in lotto) {
          if (lotto[id].sorteo.sorteo == sorteo) {
            lotto[id].tieneDescuento = true;
            lotto[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setLottoLocal(lotto);
        break;

      case "5":
        let pozo = this.getPozoLocal();
        for (let id in pozo) {
          if (pozo[id].sorteo.sorteo == sorteo) {
            pozo[id].tieneDescuento = true;
            pozo[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setPozoLocal(pozo);
        break;
      case "14":
        let millonaria = this.getMillonariaLocal();
        for (let id in millonaria) {
          if (millonaria[id].sorteo.sorteo == sorteo) {
            millonaria[id].tieneDescuento = true;
            millonaria[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setMillonariaLocal(millonaria);
        break;
    }
    await this.actualizarCarrito();
  }

  async contarBoletos(sorteo, tipoLoteria) {
    let aux = this.getCarritoLocal();
    let boletos = aux.filter(
      (item) => item.sorteo.sorteo == sorteo && item.tipoLoteria == tipoLoteria
    );
    let conteo;
    switch (tipoLoteria) {
      case 1:
        conteo = boletos.reduce((total, value) => {
          return total + value.ticket.seleccionados.length;
        }, 0);
        break;
      case 14:
        conteo = boletos.reduce((total, value) => {
          return total + value.ticket.seleccionados.length;
        }, 0);
        break;

      default:
        conteo = boletos.length;
        break;
    }
    return conteo;
  }

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
    if ((tipoLoteria == 1 || tipoLoteria == 14) && addIndex != -1) {
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
      let address = "/reservas";
      let endpoint = "/cache";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        loteria: this.getLoteriaLocal(),
        lotto: this.getLottoLocal(),
        pozo: this.getPozoLocal(),
        millonaria: this.getMillonariaLocal(),
        carrito: this.getCarritoLocal(),
        total: this.getTotal(),
        reservaId: this.getReservaId(),
        user,
      };
      endpoint = `${endpoint}/actualizarCarrito`;
      address = this.mySource + address + endpoint;
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
  async setCarritoMillonaria(tickets) {
    return new Promise<any>(async (resolve, reject) => {
      localStorage.setItem("seleccionadosMillonaria", JSON.stringify(tickets));
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
  setMillonariaLocal(data) {
    localStorage.setItem("seleccionadosMillonaria", JSON.stringify(data));
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
  getMillonariaLocal() {
    return JSON.parse(localStorage.getItem("seleccionadosMillonaria"));
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
      let address = "/reservas";
      let endpoint = "/cache";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        user,
      };
      endpoint = `${endpoint}/getCarrito`;
      address = this.mySource + address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        async (data: any) => {
          let reservaId = this.getReservaId();
          if (data.carrito.length == 0) {
            this.borrarCarrito();
            data.carrito = [];
            data.loteria = {};
            data.lotto = {};
            data.pozo = {};
            data.millonaria = {};
            data.reservaId = 0;
          }
          this.setCarritoLocal(data.carrito);
          this.setLoteriaLocal(data.loteria);
          this.setLottoLocal(data.lotto);
          this.setMillonariaLocal(data.millonaria);
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

  async validarCarrito(reservaId) {
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      let address = "/reservas";
      let endpoint = "/cache";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;
      let token = JSON.parse(localStorage.getItem("userData")).lotteryToken;

      let body = {
        user,
        token,
        reservaId,
      };
      endpoint = `${endpoint}/validar`;
      address = this.mySource + address + endpoint;
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          /*           if (!data.status) {
            reject(new Error(data.message));
          }
 */ resolve(data);
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
  async getCarritoMillonaria() {
    return new Promise<any>(async (resolve, reject) => {
      let carritoDB = await this.buscarCarrito();
      resolve(carritoDB.millonaria);
      //resolve(JSON.parse(localStorage.getItem("seleccionadosPozo")));
    });
  }
  async borrarCarrito() {
    this.ticketsCarrito = [];
    this.ticketsLoteria = {};
    this.ticketsLotto = {};
    this.ticketsPozo = {};
    this.ticketsMillonaria = {};
    this.reservaId = 0;
    this.total = 0;
    localStorage.removeItem("seleccionadosLoteria");
    localStorage.removeItem("seleccionadosLotto");
    localStorage.removeItem("seleccionadosPozo");
    localStorage.removeItem("seleccionadosCarrito");
    localStorage.removeItem("seleccionadosMillonaria");
    localStorage.removeItem("reservaId");
    localStorage.removeItem("total");
    localStorage.removeItem("totalConDesc");
    return new Promise<any>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      let address = "/reservas";
      let endpoint = "/cache";
      let user = JSON.parse(localStorage.getItem("userData")).playerDocument;

      let body = {
        user,
      };
      endpoint = `${endpoint}/borrarCarrito`;
      address = this.mySource + address + endpoint;
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
  async setTotalConDesc() {
    return new Promise<any>(async (resolve, reject) => {
      //await this.buscarCarrito();
      let loteriaAux = this.getLoteriaLocal();
      let lottoAux = this.getLottoLocal();
      let pozoAux = this.getPozoLocal();
      let millonariaAux = this.getMillonariaLocal();
      let loteriaConDesc = 0;
      for (let id in loteriaAux) {
        if (loteriaAux[id].tieneDescuento) {
          loteriaConDesc += parseFloat(loteriaAux[id].subtotalConDesc);
        } else {
          loteriaConDesc += parseFloat(loteriaAux[id].subtotal);
        }
      }
      let lottoConDesc = 0;
      for (let id in lottoAux) {
        if (lottoAux[id].tieneDescuento) {
          lottoConDesc += parseFloat(lottoAux[id].subtotalConDesc);
        } else {
          lottoConDesc += parseFloat(lottoAux[id].subtotal);
        }
      }
      let pozoConDesc = 0;
      for (let id in pozoAux) {
        if (pozoAux[id].tieneDescuento) {
          pozoConDesc += parseFloat(pozoAux[id].subtotalConDesc);
        } else {
          pozoConDesc += parseFloat(pozoAux[id].subtotal);
        }
      }
      let millonariaConDesc = 0;
      for (let id in millonariaAux) {
        if (millonariaAux[id].tieneDescuento) {
          millonariaConDesc += parseFloat(millonariaAux[id].subtotalConDesc);
        } else {
          millonariaConDesc += parseFloat(millonariaAux[id].subtotal);
        }
      }
      let auxConDesc =
        loteriaConDesc + lottoConDesc + pozoConDesc + millonariaConDesc;

      this.totalConDesc = auxConDesc;
      localStorage.setItem("totalConDesc", JSON.stringify(auxConDesc));
      resolve("Done");
    });
  }

  async setTotal() {
    return new Promise<any>(async (resolve, reject) => {
      //await this.buscarCarrito();
      let loteriaAux = this.getLoteriaLocal();
      let lottoAux = this.getLottoLocal();
      let pozoAux = this.getPozoLocal();
      let millonariaAux = this.getMillonariaLocal();
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
      let millonaria = 0;
      for (let id in millonariaAux) {
        millonaria += parseFloat(millonariaAux[id].subtotal);
      }
      let aux = loteria + lotto + pozo + millonaria;

      this.total = aux;
      localStorage.setItem("total", JSON.stringify(aux));
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
  getTotalConDesc() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem("totalConDesc"));
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
}
