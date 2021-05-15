import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryRoutingModule } from './lottery-routing.module';
import { LotteryComponent } from './lottery.component';
import { SingleInquiryComponent } from './components/single-inquiry/single-inquiry.component';
import { LotteryTypeComponent } from './components/lottery-type/lottery-type.component';
import { NumberSelectionComponent } from './components/number-selection/number-selection.component';
import { TicketConfirmationComponent } from './components/ticket-confirmation/ticket-confirmation.component';
import { AllInquiryComponent } from './components/all-inquiry/all-inquiry.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TicketSelectionComponent } from './components/ticket-selection/ticket-selection.component';
import { LoteriaComponent } from './components/loteria/loteria.component';
import { LottoComponent } from './components/lotto/lotto.component';
import { PozoMillonarioComponent } from './components/pozo-millonario/pozo-millonario.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TicketScrollerComponent } from './components/ticket-scroller/ticket-scroller.component';
import { LottoTicketComponent } from './components/lotto-ticket/lotto-ticket.component';
import { LoteriaNacionalTicketComponent } from './components/loteria-nacional-ticket/loteria-nacional-ticket.component';
import { PozoMillonarioTicketComponent } from './components/pozo-millonario-ticket/pozo-millonario-ticket.component';
import { LottoConfiguradorComponent } from './components/lotto-configurador/lotto-configurador.component';
import { LoteriaNacionalConfiguradorComponent } from './components/loteria-nacional-configurador/loteria-nacional-configurador.component';
import { PozoMillonarioConfiguradorComponent } from './components/pozo-millonario-configurador/pozo-millonario-configurador.component';
import { SeleccionTipoComponent } from './components/seleccion-tipo/seleccion-tipo.component';
import { SeleccionComponent } from './containers/seleccion/seleccion.component';
import { ResumenComponent } from './containers/resumen/resumen.component';


@NgModule({
  declarations: [LotteryComponent, SingleInquiryComponent, LotteryTypeComponent, NumberSelectionComponent, TicketConfirmationComponent, AllInquiryComponent, SidemenuComponent, TicketSelectionComponent, LoteriaComponent, LottoComponent, PozoMillonarioComponent, SelectorComponent, TicketScrollerComponent, LottoTicketComponent, LoteriaNacionalTicketComponent, PozoMillonarioTicketComponent, LottoConfiguradorComponent, LoteriaNacionalConfiguradorComponent, PozoMillonarioConfiguradorComponent, SeleccionTipoComponent, SeleccionComponent, ResumenComponent],
  imports: [
    CommonModule,
    LotteryRoutingModule
  ]
})
export class LotteryModule { }
