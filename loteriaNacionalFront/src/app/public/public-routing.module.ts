import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: ':token', component: PublicComponent },
/*   {
    path: 'consultas',
    loadChildren: () =>
      import('../consultas/consultas.module').then((m) => m.ConsultasModule),
  },
  {
    path: 'compra_tus_juegos',
    loadChildren: () =>
      import('../ventas/ventas.module').then((m) => m.VentasModule),
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
