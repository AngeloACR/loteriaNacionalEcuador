import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VentasService } from "../../services/ventas.service";
import { PagosService } from "../../services/pagos.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-venta-finalizada',
  templateUrl: './venta-finalizada.component.html',
  styleUrls: ['./venta-finalizada.component.scss']
})
export class VentaFinalizadaComponent implements OnInit {
  @Input() compra: any;
  @Input() codigosPromocionales: any;
  user: any;
  token: any;
  constructor(
    private ventas: VentasService,
    private pagos: PagosService,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token! = params['token'];
    });
  }

  ngOnInit() {
    this.user = this.ventas.getAuthData().user
  }

  seguirJugando() {
    this.pagos.finalizarCompra();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token!}`);
  }

}
