import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './services/shopping-cart.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private cart: ShoppingCartService) { }

  async ngOnInit() {
    await this.cart.setTotal()
  }

}
