import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
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
    return carrito.length;
  }

  setCarrito(ticket, tipoLoteria) {
    let carrito: any = this.getCarrito();
    if (!carrito) carrito = [];
    ticket["identificador"] = ticket.ticket.identificador;
    ticket["tipoLoteria"] = tipoLoteria;
    console.log(ticket);
    let addIndex = carrito.findIndex(
      (x) =>
        x.identificador === ticket.identificador
    );
    if (tipoLoteria == 1 && addIndex != -1) {
      carrito[addIndex] = ticket;
    } else {
      carrito.push(ticket);
    }
    localStorage.setItem("seleccionadosCarrito", JSON.stringify(carrito));
  }

  setCarritoLoteria(tickets) {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify(tickets));
  }

  setCarritoLotto(tickets) {
    localStorage.setItem("seleccionadosLotto", JSON.stringify(tickets));
  }

  setCarritoPozo(tickets) {
    localStorage.setItem("seleccionadosPozo", JSON.stringify(tickets));
  }

  getCarrito() {
    return JSON.parse(localStorage.getItem("seleccionadosCarrito"));
  }
  getCarritoLoteria() {
    return JSON.parse(localStorage.getItem("seleccionadosLoteria"));
  }
  getCarritoLotto() {
    return JSON.parse(localStorage.getItem("seleccionadosLotto"));
  }
  getCarritoPozo() {
    return JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }
  borrarCarrito() {
    localStorage.removeItem("seleccionadosLoteria");
    localStorage.removeItem("seleccionadosLotto");
    localStorage.removeItem("seleccionadosPozo");
    localStorage.removeItem("seleccionadosCarrito");
    localStorage.removeItem("reservaId");
    localStorage.removeItem("total");
  }
  setTotal() {
    let loteriaAux = this.getCarritoLoteria();
    let lottoAux = this.getCarritoLotto();
    let pozoAux = this.getCarritoPozo();
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
    localStorage.setItem("total", JSON.stringify(aux));
    //localStorage.setItem("total", JSON.stringify(total));
  }
  getTotal() {
    let total = JSON.parse(localStorage.getItem("total"));
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
}
