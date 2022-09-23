import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';

import { ConsultaService } from '../../services/consulta.service';
@Component({
  selector: 'millonaria-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent implements OnInit {
  sorteosJugados: any;
  sorteoGanador: any;
  sorteoBoletin: any;
  combinacion: any = '';
  serie: any = '';
  maxDigits: number = 4;
  numbers: Array<any> = [];
  previousLength: number = 0;
  cameFromBackspace: boolean = false;
  @Output() resultados = new EventEmitter();

  constructor(
    private router: Router,
    private consulta: ConsultaService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.triggerLoader();
    this.sorteosJugados = await this.consulta.recuperarSorteosJugados();
    this.setSorteoDefault();
    this.dismissLoader();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = 'default';
    this.sorteoBoletin = 'default';
    this.changeDetectorRef.markForCheck();
  }

  validateCombinacion() {
    this.changeDetectorRef.detectChanges();
    let reg = /[^0-9]/g;
    this.combinacion = this.combinacion.replace(reg, '');
    this.changeDetectorRef.markForCheck();
  }
  validateSerie() {
    this.changeDetectorRef.detectChanges();
    let reg = /[^0-9]/g;
    this.serie = this.serie.replace(reg, '');
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacion.length;
    let addComma = false;
    if (this.previousLength > currentLength) {
      if (this.combinacion[currentLength - 1] == ',') {
        this.combinacion = this.combinacion.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacion.split(', ');
      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }
      this.combinacion = '';
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, '');
      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }
      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, '');
        this.combinacion = `${this.combinacion}${number}`;
        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacion = `${this.combinacion}, `;
        }
      });
    }
    this.previousLength = this.combinacion.length;
  }

  isLoading: boolean = false;
  loadingMessage: String = 'Cargando datos';

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e: any) {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1
    ) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e: any) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;
    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
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
      if (!this.combinacion.length)
        throw new Error(
          'Por favor, escribe la combinación que quieras consultar'
        );
      /*       let aux = this.combinacion;
      if (this.combinacion[this.combinacion.length - 1] == " ") {
        aux = this.combinacion.slice(0, -2);
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
 */ if (this.sorteoGanador == 'default') {
        this.dismissLoader();
        this.openError('Por favor, selecciona un sorteo');

        return;
      }
      let combinaciones = [{ principal: this.combinacion, serie: this.serie }];
      let data: any = await this.consulta.recuperarBoletoGanador(
        this.sorteoGanador,
        combinaciones
      );
      this.resultados.emit(data);
      this.dismissLoader();
    } catch (e: any) {
      this.dismissLoader();
      this.openError(e.message);

      console.log(e);
    }
  }

  async buscarBoletin() {
    if (this.sorteoBoletin == 'default') {
      this.openError('Por favor, selecciona un sorteo');

      return;
    }
    this.router.navigateByUrl(
      `/consultas/millonaria/boletin/${this.sorteoBoletin}`
    );
  }

  isError: boolean = false;
  errorMessage: string = '';
  openError(msg: string) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
