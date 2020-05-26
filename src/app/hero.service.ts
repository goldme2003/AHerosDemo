import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from './hero';
//import {HEROES} from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'power-dev-info/angtest';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
/*  V0.3 code*  this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);*/
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
/*  V0.3 code *  this.messageService.add(`Hero Service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));*/
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`update hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`add new hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }


  private log(message: string){
    this.messageService.add(`Hero Service: ${message}`);

  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
