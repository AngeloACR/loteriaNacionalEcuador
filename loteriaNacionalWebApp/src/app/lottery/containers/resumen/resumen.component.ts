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
  constructor() {}

  ngOnInit() {
    this.ticketsNacional = JSON.parse(
      localStorage.getItem("seleccionadosLoteria")
    );
    this.ticketsLotto = JSON.parse(localStorage.getItem("seleccionadosLotto"));
    this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }
}
