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
    console.log(data);
    this.ticketNumbers = data.ultimoResultado.combinacion2.match(/.{1,2}/g);
    this.mascota = data.mascota;
    this.mascotaPath = this.inquiry.obtenerMascota(this.mascota);

    this.ticketGanador = {
      ticketIndex: data.ultimoResultado.codigo,
      date: data.sorteo.fecha,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      mascota: this.mascota,
      numeroSorteo: data.numeroSorteo,
      codigo: data.ultimoResultado.codigo,
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
