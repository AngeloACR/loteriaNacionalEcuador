import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-millonaria',
  templateUrl: './millonaria.component.html',
  styleUrls: ['./millonaria.component.scss']
})
export class MillonariaComponent implements OnInit {
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
