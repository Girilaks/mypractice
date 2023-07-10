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


  constructor(private http: HttpClient) { }

  getSuperHeroList() : Observable<IHero[]> {

    return this.http.get<IHero[]>('https://swapi.dev/api/people')
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
