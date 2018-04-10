import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AdoptersComponent} from './adopters/adopters.component';
import {AnimalsComponent} from './animals/animals.component';
import {AnimalsService} from './animals/services/animals.service';
import {HttpClientModule} from '@angular/common/http';
import {AdoptersService} from './adopters/services/adopters.service';


@NgModule({
  declarations: [
    AppComponent,
    AdoptersComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AnimalsService,
    AdoptersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
