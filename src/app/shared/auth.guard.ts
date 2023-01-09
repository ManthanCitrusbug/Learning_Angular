import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserauthguardService } from './userauthguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private route: Router, private userAuth:UserauthguardService) { }

  canActivate(){
    if (localStorage.getItem("LoginUser")) {
      return true
    }
    this.route.navigate([''])
    return false;
  }
  
}
