import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  total: any = 0;
  constructor() {}

  removeFromCart(ticket, tipoLoteria) {
    let carrito = this.getCarrito();
    let deletedIndex = carrito.findIndex(
      (x) =>
        x.identificador === ticket.identificador && x.tipoLoteria == tipoLoteria
    );
    carrito.splice(deletedIndex, 1);
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(carrito));
  }

  getReservaId() {
    if (
      JSON.parse(localStorage.getItem("reservaId")) &&
      JSON.parse(localStorage.getItem("reservaId")) != ""
    ) {
      return JSON.parse(localStorage.getItem("reservaId"));
    } else {
      return 0;
    }
  }

  setReservaId(id) {
    localStorage.setItem("reservaId", JSON.stringify(id));
  }
  getCount() {
    let carrito = this.getCarrito();
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

  setCarrito(ticket, tipoLoteria) {
    let carrito: any = this.getCarrito();
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
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(carrito));
  }

  async setCarritoLoteria(tickets) {
    return new Promise<any>((resolve, reject) => {
      localStorage.setItem("seleccionadosLoteria", JSON.stringify(tickets));
      this.setTotal();
      resolve("Done");
    });
  }

  async setCarritoLotto(tickets) {
    return new Promise<any>((resolve, reject) => {
      localStorage.setItem("seleccionadosLotto", JSON.stringify(tickets));
      this.setTotal();
      resolve("Done");
    });
  }

  async setCarritoPozo(tickets) {
    return new Promise<any>((resolve, reject) => {
      localStorage.setItem("seleccionadosPozo", JSON.stringify(tickets));
      this.setTotal();
      resolve("Done");
    });
  }

  getCarrito() {
    return JSON.parse(localStorage.getItem("seleccionadosCarrito"));
  }
  async getCarritoLoteria() {
    return new Promise<any>((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem("seleccionadosLoteria")));
    });
  }
  async getCarritoLotto() {
    return new Promise<any>((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem("seleccionadosLotto")));
    });
  }
  async getCarritoPozo() {
    return new Promise<any>((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem("seleccionadosPozo")));
    });
  }
  borrarCarrito() {
    localStorage.removeItem("seleccionadosLoteria");
    localStorage.removeItem("seleccionadosLotto");
    localStorage.removeItem("seleccionadosPozo");
    localStorage.removeItem("seleccionadosCarrito");
    localStorage.removeItem("reservaId");
    localStorage.removeItem("total");
  }
  async setTotal() {
    return new Promise<any>(async (resolve, reject) => {
      let loteriaAux = await this.getCarritoLoteria();
      let lottoAux = await this.getCarritoLotto();
      let pozoAux = await this.getCarritoPozo();
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
    return this.total;
    /*     let total = JSON.parse(localStorage.getItem("total"));
    if (total) {
      return total;
    } else {
      return 0;
    } */
  }
}
