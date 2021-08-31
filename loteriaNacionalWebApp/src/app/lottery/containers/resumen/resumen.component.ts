import { Component, OnInit } from "@angular/core";

import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales
} from "../../interfaces/lottery.interface";
@Component({
  selector: "app-resumen",
  templateUrl: "./resumen.component.html",
  styleUrls: ["./resumen.component.scss"]
})
export class ResumenComponent implements OnInit {
  ticketsNacional: any;
  ticketsLotto: any;
  ticketsPozo: any;

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;

  constructor() {}

  ngOnInit() {
    this.ticketsNacional = JSON.parse(
      localStorage.getItem("seleccionadosLoteria")
    );
    this.ticketsLotto = JSON.parse(localStorage.getItem("seleccionadosLotto"));
    this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  comprar() {
    this.dismissCompras();
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.dismissCompras();
    this.compraFinalizada = true;
  }
  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }
  recargarSaldo() {
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
}
