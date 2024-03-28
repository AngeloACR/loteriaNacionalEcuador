import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { DescuentosComponent } from './descuentos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { CrearDescuentosComponent } from './components/crear-descuentos/crear-descuentos.component';
import { VerDescuentosComponent } from './components/ver-descuentos/ver-descuentos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    DescuentosComponent,
    CrearDescuentosComponent,
    VerDescuentosComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule,
    SharedModule,
    ReactiveFormsModule,
    DescuentosRoutingModule
  ]
})
export class DescuentosModule { }
