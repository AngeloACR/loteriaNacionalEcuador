import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { LoteriaComponent } from './containers/loteria/loteria.component';
import { PozoComponent } from './containers/pozo/pozo.component';
import { LottoComponent } from './containers/lotto/lotto.component';
import { MillonariaComponent } from './containers/millonaria/millonaria.component';
import { UltimosResultadosComponent } from './components/ultimos-resultados/ultimos-resultados.component';
import { LoteriaBoletinComponent } from './containers/loteria-boletin/loteria-boletin.component';
import { LottoBoletinComponent } from './containers/lotto-boletin/lotto-boletin.component';
import { PozoBoletinComponent } from './containers/pozo-boletin/pozo-boletin.component';
import { MillonariaBoletinComponent } from './containers/millonaria-boletin/millonaria-boletin.component';
import { LoteriaModule } from '../juegos/loteria/loteria.module';
import { LottoModule } from '../juegos/lotto/lotto.module';
import { PozoModule } from '../juegos/pozo/pozo.module';
import { MillonariaModule } from '../juegos/millonaria/millonaria.module';
import { VentasModule } from '../ventas/ventas.module';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RevanchaComponent } from './containers/revancha/revancha.component';
import { RevanchaBoletinComponent } from './containers/revancha-boletin/revancha-boletin.component';
import { PozoRevanchaModule } from '../juegos/pozoRevancha/pozo-revancha.module';
import { FacilottoComponent } from './containers/facilotto/facilotto.component';
import { FacilottoBoletinComponent } from './containers/facilotto-boletin/facilotto-boletin.component';
import { FacilottoModule } from '../juegos/facilotto/facilotto.module';
import { Pega3BoletinComponent } from './containers/pega3-boletin/pega3-boletin.component';
import { Pega3Module } from '../juegos/pega3/pega3.module';

@NgModule({
  declarations: [
    ConsultasComponent,
    MenuComponent,
    ResultadoComponent,
    ResultadosComponent,
    LoteriaComponent,
    PozoComponent,
    LottoComponent,
    MillonariaComponent,
    UltimosResultadosComponent,
    LoteriaBoletinComponent,
    LottoBoletinComponent,
    PozoBoletinComponent,
    MillonariaBoletinComponent,
    Pega3BoletinComponent,
    HomeComponent,
    RevanchaComponent,
    RevanchaBoletinComponent,
    FacilottoComponent,
    FacilottoBoletinComponent,
  ],
  exports: [
    ConsultasComponent,
    MenuComponent,
    ResultadoComponent,
    ResultadosComponent,
    LoteriaComponent,
    PozoComponent,
    LottoComponent,
    MillonariaComponent,
    UltimosResultadosComponent,
    LoteriaBoletinComponent,
    LottoBoletinComponent,
    PozoBoletinComponent,
    MillonariaBoletinComponent,
    HomeComponent,
    RevanchaComponent,
    RevanchaBoletinComponent,
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    LoteriaModule,
    LottoModule,
    Pega3Module,
    FacilottoModule,
    PozoModule,
    PozoRevanchaModule,
    MillonariaModule,
    VentasModule,
    SharedModule,
  ],
})
export class ConsultasModule {}
