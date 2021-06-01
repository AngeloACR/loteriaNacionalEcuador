<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiryComponent } from './inquiry.component';

const routes: Routes = [{ path: '', component: InquiryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoletinLoteriaNacionalComponent } from "./containers/boletin-loteria-nacional/boletin-loteria-nacional.component";
import { BoletinLottoComponent } from "./containers/boletin-lotto/boletin-lotto.component";
import { BoletinPozoMillonarioComponent } from "./containers/boletin-pozo-millonario/boletin-pozo-millonario.component";

import { InquiryComponent } from "./inquiry.component";

const routes: Routes = [
  {
    path: "",
    component: InquiryComponent,
    children: [
      { path: "lottery_consulta", component:  BoletinLoteriaNacionalComponent },
      { path: "inquiry", component: InquiryComponent },
      { path: "lotto_consulta", component: BoletinLottoComponent },
      { path: "pozo_millonario_consulta", component: BoletinPozoMillonarioComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiryRoutingModule {}
>>>>>>> jefferson
