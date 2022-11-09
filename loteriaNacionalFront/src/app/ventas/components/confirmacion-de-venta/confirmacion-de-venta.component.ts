import { Component, OnInit, Output, EventEmitter, Input, ViewChildren } from "@angular/core";
import { VentasService } from "../../services/ventas.service";

@Component({
  selector: 'app-confirmacion-de-venta',
  templateUrl: './confirmacion-de-venta.component.html',
  styleUrls: ['./confirmacion-de-venta.component.scss']
})
export class ConfirmacionDeVentaComponent implements OnInit {
  @ViewChildren('purchase') purchase: any;

  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  @Output() comprarDespues = new EventEmitter();
  @Input() compra: any;
  user: any;
  constructor(
    private ventas: VentasService,
  ) {}

  ngOnInit() {
    this.purchase.disabled = false;
    this.user = this.ventas.getAuthData().user
  }
  confirmarCompra() {
    this.compraConfirmada.emit();
    this.purchase.disabled = true;
  }
  habilitarBoton() {
    this.purchase.disabled = false;
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
