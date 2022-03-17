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
  serieNumbers: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("laMillonariaUltimoResultado")
    );
    this.ticketNumbers = data.ultimoResultadoMillonaria.combinacion1.split("");
    this.serieNumbers = data.ultimoResultadoMillonaria.combinacion2.split("");
    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoMillonaria.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      serieNumbers: this.serieNumbers,
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
