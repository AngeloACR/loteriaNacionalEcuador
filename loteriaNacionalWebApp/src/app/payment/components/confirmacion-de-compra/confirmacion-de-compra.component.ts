import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-confirmacion-de-compra",
  templateUrl: "./confirmacion-de-compra.component.html",
  styleUrls: ["./confirmacion-de-compra.component.scss"]
})
export class ConfirmacionDeCompraComponent implements OnInit {
  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  @Output() comprarDespues = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  confirmarCompra() {
    this.compraConfirmada.emit();
  }

  volver() {
    this.comprarDespues.emit();
  }

  cancelarCompra() {
    this.compraCancelada.emit(
      "La compra no se pudo procesar, por favor intente mas tarde"
    );
  }
}
