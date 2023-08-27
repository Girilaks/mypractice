import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IHero } from '../model/IHero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  _selectedHero: Subject<any> = new Subject<any>();
  //public selectedHero = this._selectedHero.asObservable();
  planetUrl: string = '';


  constructor(private http: HttpClient) { }

  getSuperHeroList() : Observable<IHero[]> {

    return this.http.get<any>('https://swapi.dev/api/people')
    .pipe(
      map(res => res.results),
      catchError(this.errorHandler)
      )
  }

  getPlanetDetails(planetUrl: string): Observable<any> {
    console.log(planetUrl)
    const url: string = planetUrl;
    return this.http.get<any>(url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || "Server error"));
  }

  setCurrentHero(hero: any) {
   this._selectedHero.next(hero);
  }

  getCurrentHero(): Observable<any> {
    return this._selectedHero;
  }
}
