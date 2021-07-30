import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { InquiryRoutingModule } from "./inquiry-routing.module";
import { InquiryComponent } from "./inquiry.component";
import { LottoConsultaComponent } from "./components/lotto-consulta/lotto-consulta.component";
import { LoteriaNacionalConsultaComponent } from "./components/loteria-nacional-consulta/loteria-nacional-consulta.component";
import { PozoMillonarioConsultaComponent } from "./components/pozo-millonario-consulta/pozo-millonario-consulta.component";
import { LottoSelectorComponent } from "./components/lotto-selector/lotto-selector.component";
import { LoteriaNacionalSelectorComponent } from "./components/loteria-nacional-selector/loteria-nacional-selector.component";
import { PozoMillonarioSelectorComponent } from "./components/pozo-millonario-selector/pozo-millonario-selector.component";
import { LottoTicketComponent } from "./components/lotto-ticket/lotto-ticket.component";
import { LoteriaNacionalTicketComponent } from "./components/loteria-nacional-ticket/loteria-nacional-ticket.component";
import { PozoMillonarioTicketComponent } from "./components/pozo-millonario-ticket/pozo-millonario-ticket.component";
import { LottoBoletinComponent } from "./components/lotto-boletin/lotto-boletin.component";
import { LoteriaNacionalBoletinComponent } from "./components/loteria-nacional-boletin/loteria-nacional-boletin.component";
import { PozoMillonarioBoletinComponent } from "./components/pozo-millonario-boletin/pozo-millonario-boletin.component";
import { SeleccionTipoComponent } from "./components/seleccion-tipo/seleccion-tipo.component";
import { SeleccionComponent } from "./containers/seleccion/seleccion.component";
import { BoletinLottoComponent } from "./containers/boletin-lotto/boletin-lotto.component";
import { BoletinLoteriaNacionalComponent } from "./containers/boletin-loteria-nacional/boletin-loteria-nacional.component";
import { BoletinPozoMillonarioComponent } from "./containers/boletin-pozo-millonario/boletin-pozo-millonario.component";

import { ConsultaLottoComponent } from "./containers/consulta-lotto/consulta-lotto.component";
import { ConsultaPozoMillonarioComponent } from "./containers/consulta-pozo-millonario/consulta-pozo-millonario.component";
import { ConsultaLoteriaNacionalComponent } from "./containers/consulta-loteria-nacional/consulta-loteria-nacional.component";
import { ResultadosLottoComponent } from "./containers/resultados-lotto/resultados-lotto.component";
import { ResultadosLoteriaNacionalComponent } from "./containers/resultados-loteria-nacional/resultados-loteria-nacional.component";
import { ResultadosPozoMillonarioComponent } from "./containers/resultados-pozo-millonario/resultados-pozo-millonario.component";
import { ResultadosComponent } from "./components/resultados/resultados.component";
import { ResultadoComponent } from "./components/resultado/resultado.component";

@NgModule({
  declarations: [
    InquiryComponent,
    SeleccionComponent,
    BoletinLottoComponent,
    BoletinLoteriaNacionalComponent,
    BoletinPozoMillonarioComponent,
    ConsultaLottoComponent,
    ConsultaPozoMillonarioComponent,
    ConsultaLoteriaNacionalComponent,
    ResultadosLottoComponent,
    ResultadosLoteriaNacionalComponent,
    ResultadosPozoMillonarioComponent,
    LottoConsultaComponent,
    LoteriaNacionalConsultaComponent,
    PozoMillonarioConsultaComponent,
    LottoSelectorComponent,
    LoteriaNacionalSelectorComponent,
    PozoMillonarioSelectorComponent,
    LottoTicketComponent,
    LoteriaNacionalTicketComponent,
    PozoMillonarioTicketComponent,
    LottoBoletinComponent,
    LoteriaNacionalBoletinComponent,
    PozoMillonarioBoletinComponent,
    SeleccionTipoComponent,
    ResultadosComponent,
    ResultadoComponent
  ],
  entryComponents: [
    LottoConsultaComponent,
    LoteriaNacionalConsultaComponent,
    PozoMillonarioConsultaComponent,
    LottoSelectorComponent,
    LoteriaNacionalSelectorComponent,
    PozoMillonarioSelectorComponent,
    LottoTicketComponent,
    LoteriaNacionalTicketComponent,
    PozoMillonarioTicketComponent,
    LottoBoletinComponent,
    LoteriaNacionalBoletinComponent,
    PozoMillonarioBoletinComponent,
    SeleccionTipoComponent,
    ResultadosComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    InquiryRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LottoSelectorComponent,
    LoteriaNacionalSelectorComponent,
    PozoMillonarioSelectorComponent,
    LottoTicketComponent,
    LoteriaNacionalTicketComponent,
    PozoMillonarioTicketComponent
  ]
})
export class InquiryModule {}
