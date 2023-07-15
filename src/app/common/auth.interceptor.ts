import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {

  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler) : Observable<HttpEvent<unknown>>{
    console.log('interceptor')
      const authreq = request.clone({ setHeaders: { Authorization: 'test' } })
      return next.handle(authreq)
      .pipe(
        tap({
          next: (event) => {
            if(event instanceof HttpResponse) {
              if(event.status == 401) {
                alert('Unauthorized access!')
              }
            }
            return event;
          },
          error: (error) => {
            console.log('error')
          }
        })
      )
    
  }
}