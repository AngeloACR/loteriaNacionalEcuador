import { Component, OnInit, Input } from "@angular/core";
import { sorteo, ticketsNacional } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"]
})
export class TooltipComponent implements OnInit {
  @Input() ticket: ticketsNacional[];

  sorteo: sorteo[];
  /* ticketsNacional: ticketsNacional[]; */

  mostrar: boolean = false;
  fondo: boolean = false;
  fracciones: number;

  constructor(private lotteryService: LotteryService) {}

  seleccionarTicket(id: number) {
    this.fondo = !this.fondo;
    this.ticket.forEach(element => {
      if (element.identificador === id) {
        element.status = !element.status;
      }
    });

    localStorage.setItem("ticketsNacional", JSON.stringify(this.ticket));
  }

  fraccionSeleccionada(idTicket: number, id: number) {
    this.ticket.forEach(element => {
      if (element.identificador === idTicket) {
        element.seleccionados.forEach(elemento => {
          if (elemento.fraccion === id) {
            elemento.status = !elemento.status;
          }
        });
      }
    });
    localStorage.setItem("ticketsNacional", JSON.stringify(this.ticket));
  }

  procesaEmitir(fracciones: number | null) {
    this.fracciones = fracciones;
    this.ticket = JSON.parse(localStorage.getItem("ticketsNacional"));
  }

  ngOnInit() {
    this.ticket = JSON.parse(localStorage.getItem("ticketsNacional"));
  }
}
