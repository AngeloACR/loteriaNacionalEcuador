import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { CodigosPromocionalesService } from "../../services/codigos-promocionales.service";

@Component({
  selector: 'app-popup-promo',
  templateUrl: './popup-promo.component.html',
  styleUrls: ['./popup-promo.component.scss']
})
export class PopupPromoComponent implements OnInit {
  @Output() closePromo = new EventEmitter();
  bannerLink: string = "";
  constructor(private codigoPromocionalService: CodigosPromocionalesService) { }

  async ngOnInit() {
  }
  close() {
    this.closePromo.emit();
  }

}
