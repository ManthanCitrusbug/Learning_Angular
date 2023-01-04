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
import { ErrorHandleService } from '../shared/error-handle.service';

@Injectable()
export class NotauthorizedInterceptor implements HttpInterceptor {

  constructor(private route: Router, private errorHandle:ErrorHandleService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem("token")
    if (!token){
      return next.handle(request)
    }

    var newReq = request.clone({headers: request.headers.set("Authorization", "Bearer " + token)})

    return next.handle(newReq)
      .pipe(
        catchError((error) => {
          this.errorHandle.errorHandle(error)
          return throwError(error);
        })
      )
  }
}
