import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { Ex2Component } from './ex2/ex2.component';
import { ImagesComponent } from './ex3/images/images.component';
import { Ex4Component } from './ex4/ex4.component';
import { InoutComponent } from './components/inout/inout.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex2Component,
    ImagesComponent,
    Ex4Component,
    InoutComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
