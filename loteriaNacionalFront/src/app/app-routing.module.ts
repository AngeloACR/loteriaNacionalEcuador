import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' }, 
  {
    path: 'inicio',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'consultas',
    loadChildren: () =>
      import('./consultas/consultas.module').then((m) => m.ConsultasModule),
  },
  {
    path: 'compra_tus_juegos',
    loadChildren: () =>
      import('./ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'codigosPromocionales',
    loadChildren: () =>
      import('./codigos-promocionales/codigos-promocionales.module').then((m) => m.CodigosPromocionalesModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
