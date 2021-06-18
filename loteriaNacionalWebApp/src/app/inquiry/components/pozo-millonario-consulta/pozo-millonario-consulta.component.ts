import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-pozo-millonario-consulta",
  templateUrl: "./pozo-millonario-consulta.component.html",
  styleUrls: ["./pozo-millonario-consulta.component.scss"]
})
export class PozoMillonarioConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  fechaInicial: any;
  fechaFinal: any;
  sorteoRango: any;
  combinacionesAux: any;
  @Output() resultados = new EventEmitter();

  constructor(private router: Router, private inquiryService: InquiryService) {}

  async ngOnInit() {
    console.log("En la consulta de loteria");
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(1);
  }

  deleteSpaces() {
    this.combinacionesAux = this.combinacionesAux.replace(" ", "");
  }

  async buscarBoletoGanador() {
    let combinaciones = this.combinacionesAux.split(",");
    console.log(combinaciones);
    let data = await this.inquiryService.recuperarBoletoGanador(
      5,
      this.sorteoGanador,
      combinaciones
    );
    console.log(data);
    this.resultados.emit(data);
  }

  async buscarBoletin() {
    this.router.navigateByUrl(`/pozo_millonario_boletin/${this.sorteoBoletin}`);
  }
  async buscarRango() {
    console.log("Buscando por rango");
    //this.router.navigateByUrl(`/pozo_millonario_boletin/${this.sorteoBoletin}`);
  }
}
