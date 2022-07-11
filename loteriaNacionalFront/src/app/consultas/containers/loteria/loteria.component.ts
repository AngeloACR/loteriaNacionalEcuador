import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-loteria',
  templateUrl: './loteria.component.html',
  styleUrls: ['./loteria.component.scss']
})
export class LoteriaComponent implements OnInit {
  showResultados: boolean = false;
  resultados: any;

  constructor() {}

  ngOnInit() {}

  toggleResultados(resultados: any) {
    this.resultados = resultados;
    console.log(this.resultados);
    this.showResultados = true;
  }
  closeBox() {
    this.showResultados = false;
  }
}
