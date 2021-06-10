import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-loteria-nacional-consulta",
  templateUrl: "./loteria-nacional-consulta.component.html",
  styleUrls: ["./loteria-nacional-consulta.component.scss"]
})
export class LoteriaNacionalConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  combinacionesAux: any;

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
    let data: any = await this.inquiryService.recuperarBoletoGanador(
      1,
      this.sorteoGanador,
      combinaciones
    );
    console.log(data);
    this.toggleResultados(data);
  }
  showResultados: boolean = false;
  resultados: any;
  toggleResultados(resultados) {
    this.resultados = resultados;
    console.log(this.resultados);
    this.showResultados = true;
  }

  async buscarBoletin() {
    this.router.navigateByUrl(`/inquiry/loteria_boletin/${this.sorteoBoletin}`);
  }

  closeBox() {
    this.showResultados = false;
  }
}
