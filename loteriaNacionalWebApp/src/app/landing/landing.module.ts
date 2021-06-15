import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { GanadoresComponent, SafePipe } from './containers/ganadores/ganadores.component';


@NgModule({
  declarations: [LandingComponent, GanadoresComponent, SafePipe],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
