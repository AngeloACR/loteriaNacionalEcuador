import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoteriaComponent } from './loteria.component';

const routes: Routes = [{ path: '', component: LoteriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteriaRoutingModule { }
