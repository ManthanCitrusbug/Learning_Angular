import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private route: Router) { }

  canActivate(){
    if (localStorage.getItem("LoginUser")) {
      return true
    }
    this.route.navigate([''])
    return false;
  }
  
}