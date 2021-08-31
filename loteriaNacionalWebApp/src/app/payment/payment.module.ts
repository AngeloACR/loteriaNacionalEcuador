import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { TotalsComponent } from "./components/totals/totals.component";
import { ConfirmacionDeCompraComponent } from "./components/confirmacion-de-compra/confirmacion-de-compra.component";
import { SaldoInsuficienteComponent } from "./components/saldo-insuficiente/saldo-insuficiente.component";
import { CompraFinalizadaComponent } from "./components/compra-finalizada/compra-finalizada.component";
import { CompraDetalleComponent } from './containers/compra-detalle/compra-detalle.component';
import { CompraCanceladaComponent } from './components/compra-cancelada/compra-cancelada.component';

@NgModule({
  declarations: [
    PaymentComponent,
    ShoppingCartComponent,
    SummaryComponent,
    TotalsComponent,
    ConfirmacionDeCompraComponent,
    SaldoInsuficienteComponent,
    CompraFinalizadaComponent,
    CompraDetalleComponent,
    CompraCanceladaComponent
  ],
  entryComponents: [
    ShoppingCartComponent,
    SummaryComponent,
    TotalsComponent,
    ConfirmacionDeCompraComponent,
    SaldoInsuficienteComponent,
    CompraFinalizadaComponent
  ],
  imports: [CommonModule, PaymentRoutingModule],
  exports: [
    ConfirmacionDeCompraComponent,
    CompraFinalizadaComponent,
    SaldoInsuficienteComponent
  ]
})
export class PaymentModule {}
