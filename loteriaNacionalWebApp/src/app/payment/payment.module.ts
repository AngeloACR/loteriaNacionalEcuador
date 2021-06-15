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
import { PasarelaDePagoComponent } from './containers/pasarela-de-pago/pasarela-de-pago.component';
import { ConfirmacionDeCompraComponent } from './containers/confirmacion-de-compra/confirmacion-de-compra.component';
import { SaldoInsuficienteComponent } from './components/saldo-insuficiente/saldo-insuficiente.component';
import { CompraFinalizadaComponent } from './containers/compra-finalizada/compra-finalizada.component';


@NgModule({
  declarations: [PaymentComponent, ShoppingCartComponent, CheckoutComponent, InsufficientBalanceComponent, SummaryComponent, TotalsComponent, CompletedPurchaseComponent, InvoiceComponent, PasarelaDePagoComponent, ConfirmacionDeCompraComponent, SaldoInsuficienteComponent, CompraFinalizadaComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
