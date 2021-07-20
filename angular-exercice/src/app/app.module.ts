import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { Ex2Component } from './ex2/ex2.component';
import { ImagesComponent } from './ex3/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex2Component,
    ImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
