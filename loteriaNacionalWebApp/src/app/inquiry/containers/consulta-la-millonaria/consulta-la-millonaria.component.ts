import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-la-millonaria',
  templateUrl: './consulta-la-millonaria.component.html',
  styleUrls: ['./consulta-la-millonaria.component.scss']
})
export class ConsultaLaMillonariaComponent implements OnInit {
  showResultados: boolean = false;
  resultados: any;

  constructor() {}

  ngOnInit() {}

  toggleResultados(resultados) {
    this.resultados = resultados;
    console.log(this.resultados);
    this.showResultados = true;
  }
  closeBox() {
    this.showResultados = false;
  }
}
