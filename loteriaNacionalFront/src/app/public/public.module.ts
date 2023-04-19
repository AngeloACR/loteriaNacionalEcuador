import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { ConsultasModule } from '../consultas/consultas.module';
import { VentasModule } from '../ventas/ventas.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    SharedModule,
    ConsultasModule,
    VentasModule,
  ]
})
export class PublicModule { }
