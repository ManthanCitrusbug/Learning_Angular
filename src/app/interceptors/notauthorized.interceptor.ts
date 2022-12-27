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
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent){
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
          }
          return throwError(errorMessage);
        })
      )
  }
}
