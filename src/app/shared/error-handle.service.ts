import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor() { }

  customError!:string;

  public errorHandle(error:HttpErrorResponse){

    var newError = ''
    switch (error.status){
      case 401:
        newError = "User is not Authorized. " + error.message
        break;
      case 404:
        newError = "Data not found. " + error.message
        break;
    }
    this.customError = newError
  }

}
