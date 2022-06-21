import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CodigosPromocionalesRoutingModule } from './codigos-promocionales-routing.module';
import { CodigosPromocionalesComponent } from './codigos-promocionales.component';


@NgModule({
  declarations: [CodigosPromocionalesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CodigosPromocionalesRoutingModule
  ]
})
export class CodigosPromocionalesModule { }
