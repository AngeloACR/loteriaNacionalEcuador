import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.scss"]
})
export class ResultadosComponent implements OnInit {
  @Input() resultados: any;
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;
  @Input() isLotto: boolean = false;
  @Input() isPozoMillonario: boolean = false;
  tickets: any[] = [];
  @Output() close = new EventEmitter();
  loteriaBackground: any;
  constructor() {}

  ngOnInit() {
    switch (this.tipoLoteria) {
      case "1":
        this.loteriaBackground = {
          backgroundLoteriaNacional: true
        };
        break;
      case "2":
        this.loteriaBackground = {
          backgroundLotto: true
        };

        break;

      default:
        this.loteriaBackground = {
          backgroundPozoMillonario: true
        };

        break;
    }
    this.resultados.forEach(resultado => {
      let description;
      let ticket = {
        sorteo: resultado.sorteo,
        description,
        combinacion: resultado.combinacion,
        resultado
      };
      this.tickets.push(ticket);
    });
  }

  closeBox() {
    this.close.emit("");
  }
}
