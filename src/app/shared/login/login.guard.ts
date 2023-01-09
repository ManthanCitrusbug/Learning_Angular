import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserauthguardService } from '../userauthguard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private route:Router, private userAuth: UserauthguardService) {}

  canActivate(){
    var loginuser = this.userAuth.isUserLoggedIn()
    if (loginuser != null){
      if (loginuser.userType == 'User'){
        this.route.navigate(['/user/dashboard/'])
      }
      if (loginuser.userType == 'Admin'){
        this.route.navigate(['/admin/dashboard/'])
      }
      return false
    }
    return true;
  }
  
}
