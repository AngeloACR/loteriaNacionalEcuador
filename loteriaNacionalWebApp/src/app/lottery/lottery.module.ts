import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { PaymentModule } from "../payment/payment.module";

import { PozoMillonarioComponent } from "./containers/pozo-millonario/pozo-millonario.component";
import { LoteriaComponent } from "./containers/loteria/loteria.component";
import { LottoComponent } from "./containers/lotto/lotto.component";
import { SeleccionComponent } from "./containers/seleccion/seleccion.component";
import { ResumenComponent } from "./containers/resumen/resumen.component";

import { LotteryRoutingModule } from "./lottery-routing.module";
import { LotteryComponent } from "./lottery.component";
import { LotteryTypeComponent } from "./components/lottery-type/lottery-type.component";
import { NumberSelectionComponent } from "./components/number-selection/number-selection.component";
import { TicketConfirmationComponent } from "./components/ticket-confirmation/ticket-confirmation.component";
import { TicketSelectionComponent } from "./components/ticket-selection/ticket-selection.component";
import { TicketScrollerComponent } from "./components/ticket-scroller/ticket-scroller.component";
import { LottoTicketComponent } from "./components/lotto-ticket/lotto-ticket.component";
import { LoteriaNacionalTicketComponent } from "./components/loteria-nacional-ticket/loteria-nacional-ticket.component";
import { PozoMillonarioTicketComponent } from "./components/pozo-millonario-ticket/pozo-millonario-ticket.component";
import { LottoConfiguradorComponent } from "./components/lotto-configurador/lotto-configurador.component";
import { LoteriaNacionalConfiguradorComponent } from "./components/loteria-nacional-configurador/loteria-nacional-configurador.component";
import { PozoMillonarioConfiguradorComponent } from "./components/pozo-millonario-configurador/pozo-millonario-configurador.component";
import { SeleccionTipoComponent } from "./components/seleccion-tipo/seleccion-tipo.component";
import { InfoLoteriaComponent } from "./components/info-loteria/info-loteria.component";
import { PaginatePipe } from "./pipes/paginate.pipe";

/* import { NgxPaginationModule } from 'ngx-pagination'; */
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from "@angular/material/paginator";
import { StylePaginatorDirective } from "./style-paginator.directive";
import { AutoTabDirective } from "./autotab.directive";

import { FormsModule } from "@angular/forms";
import { getSpanishPaginatorIntl } from "./paginacion-es";
import { ResultadoInstantaneaComponent } from "./components/resultado-instantanea/resultado-instantanea.component";
import { ResultadosInstantaneasComponent } from "./components/resultados-instantaneas/resultados-instantaneas.component";

@NgModule({
  declarations: [
    LotteryComponent,

    AutoTabDirective,
    LoteriaComponent,
    LottoComponent,
    PozoMillonarioComponent,
    SeleccionComponent,
    ResumenComponent,
    LotteryTypeComponent,
    NumberSelectionComponent,
    TicketConfirmationComponent,
    TicketSelectionComponent,
    TicketScrollerComponent,
    LottoTicketComponent,
    LoteriaNacionalTicketComponent,
    PozoMillonarioTicketComponent,
    LottoConfiguradorComponent,
    LoteriaNacionalConfiguradorComponent,
    PozoMillonarioConfiguradorComponent,
    SeleccionTipoComponent,
    InfoLoteriaComponent,
    PaginatePipe,
    StylePaginatorDirective,
    ResultadoInstantaneaComponent,
    ResultadosInstantaneasComponent,
  ],
  entryComponents: [
    LotteryTypeComponent,
    NumberSelectionComponent,
    TicketConfirmationComponent,
    TicketSelectionComponent,
    TicketScrollerComponent,
    LottoTicketComponent,
    LoteriaNacionalTicketComponent,
    PozoMillonarioTicketComponent,
    LottoConfiguradorComponent,
    LoteriaNacionalConfiguradorComponent,
    PozoMillonarioConfiguradorComponent,
    SeleccionTipoComponent,
  ],
  imports: [
    CommonModule,
    LotteryRoutingModule,
    /* NgxPaginationModule, */

    MatPaginatorModule,
    SharedModule,
    PaymentModule,
    FormsModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl(),
    },
  ],
})
export class LotteryModule {}
