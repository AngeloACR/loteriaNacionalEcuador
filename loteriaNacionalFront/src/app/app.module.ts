import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoteriaModule } from './juegos/loteria/loteria.module';
import { LottoModule } from './juegos/lotto/lotto.module';
import { PozoModule } from './juegos/pozo/pozo.module';
import { MillonariaModule } from './juegos/millonaria/millonaria.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CodigosPromocionalesModule } from './codigos-promocionales/codigos-promocionales.module';

import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { AdministracionModule } from './administracion/administracion.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    LoteriaModule,
    LottoModule,
    PozoModule,
    MillonariaModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    CodigosPromocionalesModule,
    AdministracionModule,
  ],
  exports: [MatPaginatorModule, MatFormFieldModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
