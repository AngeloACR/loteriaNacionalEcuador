import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { DescuentosComponent } from './descuentos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DescuentosComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    DescuentosRoutingModule
  ]
})
export class DescuentosModule { }
