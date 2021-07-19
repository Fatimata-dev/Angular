import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/core/app.component';
import { TitleComponent } from './app/components/00-title/title.component';
import {InterpolationComponent} from './app/components/01-interpolation/interpolation.component'
import {PropretyComponent} from './app/components/02-liaison_proprete/proprety-binding.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterpolationComponent,
    PropretyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
