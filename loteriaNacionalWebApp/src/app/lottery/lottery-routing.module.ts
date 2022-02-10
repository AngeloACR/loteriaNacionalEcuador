import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoteriaComponent } from "./containers/loteria/loteria.component";
import { LottoComponent } from "./containers/lotto/lotto.component";
import { PozoMillonarioComponent } from "./containers/pozo-millonario/pozo-millonario.component";
import { SeleccionComponent } from "./containers/seleccion/seleccion.component";

import { LotteryComponent } from "./lottery.component";

const routes: Routes = [
  {
    path: "",
    component: LotteryComponent,
    children: [
      { path: "loteria/:token", component: LoteriaComponent },
      { path: "lotto/:token", component: LottoComponent },
      {
        path: "pozo-millonario/:token",
        component: PozoMillonarioComponent
      },
      { path: "", component: SeleccionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRoutingModule {}
