import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { CompartidosModule } from './Compartidos/compartidos.module';
import { AppRoutingModule } from './app_routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisModule,
    CompartidosModule,
    HttpClientModule,
    FormsModule,


  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
