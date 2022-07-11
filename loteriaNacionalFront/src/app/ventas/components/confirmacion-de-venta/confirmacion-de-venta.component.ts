import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VentasService } from "../../services/ventas.service";

@Component({
  selector: 'app-confirmacion-de-venta',
  templateUrl: './confirmacion-de-venta.component.html',
  styleUrls: ['./confirmacion-de-venta.component.scss']
})
export class ConfirmacionDeVentaComponent implements OnInit {
  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  @Output() comprarDespues = new EventEmitter();
  @Input() compra: any;
  user: any;
  constructor(
    private ventas: VentasService,
  ) {}

  ngOnInit() {
    this.user = this.ventas.getAuthData().user
  }
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
