import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { LotteryService } from "../../../lottery/services/lottery.service";

@Component({
  selector: "app-compra-finalizada",
  templateUrl: "./compra-finalizada.component.html",
  styleUrls: ["./compra-finalizada.component.scss"]
})
export class CompraFinalizadaComponent implements OnInit {
  @Output() volver = new EventEmitter();
  @Input() compra: any;
  @Input() codigosPromocionales: any;
  user: any;
  constructor(
    private lottery: LotteryService,
  ) {}

  ngOnInit() {
    this.user = this.lottery.getAuthData().user
  }

  seguirJugando() {
    this.volver.emit();
  }
}
