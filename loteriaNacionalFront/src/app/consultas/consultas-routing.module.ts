import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { HomeComponent } from './containers/home/home.component';
import { LoteriaBoletinComponent } from './containers/loteria-boletin/loteria-boletin.component';
import { LoteriaComponent } from './containers/loteria/loteria.component';
import { LottoBoletinComponent } from './containers/lotto-boletin/lotto-boletin.component';
import { LottoComponent } from './containers/lotto/lotto.component';
import { MillonariaBoletinComponent } from './containers/millonaria-boletin/millonaria-boletin.component';
import { MillonariaComponent } from './containers/millonaria/millonaria.component';
import { PozoBoletinComponent } from './containers/pozo-boletin/pozo-boletin.component';
import { PozoComponent } from './containers/pozo/pozo.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultasComponent,
    children: [
      {
        path: 'loteria/boletin/:sorteo',
        component: LoteriaBoletinComponent,
      },
      { path: 'lotto/boletin/:sorteo', component: LottoBoletinComponent },
      {
        path: 'pozo/boletin/:sorteo',
        component: PozoBoletinComponent,
      },
      {
        path: 'millonaria/boletin/:sorteo',
        component: MillonariaBoletinComponent,
      },
      { path: 'loteria', component: LoteriaComponent },
      { path: 'lotto', component: LottoComponent },
      {
        path: 'pozo',
        component: PozoComponent,
      },
      { path: 'millonaria', component: MillonariaComponent },
      { path: '', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasRoutingModule {}
