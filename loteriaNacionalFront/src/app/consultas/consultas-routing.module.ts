import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { FacilottoBoletinComponent } from './containers/facilotto-boletin/facilotto-boletin.component';
import { FacilottoComponent } from './containers/facilotto/facilotto.component';
import { HomeComponent } from './containers/home/home.component';
import { LoteriaBoletinComponent } from './containers/loteria-boletin/loteria-boletin.component';
import { LoteriaComponent } from './containers/loteria/loteria.component';
import { LottoBoletinComponent } from './containers/lotto-boletin/lotto-boletin.component';
import { LottoComponent } from './containers/lotto/lotto.component';
import { MillonariaBoletinComponent } from './containers/millonaria-boletin/millonaria-boletin.component';
import { MillonariaComponent } from './containers/millonaria/millonaria.component';
import { PozoBoletinComponent } from './containers/pozo-boletin/pozo-boletin.component';
import { PozoComponent } from './containers/pozo/pozo.component';
import { RevanchaBoletinComponent } from './containers/revancha-boletin/revancha-boletin.component';
import { RevanchaComponent } from './containers/revancha/revancha.component';
import { Pega3BoletinComponent } from './containers/pega3-boletin/pega3-boletin.component';
import { BingazoBoletinComponent } from './containers/bingazo-boletin/bingazo-boletin.component';
import { BingazoComponent } from './containers/bingazo/bingazo.component';

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
        path: 'facilotto/boletin/:sorteo',
        component: FacilottoBoletinComponent,
      },
      {
        path: 'pozo/boletin/:sorteo',
        component: PozoBoletinComponent,
      },
      {
        path: 'revancha/boletin/:sorteo',
        component: RevanchaBoletinComponent,
      },
      {
        path: 'millonaria/boletin/:sorteo',
        component: MillonariaBoletinComponent,
      },
      {
        path: 'pega3/boletin',
        component: Pega3BoletinComponent,
      },
      { path: 'loteria', component: LoteriaComponent },
      {
        path: 'bingazo/boletin',
        component: BingazoBoletinComponent,
      },
      { path: 'bingazo', component: BingazoComponent },
      { path: 'lotto', component: LottoComponent },
      { path: 'facilotto', component: FacilottoComponent },
      {
        path: 'pozo',
        component: PozoComponent,
      },
      {
        path: 'revancha',
        component: RevanchaComponent,
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
export class ConsultasRoutingModule { }
