import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-pozo-millonario-consulta",
  templateUrl: "./pozo-millonario-consulta.component.html",
  styleUrls: ["./pozo-millonario-consulta.component.scss"],
})
export class PozoMillonarioConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  boletoInicial: any;
  boletoFinal: any = "";
  sorteoRango: any = "";
  combinacionesAux: any = "";

  maxDigits: number = 7;
  numbers: Array<any> = [];
  previousLength: number = 0;
  cameFromBackspace: boolean = false;
  @Output() resultados = new EventEmitter();

  constructor(
    private router: Router,
    private inquiryService: InquiryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    console.log("En la consulta de loteria");
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(5);
    this.setSorteoDefault();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = "default";
    this.sorteoBoletin = "default";
    this.sorteoRango = "default";
    this.changeDetectorRef.markForCheck();
  }
  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacionesAux.length;
    let addComma = false;
    if (this.previousLength > currentLength) {
      if (this.combinacionesAux[currentLength - 1] == ",") {
        this.combinacionesAux = this.combinacionesAux.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacionesAux.split(", ");
      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }
      this.combinacionesAux = "";
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, "");
      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }
      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, "");
        this.combinacionesAux = `${this.combinacionesAux}${number}`;
        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacionesAux = `${this.combinacionesAux}, `;
        }
      });
    }
    this.previousLength = this.combinacionesAux.length;
  }

  isLoading: boolean = false;
  loadingMessage: String = "Consultando los resultados";

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e) {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1
    ) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
    this.changeDetectorRef.markForCheck();
  }

  async buscarBoletoGanador() {
    try {
      this.triggerLoader();
      if (!this.combinacionesAux.length)
        throw new Error(
          "Por favor, escribe al menos una combinación que quieras consultar"
        );
      let aux = this.combinacionesAux;
      if (this.combinacionesAux[this.combinacionesAux.length - 1] == " ") {
        aux = this.combinacionesAux.slice(0, -2);
      }

      let combinaciones: Array<any> = aux.split(", ");
      combinaciones = combinaciones.map((combinacion, index) => {
        let auxLength = combinacion.length;
        if (auxLength != 0) {
          if (auxLength < this.maxDigits) {
            let auxAdd = this.maxDigits - auxLength;
            for (let i = 1; i <= auxAdd; i++) {
              combinacion = `0${combinacion}`;
            }
          }
          return combinacion;
        }
      });
      if (this.sorteoGanador == "default") {
        this.dismissLoader();
        this.openError("Por favor, selecciona un sorteo");
        return;
      }
      let data: any = await this.inquiryService.recuperarBoletoGanador(
        5,
        this.sorteoGanador,
        combinaciones
      );
      console.log(data);
      this.resultados.emit(data);
      this.dismissLoader();
    } catch (e) {
      this.dismissLoader();
      this.openError(e.message);
      console.log(e);
    }
  }

  async buscarBoletin() {
    if (this.sorteoBoletin == "default") {
      this.openError("Por favor, selecciona un sorteo");

      return;
    }
    this.router.navigateByUrl(
      `/resultados/pozo_millonario_boletin/${this.sorteoBoletin}`
    );
  }
  async buscarRango() {
    try {
      this.triggerLoader();
      console.log("Buscando por rango");
      if (this.sorteoRango == "default") {
        this.dismissLoader();
        this.openError("Por favor, selecciona un sorteo");

        return;
      }
      if (!this.boletoInicial.length)
        throw new Error("Por favor, escribe el número inicial del rango");
      if (!this.boletoFinal.length)
        throw new Error("Por favor, escribe el número final del rango");

      let data = await this.inquiryService.recuperarBoletoGanadorPorPlancha(
        this.boletoInicial,
        this.boletoFinal,
        this.sorteoRango
      );
      this.resultados.emit(data);
      this.dismissLoader();
      //this.router.navigateByUrl(`/pozo_millonario_boletin/${this.sorteoBoletin}`);
    } catch (e) {
      this.dismissLoader();
      this.openError(e.message);
      console.log(e);
    }
  }

  isError: boolean = false;
  errorMessage: string;
  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
