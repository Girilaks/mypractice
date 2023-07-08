import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IHero } from '../model/IHero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getSuperHeroList() : Observable<IHero[]> {
    // this.http.get('https://swapi.dev/api/people').subscribe(data => {
    //   console.log(data);
    // }, error => {
      
    // })

    return this.http.get<IHero[]>('https://swapi.dev/api/people')
    .pipe(
      catchError(this.errorHandler)
      )
  }

  errorHandler(error: HttpErrorResponse) {
    
    //return Observable.throw(error.message || 'Server error')
    return throwError(() => new Error(error.message || "Server error"));

    //return throwError(error || "Server")
  }
}
