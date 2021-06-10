import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.scss"]
})
export class ResultadosComponent implements OnInit {
  @Input() resultados: any;
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  closeBox() {
    this.close.emit("");
  }
}
