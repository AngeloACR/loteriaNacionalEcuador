import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsNacional } from '../../interfaces/lottery.interface';

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

  mostrar: boolean = false;
  fondo: boolean = false;
  fracciones: number;

  page_size: number = 9;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];

  constructor(private lotteryService: LotteryService) {}

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  seleccionarTicket(id: number) {
    /* this.ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional")); */

    this.fondo = !this.fondo
    this.ticketsNacional.forEach( element => {
      if(element.identificador === id) {
        element.status = !element.status
      }
    })
    
    localStorage.setItem("ticketsNacional", JSON.stringify(this.ticketsNacional));
  }

  fraccionSeleccionada(idTicket: number, id: number) {
    this.ticketsNacional.forEach( element => {
      if(element.identificador === idTicket) {
        element.seleccionados.forEach( elemento => {
          if(elemento.fraccion === id) {
            elemento.status = !elemento.status
          }
        })
      }
    })
    localStorage.setItem("ticketsNacional", JSON.stringify(this.ticketsNacional));
  }

  procesaEmitir(fracciones: number | null) {
    this.fracciones = fracciones;
    this.ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional"));
  }

  ngOnInit() {

    this.ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional"));

    this.sorteo = this.lotteryService.obtenerSorteo(1);
  }
}
