import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-la-millonaria-selector',
  templateUrl: './la-millonaria-selector.component.html',
  styleUrls: ['./la-millonaria-selector.component.scss']
})
export class LaMillonariaSelectorComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("laMillonariaUltimoResultado")
    );
    this.ticketNumbers = data.ultimoResultadoLoteria.combinacion1.split("");
    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoLoteria.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo
    };
  }

  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/resultados/millonaria_boletin/${sorteo}`);
  }

  verResultados() {
    this.router.navigateByUrl(`/resultados/millonaria_consulta`);
  }
}
