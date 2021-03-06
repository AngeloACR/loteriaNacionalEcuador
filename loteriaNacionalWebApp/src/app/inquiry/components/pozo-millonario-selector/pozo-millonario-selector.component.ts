import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-pozo-millonario-selector",
  templateUrl: "./pozo-millonario-selector.component.html",
  styleUrls: ["./pozo-millonario-selector.component.scss"]
})
export class PozoMillonarioSelectorComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers: String[];
  mascota: String;
  mascotaPath: String;
  constructor(private router: Router, private inquiry: InquiryService) {}
  ngOnInit() {
    let data = JSON.parse(
      localStorage.getItem("pozoMillonarioUltimoResultado")
    );
    this.ticketNumbers = data.ultimoResultadoPozo.combinacion2.match(/.{1,2}/g);
    this.mascota = data.mascota;
    this.mascotaPath = this.inquiry.obtenerMascota(this.mascota);

    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoPozo.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      mascota: this.mascota,
      numeroSorteo: data.numeroSorteo,
      codigo: data.ultimoResultadoPozo.codigo,
      sorteo: data.sorteo
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
