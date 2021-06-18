import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulta-loteria-nacional",
  templateUrl: "./consulta-loteria-nacional.component.html",
  styleUrls: ["./consulta-loteria-nacional.component.scss"]
})
export class ConsultaLoteriaNacionalComponent implements OnInit {
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
