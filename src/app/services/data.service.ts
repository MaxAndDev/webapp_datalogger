import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// TODO:adapt interface for real data
export interface LogDataEntry {
  _id: string;
  station_id: number;
  airpressure: number;
  humidity: number;
  temperature: number;
  timestamp: number;
}

export interface LogDataArray {
  count: number;
  data: Array<LogDataEntry>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO:adapt URL
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  private urlReal = 'http://localhost:3000/data';
  private urlStation = 'http://localhost:3000/station'

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<LogDataArray> {
    return this.http.get<LogDataArray>(this.urlReal);
  }

  postData(body): Observable<any> {
    return this.http.post(this.urlStation + '/station', body );
  }

}
