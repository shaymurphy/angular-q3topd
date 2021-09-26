import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CovidDataService {
  private baseUrl = 'https://api.apify.com/v2/datasets/FIbyK6uHUntt2kNy3/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  getLatestResults(): any {
    return this.httpClient
      .get(
        'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST',
        { responseType: 'json' }
      )
      .pipe(
        map(
          (res) => {
            return res;
          },
          (error) => {
            console.log('error occurred!!');
            return '';
          }
        )
      );
  }
}
