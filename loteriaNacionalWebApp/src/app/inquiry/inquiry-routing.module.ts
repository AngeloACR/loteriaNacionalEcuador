import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoletinLoteriaNacionalComponent } from "./containers/boletin-loteria-nacional/boletin-loteria-nacional.component";
import { BoletinLottoComponent } from "./containers/boletin-lotto/boletin-lotto.component";
import { BoletinPozoMillonarioComponent } from "./containers/boletin-pozo-millonario/boletin-pozo-millonario.component";

import { ConsultaLottoComponent } from "./containers/consulta-lotto/consulta-lotto.component";
import { SeleccionComponent } from "./containers/seleccion/seleccion.component";
import { RaspasComponent } from "./containers/raspas/raspas.component";
import { ConsultaPozoMillonarioComponent } from "./containers/consulta-pozo-millonario/consulta-pozo-millonario.component";
import { ConsultaLoteriaNacionalComponent } from "./containers/consulta-loteria-nacional/consulta-loteria-nacional.component";

import { InquiryComponent } from "./inquiry.component";

const routes: Routes = [
  {
    path: "",
    component: InquiryComponent,
    children: [
      {
        path: "loteria_boletin/:sorteo",
        component: BoletinLoteriaNacionalComponent
      },
      { path: "lotto_boletin/:sorteo", component: BoletinLottoComponent },
      {
        path: "pozo_millonario_boletin/:sorteo",
        component: BoletinPozoMillonarioComponent
      },
      { path: "loteria_consulta", component: ConsultaLoteriaNacionalComponent },
      { path: "lotto_consulta", component: ConsultaLottoComponent },
      { path: "ultimos_resultados", component: SeleccionComponent },
      { path: "raspas", component: RaspasComponent },
      {
        path: "pozo_millonario_consulta",
        component: ConsultaPozoMillonarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule {}
