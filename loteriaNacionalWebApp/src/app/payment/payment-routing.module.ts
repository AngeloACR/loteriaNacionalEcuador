import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaymentComponent } from "./payment.component";
import { CompraDetalleComponent } from "./containers/compra-detalle/compra-detalle.component";

const routes: Routes = [
  {
    path: "",
    component: PaymentComponent,
    children: [{ path: "detalle/:id", component: CompraDetalleComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
