import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InsufficientBalanceComponent } from './components/insufficient-balance/insufficient-balance.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TotalsComponent } from './components/totals/totals.component';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


@NgModule({
  declarations: [PaymentComponent, ShoppingCartComponent, CheckoutComponent, InsufficientBalanceComponent, SummaryComponent, TotalsComponent, CompletedPurchaseComponent, InvoiceComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
