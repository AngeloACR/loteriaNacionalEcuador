import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigosPromocionalesComponent } from './codigos-promocionales.component';

const routes: Routes = [{ path: '', component: CodigosPromocionalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodigosPromocionalesRoutingModule { }
