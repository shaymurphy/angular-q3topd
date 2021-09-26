import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LatestCovidResultsComponent } from './latest-covid-results/latest-covid-results.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, LatestCovidResultsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
