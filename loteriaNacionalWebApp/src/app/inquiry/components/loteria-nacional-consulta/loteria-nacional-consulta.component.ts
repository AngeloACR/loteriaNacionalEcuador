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
  characterCount: number = 0;
  previousLength: number = 0;

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
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  maxDigits: number = 5;
  numbers: Array<any> = [];
  cameFromBackspace: boolean = false;
  validate() {
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
  }

  async buscarBoletoGanador() {
    let aux = this.combinacionesAux;
    if (this.combinacionesAux[this.combinacionesAux.length - 1] == " ") {
      aux = this.combinacionesAux.slice(0, -2);
    }

    let combinaciones: Array<any> = aux.split(", ");
    combinaciones = combinaciones.map((combinacion, index) => {
      let auxLength = combinacion.length;
      console.log(auxLength);
      if (auxLength != 0) {
        if (combinaciones.length - 1 == index) {
          if (auxLength < this.maxDigits) {
            let auxAdd = this.maxDigits - auxLength;
            for (let i = 1; i <= auxAdd; i++) {
              combinacion = `0${combinacion}`;
              console.log(combinacion);
            }
          }
        }
        return combinacion;
      }
    });
    if (!this.sorteoGanador) {
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
  }

  async buscarBoletin() {
    if (!this.sorteoBoletin) {
      alert("Por favor seleccione un sorteo");
      return;
    }

    this.router.navigateByUrl(
      `/resultados/loteria_boletin/${this.sorteoBoletin}`
    );
  }
}
