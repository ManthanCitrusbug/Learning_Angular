import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserauthguardService } from './userauthguard.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardGuard implements CanActivate {

  constructor (private userAuth:UserauthguardService, private route: Router){ }

  canActivate(){
    if(this.userAuth.isUserLoggedIn().userType != 'User'){
      return true
    }
    this.route.navigate(['error'])
    return false;
  }
  
}
