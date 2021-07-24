import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination'; 

//Anexando fontAwesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";


import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,




    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [MatPaginatorModule,
    MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
