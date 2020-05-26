import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Device} from './device';
import {Resbody} from './resbody';



@Injectable({
  providedIn: 'root'
})
export class NgDevInfoServiceService {

  constructor(private http: HttpClient ) { }

  private devUrl = "power-dev-info/details";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

  getDevInfo(pagenum: number): Observable<Resbody> {
    const url = `${this.devUrl}?page=${pagenum}`;

    return this.http.get<Resbody>(url);

}

}
