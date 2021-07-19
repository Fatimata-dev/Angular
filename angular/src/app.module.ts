import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/core/app.component';
import { TitleComponent } from './app/components/a-title/title.component';
import {InterpolationComponent} from './app/components/b-interpolation/interpolation.component'
import {PropretyComponent} from './app/components/c-liaison_proprete/proprety-binding.component';
import { DDirectivesStructurelleComponent } from './app/components/d-directives-structurelle/d-directives-structurelle.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterpolationComponent,
    PropretyComponent,
    DDirectivesStructurelleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
