import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class NotauthorizedInterceptor implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error) => {
          console.warn(error.message, '=============   21');
          
          return throwError(error);
        })
      )
  }
}
