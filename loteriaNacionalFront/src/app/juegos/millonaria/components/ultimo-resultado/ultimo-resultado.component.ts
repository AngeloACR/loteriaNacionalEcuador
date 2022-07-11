import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'millonaria-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss']
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers?: String[];
  serieNumbers?: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("laMillonariaUltimoResultado")!
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
    this.router.navigateByUrl(`/consultas/millonaria/boletin/${sorteo}`);
  }

  verResultados() {
    this.router.navigateByUrl(`/consultas/millonaria`);
  }
}
