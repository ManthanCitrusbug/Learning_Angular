import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor() { }

  customError!:string;

  public errorHandle(error:HttpErrorResponse){
    console.warn(error);
    
    var newError = ''
    switch (error.status){
      case 401:
        newError = "User is not Authorized. " + error.message + " with the code " + error.status
    }
    this.customError = newError
  }

}
