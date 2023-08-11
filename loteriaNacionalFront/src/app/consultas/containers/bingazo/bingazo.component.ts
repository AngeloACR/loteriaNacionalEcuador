import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-bingazo',
  templateUrl: './bingazo.component.html',
  styleUrls: ['./bingazo.component.scss']
})
export class BingazoComponent implements OnInit {
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
