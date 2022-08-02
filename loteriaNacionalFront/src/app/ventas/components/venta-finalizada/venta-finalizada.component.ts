import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VentasService } from "../../services/ventas.service";

@Component({
  selector: 'app-venta-finalizada',
  templateUrl: './venta-finalizada.component.html',
  styleUrls: ['./venta-finalizada.component.scss']
})
export class VentaFinalizadaComponent implements OnInit {
  @Output() volver = new EventEmitter();
  @Input() compra: any;
  user: any;
  constructor(
    private ventas: VentasService,
  ) {}

  ngOnInit() {
    this.user = this.ventas.getAuthData().user
  }

  seguirJugando() {
    this.volver.emit();
  }
}
