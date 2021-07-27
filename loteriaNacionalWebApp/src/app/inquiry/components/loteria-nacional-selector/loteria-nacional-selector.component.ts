import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-loteria-nacional-selector",
  templateUrl: "./loteria-nacional-selector.component.html",
  styleUrls: ["./loteria-nacional-selector.component.scss"]
})
export class LoteriaNacionalSelectorComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("loteriaNacionalUltimoResultado")
    );
    this.ticketNumbers = data.ultimoResultado.combinacion1.split("");
    this.ticketGanador = {
      ticketIndex: data.ultimoResultado.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo
    };
  }

  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/resultados/loteria_boletin/${sorteo}`);
  }

  verResultados() {
    this.router.navigateByUrl(`/resultados/loteria_consulta`);
  }
}
