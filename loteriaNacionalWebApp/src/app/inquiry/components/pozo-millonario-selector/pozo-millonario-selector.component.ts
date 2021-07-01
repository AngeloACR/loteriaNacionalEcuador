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
    this.ticketNumbers = ["01", "02", "09", "10", "11", "12", "15", "16", "17", "18", "19", "22", "23", "24"];
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
  verResultados() {
    this.router.navigateByUrl(`/resultados/pozo_millonario_consulta`);
  }
}
