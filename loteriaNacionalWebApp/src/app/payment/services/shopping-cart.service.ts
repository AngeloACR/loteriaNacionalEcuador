import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor() {}

  setCarritoLoteria(tickets) {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify(tickets));
  }

  setCarritoLotto(tickets) {
    localStorage.setItem("seleccionadosLotto", JSON.stringify(tickets));
  }

  setCarritoPozo(tickets) {
    localStorage.setItem("seleccionadosPozo", JSON.stringify(tickets));
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
    localStorage.setItem("seleccionadosLoteria", JSON.stringify([]));
    localStorage.setItem("seleccionadosLotto", JSON.stringify([]));
    localStorage.setItem("seleccionadosPozo", JSON.stringify([]));
  }
  setTotal(total) {
    /*     let loteriaAux = this.getCarritoLoteria();
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
    localStorage.setItem("total", JSON.stringify(aux)); */
    localStorage.setItem("total", JSON.stringify(total));
  }
  getTotal() {
    return JSON.parse(localStorage.getItem("total"));
  }
}
