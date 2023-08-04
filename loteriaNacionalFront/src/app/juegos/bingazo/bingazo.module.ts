import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaComponent } from './components/consulta/consulta.component';
import { BoletinComponent } from './components/boletin/boletin.component';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { VentaComponent } from './components/venta/venta.component';
import { UltimoResultadoComponent } from './components/ultimo-resultado/ultimo-resultado.component';
import { TicketConsultaComponent } from './components/ticket-consulta/ticket-consulta.component';
import { TicketVentasComponent } from './components/ticket-ventas/ticket-ventas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultaComponent,
    BoletinComponent,
    SorteoComponent,
    VentaComponent,
    UltimoResultadoComponent,
    TicketConsultaComponent,
    TicketVentasComponent,
  ],
  exports: [
    ConsultaComponent,
    SorteoComponent,
    VentaComponent,
    BoletinComponent,
    UltimoResultadoComponent,
    TicketConsultaComponent,
    TicketVentasComponent,
  ],

  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class BingazoModule {}
