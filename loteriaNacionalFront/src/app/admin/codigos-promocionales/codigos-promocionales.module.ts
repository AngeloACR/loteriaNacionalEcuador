import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodigosPromocionalesRoutingModule } from './codigos-promocionales-routing.module';
import { CodigosPromocionalesComponent } from './codigos-promocionales.component';


@NgModule({
  declarations: [
    CodigosPromocionalesComponent
  ],
  imports: [
    CommonModule,
    CodigosPromocionalesRoutingModule
  ]
})
export class CodigosPromocionalesModule { }
