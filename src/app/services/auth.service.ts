import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticate$ = new BehaviorSubject<boolean>(false);

  login(credentials: any) {
    console.log(credentials)
  }
}
