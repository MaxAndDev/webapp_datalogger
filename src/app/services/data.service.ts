import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// TODO:adapt interface for real data
export interface LogDataEntry {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface LogDataArray {
  logdata: Array<LogDataArray>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO:adapt URL
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<LogDataArray> {
    return this.http.get<LogDataArray>(this.url);
  }

}
