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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
