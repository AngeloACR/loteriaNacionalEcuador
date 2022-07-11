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
    HomeComponent,
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
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    LoteriaModule,
    LottoModule,
    PozoModule,
    MillonariaModule,
    VentasModule,
    SharedModule,
  ],
})
export class ConsultasModule {}
