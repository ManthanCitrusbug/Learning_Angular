import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private route:Router){}

  canActivate() {
    var token = localStorage.getItem("token")
    if (token){
      this.route.navigate(['/authentication/dashboard'])
      return false
    }
    return true;
  }
  
}
