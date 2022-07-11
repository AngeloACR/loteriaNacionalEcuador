import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CodigosPromocionalesRoutingModule } from './codigos-promocionales-routing.module';
import { CodigosPromocionalesComponent } from './codigos-promocionales.component';
import { PopupPromoComponent } from './components/popup-promo/popup-promo.component';


@NgModule({
  declarations: [CodigosPromocionalesComponent, PopupPromoComponent],
  exports: [PopupPromoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CodigosPromocionalesRoutingModule
  ]
})
export class CodigosPromocionalesModule { }
