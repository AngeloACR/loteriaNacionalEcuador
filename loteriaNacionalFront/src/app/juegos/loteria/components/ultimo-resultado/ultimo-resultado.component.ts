import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'loteria-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss']
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers?: String[];
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("loteriaNacionalUltimoResultado")!
    );
    this.ticketNumbers = data.ultimoResultadoLoteria.combinacion1.split("");
    console.log(data);
    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoLoteria.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo,
      valorPremio: parseFloat(data.premioPrincipal.valorPremio)
    };
  }

  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/consultas/loteria/boletin/${sorteo}`);
  }

  verResultados() {
    this.router.navigateByUrl(`/consultas/loteria`);
  }
}
