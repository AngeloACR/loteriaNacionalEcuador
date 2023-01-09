import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultas-revancha',
  templateUrl: './revancha.component.html',
  styleUrls: ['./revancha.component.scss'],
})
export class RevanchaComponent implements OnInit {
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
