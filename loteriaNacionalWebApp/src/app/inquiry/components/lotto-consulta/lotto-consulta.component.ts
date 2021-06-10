import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { InquiryService } from "../../services/inquiry.service";
@Component({
  selector: "app-lotto-consulta",
  templateUrl: "./lotto-consulta.component.html",
  styleUrls: ["./lotto-consulta.component.scss"]
})
export class LottoConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  combinacionesAux: any;

  constructor(private router: Router, private inquiryService: InquiryService) {}

  async ngOnInit() {
    console.log("En la consulta de loteria");
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(2);
  }

  deleteSpaces() {
    this.combinacionesAux = this.combinacionesAux.replace(" ", "");
  }

  async buscarBoletoGanador() {
    let combinaciones = this.combinacionesAux.split(",");
    console.log(combinaciones);
    let data = await this.inquiryService.recuperarBoletoGanador(
      2,
      this.sorteoGanador,
      combinaciones
    );
    console.log(data);
  }

  async buscarBoletin() {
    this.router.navigateByUrl(`/lotto_boletin/${this.sorteoBoletin}`);
  }
}
