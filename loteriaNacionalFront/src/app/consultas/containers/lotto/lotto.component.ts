import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
})
export class LottoComponent implements OnInit {
  showResultados: boolean = false;
  resultados: any;
  validacion: any;
  constructor() {}

  ngOnInit() {}

  toggleResultados(resultados: any) {
    this.resultados = resultados;
    this.showResultados = true;
  }
  closeBox() {
    this.showResultados = false;
  }
}
