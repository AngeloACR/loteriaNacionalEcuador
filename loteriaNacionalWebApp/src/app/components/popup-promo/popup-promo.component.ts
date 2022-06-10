import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: 'app-popup-promo',
  templateUrl: './popup-promo.component.html',
  styleUrls: ['./popup-promo.component.scss']
})
export class PopupPromoComponent implements OnInit {
  @Output() closePromo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.closePromo.emit();
  }

}
