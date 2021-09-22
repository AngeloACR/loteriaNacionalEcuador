import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { TotalsComponent } from "./components/totals/totals.component";
import { ConfirmacionDeCompraComponent } from "./components/confirmacion-de-compra/confirmacion-de-compra.component";
import { SaldoInsuficienteComponent } from "./components/saldo-insuficiente/saldo-insuficiente.component";
import { CompraFinalizadaComponent } from "./components/compra-finalizada/compra-finalizada.component";
import { CompraDetalleComponent } from "./containers/compra-detalle/compra-detalle.component";
import { CompraCanceladaComponent } from "./components/compra-cancelada/compra-cancelada.component";
import { CompraDescripcionComponent } from "./components/compra-descripcion/compra-descripcion.component";

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
    CompraCanceladaComponent,
    CompraDescripcionComponent,
  ],
  entryComponents: [
    ShoppingCartComponent,
    SummaryComponent,
    TotalsComponent,
    ConfirmacionDeCompraComponent,
    SaldoInsuficienteComponent,
    CompraFinalizadaComponent,
  ],
  imports: [CommonModule, SharedModule, PaymentRoutingModule],
  exports: [
    ConfirmacionDeCompraComponent,
    CompraFinalizadaComponent,
    SaldoInsuficienteComponent,
    CompraCanceladaComponent,
  ],
})
export class PaymentModule {}
