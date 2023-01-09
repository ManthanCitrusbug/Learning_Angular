import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardService {

  constructor() { }

  userData:any;
  localData:any;
  loggedInUserData:any;

  isUserLoggedIn(){
    this.localData = localStorage.getItem("LoginUser")
    this.loggedInUserData = JSON.parse(this.localData)
    if (this.loggedInUserData != null && this.loggedInUserData.userData){
      this.userData = JSON.parse(this.loggedInUserData.userData)
      return this.userData    
    }
  }

}
