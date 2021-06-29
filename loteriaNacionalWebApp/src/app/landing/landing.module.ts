import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import {
  GanadoresComponent,
  SafePipe
} from "./containers/ganadores/ganadores.component";
import { InstruccionesComponent } from "./containers/instrucciones/instrucciones.component";
import { LoteriaNacionalSelectorComponent } from "./components/loteria-nacional-selector/loteria-nacional-selector.component";
import { LottoSelectorComponent } from "./components/lotto-selector/lotto-selector.component";
import { PozoMillonarioSelectorComponent } from "./components/pozo-millonario-selector/pozo-millonario-selector.component";
import { LoteriaNacionalTicketComponent } from "./components/loteria-nacional-ticket/loteria-nacional-ticket.component";
import { LottoTicketComponent } from "./components/lotto-ticket/lotto-ticket.component";
import { PozoMillonarioTicketComponent } from "./components/pozo-millonario-ticket/pozo-millonario-ticket.component";

@NgModule({
  declarations: [
    LandingComponent,
    GanadoresComponent,
    SafePipe,
    LoteriaNacionalTicketComponent,
    LottoTicketComponent,
    PozoMillonarioTicketComponent,
    InstruccionesComponent,
    LoteriaNacionalSelectorComponent,
    LottoSelectorComponent,
    PozoMillonarioSelectorComponent
  ],
  imports: [CommonModule, LandingRoutingModule]
})
export class LandingModule {}
