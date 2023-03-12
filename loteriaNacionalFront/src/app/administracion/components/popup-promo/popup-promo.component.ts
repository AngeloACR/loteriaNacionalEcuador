import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AdministracionService } from '../../services/administracion.service';

@Component({
  selector: 'public-popup',
  templateUrl: './popup-promo.component.html',
  styleUrls: ['./popup-promo.component.scss'],
})
export class PopupPromoComponent implements OnInit {
  @Output() closePromo = new EventEmitter();
  bannerLink: string = '';
  constructor(private administracionService: AdministracionService) {}

  async ngOnInit() {
    this.bannerLink = 'assets/popupPozo.gif'; //await this.administracionService.getBannerLink();
  }
  close() {
    this.closePromo.emit();
  }
}
