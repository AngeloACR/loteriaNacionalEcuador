import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteriaRoutingModule } from './loteria-routing.module';
import { LoteriaComponent } from './loteria.component';


@NgModule({
  declarations: [LoteriaComponent],
  imports: [
    CommonModule,
    LoteriaRoutingModule
  ]
})
export class LoteriaModule { }
