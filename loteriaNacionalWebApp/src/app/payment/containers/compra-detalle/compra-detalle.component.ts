import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { PaymentService } from "../../services/payment.service";
import { LotteryService } from "../../../lottery/services/lottery.service";

@Component({
  selector: 'app-compra-detalle',
  templateUrl: './compra-detalle.component.html',
  styleUrls: ['./compra-detalle.component.scss']
})
export class CompraDetalleComponent implements OnInit {
  ticketId: string;
  compra: any;
  compraReady: boolean = false;
  user: string;
  constructor(
    private actRoute: ActivatedRoute,
    private payment: PaymentService,
    private lottery: LotteryService,
  ) {

    this.actRoute.params.subscribe(params => {
      this.ticketId = params["id"];
      console.log(this.ticketId);
    });
  }

  async ngOnInit() {
    this.compra = await this.payment.getCompra(this.ticketId);
    console.log(this.compra)
    this.user = this.lottery.getAuthData().user
    this.compraReady = true;
  }

}
