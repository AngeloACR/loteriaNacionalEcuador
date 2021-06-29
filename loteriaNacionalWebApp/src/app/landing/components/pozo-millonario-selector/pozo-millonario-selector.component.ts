import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pozo-millonario-selector",
  templateUrl: "./pozo-millonario-selector.component.html",
  styleUrls: ["./pozo-millonario-selector.component.scss"]
})
export class PozoMillonarioSelectorComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    this.ticketNumbers = ["5", "6", "4", "4", "3"];
    this.ticketGanador = {
      ticketIndex: 245,
      date: "05/05/2021",
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      sorteo: 6575
    };
  }

  verUltimoBoletin() {
    let sorteo = 4565;
    this.router.navigateByUrl(`/resultados/pozo_millonario_boletin/${sorteo}`);
  }
}
