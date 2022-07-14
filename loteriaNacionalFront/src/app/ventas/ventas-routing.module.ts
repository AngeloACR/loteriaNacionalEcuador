import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleDeVentaComponent } from './containers/detalle-de-venta/detalle-de-venta.component';
import { HomeComponent } from './containers/home/home.component';
import { LoteriaComponent } from './containers/loteria/loteria.component';
import { LottoComponent } from './containers/lotto/lotto.component';
import { MillonariaComponent } from './containers/millonaria/millonaria.component';
import { PozoComponent } from './containers/pozo/pozo.component';
import { VentasComponent } from './ventas.component';

const routes: Routes = [
  {
    path: '',
    component: VentasComponent,
    children: [{ path: 'detalle/:id', component: DetalleDeVentaComponent },
    { path: "loteria/:token", component: LoteriaComponent },
    { path: "millonaria/:token", component: MillonariaComponent },
    { path: "lotto/:token", component: LottoComponent },
    {
      path: "pozo/:token",
      component: PozoComponent
    },
    { path: ":token", component: HomeComponent }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}