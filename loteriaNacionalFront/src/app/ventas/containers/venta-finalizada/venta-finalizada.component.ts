import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VentasService } from "../../services/ventas.service";
import { PagosService } from "../../services/pagos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venta-finalizada',
  templateUrl: './venta-finalizada.component.html',
  styleUrls: ['./venta-finalizada.component.scss']
})
export class VentaFinalizadaComponent implements OnInit {
  compra: any;
  codigosPromocionales: any;
  user: any;
  token: any;
  idVenta: any;
  url: string = environment.front

  constructor(
    private ventas: VentasService,
    private pagos: PagosService,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token! = params['token'];
      this.idVenta! = params['idVenta'];
    });
  }

  async ngOnInit() {
    this.user = this.ventas.getAuthData().user
    this.compra = await this.pagos.getCompra(this.idVenta, "");
    this.codigosPromocionales = await this.pagos.getCodigosPromocionales(
      this.idVenta
    );
  }

  seguirJugando() {
    this.pagos.finalizarCompra();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token!}`);
  }

  verBoletos() {
    window.open(`${this.url}/compra_tus_juegos/detalle/${this.ventas.getAuthData().personaId}-${this.idVenta}`, "_blank")
  }

}
