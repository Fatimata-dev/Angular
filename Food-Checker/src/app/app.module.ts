import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AppRountingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ProduitListComponent,
    ProduitDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
