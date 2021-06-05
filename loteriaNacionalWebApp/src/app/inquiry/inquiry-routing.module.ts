import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoletinLoteriaNacionalComponent } from "./containers/boletin-loteria-nacional/boletin-loteria-nacional.component";
import { BoletinLottoComponent } from "./containers/boletin-lotto/boletin-lotto.component";
import { BoletinPozoMillonarioComponent } from "./containers/boletin-pozo-millonario/boletin-pozo-millonario.component";

import { ConsultaLottoComponent } from "./containers/consulta-lotto/consulta-lotto.component";
import { ConsultaPozoMillonarioComponent } from "./containers/consulta-pozo-millonario/consulta-pozo-millonario.component";
import { ConsultaLoteriaNacionalComponent } from "./containers/consulta-loteria-nacional/consulta-loteria-nacional.component";

import { InquiryComponent } from "./inquiry.component";

const routes: Routes = [
  {
    path: "",
    component: InquiryComponent,
    children: [
      { path: "inquiry", component: InquiryComponent },
      { path: "lottery_boletin", component: BoletinLoteriaNacionalComponent },
      { path: "lotto_boletin", component: BoletinLottoComponent },
      {
        path: "pozo_millonario_boletin",
        component: BoletinPozoMillonarioComponent
      },
      { path: "lottery_consulta", component: ConsultaLoteriaNacionalComponent },
      { path: "lotto_consulta", component: ConsultaLottoComponent },
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
