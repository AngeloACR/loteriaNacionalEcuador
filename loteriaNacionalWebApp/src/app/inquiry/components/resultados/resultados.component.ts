import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.scss"]
})
export class ResultadosComponent implements OnInit {
  @Input() resultados: any;
  @Input() isLoteriaNacional: boolean = false;
  @Input() isLotto: boolean = false;
  @Input() isPozoMillonario: boolean = false;
  tickets: any[] = [];
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.resultados.forEach(resultado => {
      let description;
      let ticketNumbers;
      ticketNumbers = resultado.combinacion.split("");
      let ticket = {
        sorteo: resultado.sorteo,
        description,
        ticketNumbers,
        resultado
      };
      this.tickets.push(ticket);
    });
  }

  closeBox() {
    this.close.emit("");
  }
}
