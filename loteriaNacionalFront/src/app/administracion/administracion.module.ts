import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { PopupPromoComponent } from './components/popup-promo/popup-promo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdministracionComponent, PopupPromoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AdministracionRoutingModule,
  ],
  exports: [PopupPromoComponent],
})
export class AdministracionModule {}
