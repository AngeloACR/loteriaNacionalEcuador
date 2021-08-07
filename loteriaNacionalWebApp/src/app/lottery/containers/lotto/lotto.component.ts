import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsLotto } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  sorteo: sorteo[];
  combinacionDeLaSuerte: any = ["", "", "", "", "", ""];

  ticketsLotto: ticketsLotto[];

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  showNumeros: boolean = false;

  constructor(private lotteryService: LotteryService) {}

  async buscarNumero() {
    if (this.sorteoSeleccionado != "default") {
      /*this.ticketsNacional = JSON.parse(
        localStorage.getItem("ticketsNacional")
        );*/
      this.showNumeros = false;

      let combinacion = this.combinacionDeLaSuerte.map(element => {
        if (element == null || element == undefined || element == "") {
          return "_";
        } else {
          return element;
        }
      });
      console.log(combinacion);
      this.ticketsLotto = await this.lotteryService.obtenerTickets(
        2,
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

  sorteoSeleccionado: sorteo | String;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo.sorteo;
    this.ticketsLotto = JSON.parse(localStorage.getItem("ticketsLotto"));
  }
  seleccionarTicket(id: number) {
    this.ticketsLotto.forEach(element => {
      if (element.identificador === id) {
        element.status = !element.status;
      }
    });
    console.log(id);

    localStorage.setItem("ticketsLotto", JSON.stringify(this.ticketsLotto));
  }

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  async ngOnInit() {
    this.ticketsLotto = JSON.parse(localStorage.getItem("ticketsLotto"));
    this.sorteo = await this.lotteryService.obtenerSorteo(2);
  }
}
