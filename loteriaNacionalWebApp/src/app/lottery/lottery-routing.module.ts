import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoteriaComponent } from './components/loteria/loteria.component';
import { LottoComponent } from './components/lotto/lotto.component';
import { PozoMillonarioComponent } from './components/pozo-millonario/pozo-millonario.component';

import { LotteryComponent } from './lottery.component';

const routes: Routes = [
  { 
    path: '', component: LotteryComponent ,
    children: [
      { path: 'loteria', component: LoteriaComponent },
      { path: 'lotto', component: LottoComponent },
      { path: 'pozo-millonario', component: PozoMillonarioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRoutingModule { }
