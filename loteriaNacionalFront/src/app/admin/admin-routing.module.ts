import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '', redirectTo: 'descuentos', pathMatch: 'full'
}, {
  path: 'descuentos', loadChildren: () => import('./descuentos/descuentos.module').then(m => m.DescuentosModule)
}, {
  path: 'codigosPromocionales', loadChildren: () => import('./codigos-promocionales/codigos-promocionales.module').then(m => m.CodigosPromocionalesModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
