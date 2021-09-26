import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CovidByCountry } from '../models/covid-by-country.model';

@Component({
  selector: 'app-latest-covid-results',
  templateUrl: './latest-covid-results.component.html',
  styleUrls: ['./latest-covid-results.component.scss'],
})
export class LatestCovidResultsComponent implements OnInit {
  sCollectionList: CovidByCountry[] = null;
  dataSource = new MatTableDataSource<CovidByCountry>(this.sCollectionList);
  displayedColumns: string[] = [
    'country',
    'infected',
    'tested',
    'recovered',
    'deceased',
  ];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private covidService: CovidDataService) {}

  ngOnInit(): void {
    this.covidService
      .getLatestResults()
      .subscribe((getLatestResultsResponse) => {
        this.sCollectionList = getLatestResultsResponse;

        this.dataSource.data = this.sCollectionList;
        this.dataSource.sort = this.sort;
      });
  }

  isNumeric(input): boolean {
    return !isNaN(input);
  }
}
