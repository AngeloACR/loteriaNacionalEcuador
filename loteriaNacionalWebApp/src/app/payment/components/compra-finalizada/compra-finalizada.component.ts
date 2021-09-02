import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-compra-finalizada",
  templateUrl: "./compra-finalizada.component.html",
  styleUrls: ["./compra-finalizada.component.scss"]
})
export class CompraFinalizadaComponent implements OnInit {
  @Output() volver = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  seguirJugando() {
    this.volver.emit();
  }
}
