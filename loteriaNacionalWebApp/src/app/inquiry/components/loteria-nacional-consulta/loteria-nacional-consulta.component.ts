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
  selector: "app-loteria-nacional-consulta",
  templateUrl: "./loteria-nacional-consulta.component.html",
  styleUrls: ["./loteria-nacional-consulta.component.scss"],
})
export class LoteriaNacionalConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  combinacionesAux: any = "";
  characterCount: number = 0;
  previousLength: number = 0;

  @Output() resultados = new EventEmitter();
  constructor(
    private router: Router,
    private inquiryService: InquiryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(1);
    this.setSorteoDefault();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = "default";
    this.sorteoBoletin = "default";
    this.changeDetectorRef.markForCheck();
  }
  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  maxDigits: number = 5;
  numbers: Array<any> = [];
  cameFromBackspace: boolean = false;

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
      if(!this.combinacionesAux.length) throw new Error("Por favor, escribe al menos una combinación que quieras consultar")
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
        1,
        this.sorteoGanador,
        combinaciones
      );
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
      `/resultados/loteria_boletin/${this.sorteoBoletin}`
    );
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
