import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../payment/services/shopping-cart.service'

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {


  constructor(private cart: ShoppingCartService) { }

  async ngOnInit() {
/*     await this.cart.setTotal()
    this.cart.ticketsLoteria = await this.cart.getCarritoLoteria()
    this.cart.ticketsLotto = await this.cart.getCarritoLotto()
    this.cart.ticketsPozo = await this.cart.getCarritoPozo()
    this.cart.ticketsCarrito = await this.cart.getCarrito() */
  }

}
