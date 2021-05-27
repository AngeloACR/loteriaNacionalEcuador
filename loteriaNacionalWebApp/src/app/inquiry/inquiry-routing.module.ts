import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoteriaNacionalConsultaComponent } from "./components/loteria-nacional-consulta/loteria-nacional-consulta.component";
import { LottoConsultaComponent } from "./components/lotto-consulta/lotto-consulta.component";
import { PozoMillonarioConsultaComponent } from "./components/pozo-millonario-consulta/pozo-millonario-consulta.component";

import { InquiryComponent } from "./inquiry.component";

const routes: Routes = [
  {
    path: "",
    component: InquiryComponent,
    children: [
      { path: "lottery_consulta", component: LoteriaNacionalConsultaComponent },
      { path: "inquiry", component: InquiryComponent },
      { path: "lotto_consulta", component: LottoConsultaComponent },
      { path: "pozo_millonario_consulta", component: PozoMillonarioConsultaComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiryRoutingModule {}
