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


@NgModule({
  declarations: [LotteryComponent, SingleInquiryComponent, LotteryTypeComponent, NumberSelectionComponent, TicketConfirmationComponent, AllInquiryComponent, SidemenuComponent, TicketSelectionComponent, LoteriaComponent, LottoComponent, PozoMillonarioComponent],
  imports: [
    CommonModule,
    LotteryRoutingModule
  ]
})
export class LotteryModule { }
