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
  selector: "app-lotto-consulta",
  templateUrl: "./lotto-consulta.component.html",
  styleUrls: ["./lotto-consulta.component.scss"]
})
export class LottoConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  combinacionesAux: any;
  maxDigits: number = 6;
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
    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(2);
  }

  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }
  validate() {
    let reg = /[^0-9|,| ]/g;

    this.combinacionesAux = this.combinacionesAux.replace(reg, "");
  }
  /*   validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacionesAux.length;
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
      this.numbers.forEach(number => {
        number = number.replace(reg, "");
        this.combinacionesAux = `${this.combinacionesAux}${number}`;
        if (number.length == this.maxDigits) {
          this.combinacionesAux = `${this.combinacionesAux}, `;
        }
      });
    }
    this.previousLength = this.combinacionesAux.length;
  } */

  cleanSpaces(combinacion) {
    let reg = /[^0-9]/g;
    let aux = combinacion.replace(reg, "");
    return aux;
  }

  isLoading: boolean = false;
  loadingMessage: String = "Consultando los resultados";

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  async buscarBoletoGanador() {
    try {
      this.triggerLoader();
      let aux = this.combinacionesAux;
      /*     if (this.combinacionesAux[this.combinacionesAux.length - 1] == " ") {
      aux = this.combinacionesAux.slice(0, -2);
    } */

      let combinaciones: Array<any> = aux.split(",");
      combinaciones = combinaciones.map((combinacion, index) => {
        combinacion = this.cleanSpaces(combinacion);
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
      if (!this.sorteoGanador) {
        this.dismissLoader();
        alert("Por favor seleccione un sorteo");
        return;
      }
      let data: any = await this.inquiryService.recuperarBoletoGanador(
        1,
        this.sorteoGanador,
        combinaciones
      );
      console.log(data);
      this.resultados.emit(data);
      this.dismissLoader();
    } catch (e) {
      this.dismissLoader();
      alert(
        "Ocurrio un error consultando los resultados, por favor intente de nuevo"
      );
      console.log(e);
    }
  }

  async buscarBoletin() {
    if (!this.sorteoBoletin) {
      alert("Por favor seleccione un sorteo");
      return;
    }
    this.router.navigateByUrl(
      `/resultados/lotto_boletin/${this.sorteoBoletin}`
    );
  }
}
