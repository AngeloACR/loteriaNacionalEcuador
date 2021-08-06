import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsNacional } from "../../interfaces/lottery.interface";

import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;

  sorteo: sorteo[];
  ticketsNacional: ticketsNacional[];
  combinacionDeLaSuerte: any = ["", "", "", "", ""];

  mostrar: boolean = false;
  fondo: boolean = false;
  fracciones: number;
  showNumeros: boolean = false;
  page_size: number = 9;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];

  constructor(private lotteryService: LotteryService) {}

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  seleccionarTicket(id: number) {
    /* this.ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional")); */

    this.fondo = !this.fondo;
    this.ticketsNacional.forEach(element => {
      if (element.identificador === id) {
        element.status = !element.status;
      }
    });

    localStorage.setItem(
      "ticketsNacional",
      JSON.stringify(this.ticketsNacional)
    );
  }
  async buscarNumero() {
    if (this.sorteoSeleccionado != "default") {
      /*this.ticketsNacional = JSON.parse(
        localStorage.getItem("ticketsNacional")
        );*/

      let combinacion = this.combinacionDeLaSuerte.map(element => {
        if (element == null || element == undefined) {
          return "_";
        } else {
          return element;
        }
      });
      this.ticketsNacional = await this.lotteryService.obtenerTickets(
        1,
        this.sorteoSeleccionado,
        combinacion.join(""),
        ""
      );

      this.showNumeros = true;
    } else {
      alert("Por favor seleccione un sorteo");
      this.showNumeros = false;
    }
  }

  fraccionSeleccionada(idTicket: number, id: number) {
    this.ticketsNacional.forEach(element => {
      if (element.identificador === idTicket) {
        element.seleccionados.forEach(elemento => {
          if (elemento.fraccion === id) {
            elemento.status = !elemento.status;
          }
        });
      }
    });
    localStorage.setItem(
      "ticketsNacional",
      JSON.stringify(this.ticketsNacional)
    );
  }
  sorteoSeleccionado: sorteo | String;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo.sorteo;
    this.ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional"));
    this.showNumeros = false;
  }

  async ngOnInit() {
    this.sorteo = await this.lotteryService.obtenerSorteo(1);
  }
}
