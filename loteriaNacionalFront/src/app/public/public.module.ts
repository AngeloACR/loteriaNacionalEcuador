import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { ConsultasModule } from '../consultas/consultas.module';
import { VentasModule } from '../ventas/ventas.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    ConsultasModule,
    VentasModule,
  ]
})
export class PublicModule { }
