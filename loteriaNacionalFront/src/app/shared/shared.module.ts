import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { StylePaginatorDirective } from './style-paginator.directive';
import { AutoTabDirective } from './autotab.directive';
import { PaginatePipe } from './pipes/paginate.pipe';
import { getSpanishPaginatorIntl } from './paginacion-es';
import { PositioningDirective } from './positioning.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    ErrorComponent,
    StylePaginatorDirective,
    AutoTabDirective,
    PositioningDirective,

    PaginatePipe,
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    StylePaginatorDirective,
    AutoTabDirective,
    PositioningDirective,
    PaginatePipe,
  ],
  imports: [CommonModule, MatPaginatorModule],

  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl(),
    },
  ],
})
export class SharedModule {}
