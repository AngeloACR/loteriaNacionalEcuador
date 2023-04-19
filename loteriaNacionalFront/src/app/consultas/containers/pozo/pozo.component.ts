import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-pozo',
  templateUrl: './pozo.component.html',
  styleUrls: ['./pozo.component.scss']
})
export class PozoComponent implements OnInit {
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