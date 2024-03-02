import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss']
})
export class DescuentosComponent implements OnInit {
  descuento: any = {
    sorteos: [],
    juegos: [],
    minimum: 0,
    maximum: 0,
    initDate: new Date(),
    endDate: new Date(),
    discount: 0,
    discountType: false
  };
  sorteos: any = [];
  juegos: any = [{
    id: 1, nombre: "Lotería"
  }, {
    id: 2, nombre: "Lotto"
  }, {
    id: 5, nombre: "Pozo Millonario"
  }, {
    id: 17, nombre: "Pozo Revancha"
  }, {
    id: 12, nombre: "Bingazo"
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
