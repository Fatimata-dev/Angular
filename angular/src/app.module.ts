import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app/core/app.component';
import { TitleComponent } from './app/components/a-title/title.component';
import {InterpolationComponent} from './app/components/b-interpolation/interpolation.component'
import {PropretyComponent} from './app/components/c-liaison_proprete/proprety-binding.component';
import { DDirectivesStructurelleComponent } from './app/components/e-directives-structurelle/d-directives-structurelle.component';
import { DDirectivesAttributsComponent } from './app/components/e-directives-attributs/e-directives-attributs.component';
import { FEvenementComponent } from './app/components/f-evenement/f-evenement.component';
import { GInputComponent } from './app/components/g-input/g-input.component';
import { HOutputComponent } from './app/components/h-output/h-output.component';
import { IObservableComponent } from './app/components/i-observable/i-observable.component';
import { JServiceComponent } from './app/components/j-service/j-service.component';
import { KRoutingComponent } from './app/components/k-routing/k-routing.component'
import { AppRountingModule } from './app/app-routing.module';
import { ParamsComponent } from './app/components/k-routing/params/params.component';
import { BackComponent } from './app/components/k-routing/back/back.component';
import { NotFoundComponent } from './app/components/k-routing/not-found/not-found.component';
import { LPipesComponent } from './app/components/l-pipes/l-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterpolationComponent,
    PropretyComponent,
    DDirectivesStructurelleComponent,
    DDirectivesAttributsComponent,
    FEvenementComponent,
    GInputComponent,
    HOutputComponent,
    IObservableComponent,
    JServiceComponent,
    KRoutingComponent,
    ParamsComponent,
    BackComponent,
    NotFoundComponent,
    LPipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
