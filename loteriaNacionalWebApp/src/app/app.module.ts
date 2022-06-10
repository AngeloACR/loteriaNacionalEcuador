import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule } from "@angular/forms";
/* import {NgxPaginationModule} from 'ngx-pagination';  */

//Anexando fontAwesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { BrowserAnimationsModule/* , NoopAnimationsModule */ } from "@angular/platform-browser/animations";

/* import {MatTableModule} from '@angular/material/table'; */
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PopupPromoComponent } from './components/popup-promo/popup-promo.component';




@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, PopupPromoComponent],
  imports: [
    BrowserModule,
    /* NgxPaginationModule, */
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /* NoopAnimationsModule, */
    FormsModule,


    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    MatPaginatorModule,
    MatFormFieldModule, 
    FormsModule
  ],
  providers: [
    /* {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    } */
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
