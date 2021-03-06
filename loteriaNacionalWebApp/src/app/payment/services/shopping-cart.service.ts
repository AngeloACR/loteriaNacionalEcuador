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
    localStorage.removeItem("seleccionadosLoteria");
    localStorage.removeItem("seleccionadosLotto");
    localStorage.removeItem("seleccionadosPozo");
    localStorage.removeItem("reservaId");
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
    if(total){
      return total
    } else{
      return 0
    }
  }
}
