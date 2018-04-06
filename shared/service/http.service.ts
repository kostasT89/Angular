import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(url, params = null): Observable<any> {
    return this.http.get(url, { params });
  }
}
