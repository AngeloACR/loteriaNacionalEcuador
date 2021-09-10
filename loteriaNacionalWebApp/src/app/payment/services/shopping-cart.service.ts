import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor() {}

  setCarritoLoteria(tickets) {
    console.log("setting Item");
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
    JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }
  borrarCarrito() {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify([]));
    localStorage.setItem("seleccionadosLotto", JSON.stringify([]));
    localStorage.setItem("seleccionadosPozo", JSON.stringify([]));
  }
  setTotal(total) {
    localStorage.setItem("total", JSON.stringify(total));
  }
  getTotal() {
    JSON.parse(localStorage.getItem("total"));
  }
}
