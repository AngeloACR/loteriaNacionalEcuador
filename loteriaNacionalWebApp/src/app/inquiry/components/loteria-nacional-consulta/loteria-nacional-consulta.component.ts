import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
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
  @Output() resultados = new EventEmitter();
  constructor(
    private router: Router,
    private inquiryService: InquiryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    console.log("En la consulta de loteria");
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(1);
  }

  validateField() {
    this.changeDetectorRef.detectChanges();
    this.combinacionesAux = this.deleteLetters();
    //this.cleanCombinationSpaces();
    //this.maxDigits(5);
    this.changeDetectorRef.markForCheck();
  }

  cleanCombinationSpaces() {
    let combinaciones = this.combinacionesAux.split(",");
    let length = combinaciones.length;
    let lastIndex = length - 1;
    let lastCombinacion = combinaciones[lastIndex];
    if (lastCombinacion[0] == " ") {
      lastCombinacion = lastCombinacion.substring(1);
    }
    let lastCombinacionLength = lastCombinacion.length;
    if (lastCombinacionLength > 1) {
      lastCombinacion = lastCombinacion.replace(" ", "");

      this.combinacionesAux = this.combinacionesAux.slice(
        0,
        -lastCombinacionLength
      );

      this.combinacionesAux = this.combinacionesAux.concat("", lastCombinacion);
    }
  }

  maxDigits(max) {
    let combinaciones = this.deleteSpaces();
    combinaciones = combinaciones.split(",");
    let length = combinaciones.length;
    let lastIndex = length - 1;
    let lastCombinacion = combinaciones[lastIndex];
    let lastCombinacionLength = lastCombinacion.length;
    console.log(lastCombinacionLength);
    if (lastCombinacionLength > max) {
      lastCombinacion = lastCombinacion.substring(0, max);
      this.combinacionesAux = this.combinacionesAux.slice(0, -(max + 1));

      this.combinacionesAux = this.combinacionesAux.concat("", lastCombinacion);
    }
  }

  deleteLetters() {
    let reg = /[^0-9|,| ]/g;
    let combinacionesAux = this.combinacionesAux.replace(reg, "");
    return combinacionesAux;
  }

  deleteSpaces() {
    let combinacionesAux = this.combinacionesAux.replace(" ", "");
    return combinacionesAux;
  }
  async buscarBoletoGanador() {
    let combinaciones = this.deleteSpaces();
    combinaciones = combinaciones.split(",");
    let data: any = await this.inquiryService.recuperarBoletoGanador(
      1,
      this.sorteoGanador,
      combinaciones
    );
    console.log(data);
    this.resultados.emit(data);
  }

  async buscarBoletin() {
    this.router.navigateByUrl(
      `/resultados/loteria_boletin/${this.sorteoBoletin}`
    );
  }
}
