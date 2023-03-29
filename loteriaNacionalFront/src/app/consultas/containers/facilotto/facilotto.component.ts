import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilotto',
  templateUrl: './facilotto.component.html',
  styleUrls: ['./facilotto.component.scss']
})
export class FacilottoComponent implements OnInit {
  showResultados: boolean = false;
  resultados: any;
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
