import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CodigosPromocionalesRoutingModule } from './codigos-promocionales-routing.module';
import { CodigosPromocionalesComponent } from './codigos-promocionales.component';
import { PopupPromoComponent } from './components/popup-promo/popup-promo.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CodigosPromocionalesComponent, PopupPromoComponent],
  exports: [PopupPromoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CodigosPromocionalesRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CodigosPromocionalesModule { }
