import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoteriaComponent } from "./containers/loteria/loteria.component";
import { LottoComponent } from "./containers/lotto/lotto.component";
import { PozoMillonarioComponent } from "./containers/pozo-millonario/pozo-millonario.component";
import { SeleccionComponent } from "./containers/seleccion/seleccion.component";
import { ResumenComponent } from "./containers/resumen/resumen.component";

import { LotteryComponent } from "./lottery.component";

const routes: Routes = [
  {
    path: "",
    component: LotteryComponent,
    children: [
      { path: "loteria", component: LoteriaComponent },
      { path: "resumen", component: ResumenComponent },
      { path: "", component: SeleccionComponent },
      { path: "lotto", component: LottoComponent },
      { path: "pozo-millonario", component: PozoMillonarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRoutingModule {}
