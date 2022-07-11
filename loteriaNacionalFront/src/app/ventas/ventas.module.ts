import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { ConfirmacionDeVentaComponent } from './components/confirmacion-de-venta/confirmacion-de-venta.component';
import { VentaFinalizadaComponent } from './components/venta-finalizada/venta-finalizada.component';
import { DescripcionDeVentaComponent } from './components/descripcion-de-venta/descripcion-de-venta.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InstantaneaComponent } from './components/instantanea/instantanea.component';
import { InstantaneasComponent } from './components/instantaneas/instantaneas.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';
import { DetalleDeVentaComponent } from './containers/detalle-de-venta/detalle-de-venta.component';
import { LoteriaComponent } from './containers/loteria/loteria.component';
import { PozoComponent } from './containers/pozo/pozo.component';
import { LottoComponent } from './containers/lotto/lotto.component';
import { MillonariaComponent } from './containers/millonaria/millonaria.component';
import { DetalleSorteoComponent } from './components/detalle-sorteo/detalle-sorteo.component';
import { LoteriaModule } from '../juegos/loteria/loteria.module';
import { LottoModule } from '../juegos/lotto/lotto.module';
import { PozoModule } from '../juegos/pozo/pozo.module';
import { MillonariaModule } from '../juegos/millonaria/millonaria.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { BotonDeJuegoComponent } from './components/boton-de-juego/boton-de-juego.component';
import { VentaCanceladaComponent } from './components/venta-cancelada/venta-cancelada.component';
import { SaldoInsuficienteComponent } from './components/saldo-insuficiente/saldo-insuficiente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    VentasComponent,
    ConfirmacionDeVentaComponent,
    VentaFinalizadaComponent,
    DescripcionDeVentaComponent,
    CarritoComponent,
    InstantaneaComponent,
    InstantaneasComponent,
    MenuHeaderComponent,
    MenuBoxComponent,
    FloatingMenuComponent,
    DetalleDeVentaComponent,
    LoteriaComponent,
    PozoComponent,
    LottoComponent,
    MillonariaComponent,
    DetalleSorteoComponent,
    HomeComponent,
    BotonDeJuegoComponent,
    VentaCanceladaComponent,
    SaldoInsuficienteComponent,
  ],
  exports: [
    VentasComponent,
    ConfirmacionDeVentaComponent,
    VentaFinalizadaComponent,
    DescripcionDeVentaComponent,
    CarritoComponent,
    InstantaneaComponent,
    InstantaneasComponent,
    MenuHeaderComponent,
    MenuBoxComponent,
    FloatingMenuComponent,
    DetalleDeVentaComponent,
    LoteriaComponent,
    PozoComponent,
    LottoComponent,
    MillonariaComponent,
  ],
  imports: [
    CommonModule,
    LoteriaModule,
    LottoModule,
    PozoModule,
    MillonariaModule,
    SharedModule,
    VentasRoutingModule,
    FormsModule,

    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
})
export class VentasModule {}
