import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { LotteryService } from "../../../lottery/services/lottery.service";

@Component({
  selector: "app-confirmacion-de-compra",
  templateUrl: "./confirmacion-de-compra.component.html",
  styleUrls: ["./confirmacion-de-compra.component.scss"]
})
export class ConfirmacionDeCompraComponent implements OnInit {
  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  @Output() comprarDespues = new EventEmitter();
  @Input() compra: any;
  user: any;
  constructor(
    private lottery: LotteryService,
  ) {}

  ngOnInit() {
    this.user = this.lottery.getAuthData().user
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
