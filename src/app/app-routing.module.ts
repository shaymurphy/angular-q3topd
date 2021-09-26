import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestCovidResultsComponent } from './latest-covid-results/latest-covid-results.component';

const routes: Routes = [
  {
    path: 'latest',
    component: LatestCovidResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
