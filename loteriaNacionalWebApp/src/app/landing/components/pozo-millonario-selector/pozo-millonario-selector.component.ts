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
    let data = JSON.parse(
      localStorage.getItem("pozoMillonarioUltimoResultado")
    );
    this.ticketNumbers = data.ultimoResultado.combinacion2.match(/.{1,2}/g);
    this.ticketGanador = {
      ticketIndex: data.ultimoResultado.codigo,
      date: data.sorteo.fecha,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo,
      codigo: data.ultimoResultado.codigo
    };
  }
  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/resultados/pozo_millonario_boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/resultados/pozo_millonario_consulta`);
  }
}
