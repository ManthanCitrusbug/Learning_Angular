import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { UserdataService } from 'src/app/shared/api/userdata.service';
import { UserauthguardService } from 'src/app/shared/userauthguard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor (private userservice: UserdataService, private loginservice: UserauthguardService) {}

  loginUserData:any = this.loginservice.isUserLoggedIn()
  userData!:any;
  errorMessage!:string;

  ngOnInit(){    
    this.userservice.getAllUserData()
    .pipe(
      catchError(error => {
        return this.errorMessage = error.message;
      })
    )
    .subscribe( data => {
      this.userData = data
    })
  }

  logout(){
    var lastlogin = this.loginUserData
    localStorage.setItem("LastLogin", JSON.stringify({"email": lastlogin.email, "password": lastlogin.password}))
    localStorage.removeItem("LoginUser")
    window.location.reload()
  }

  delete(id:any){
    this.userservice.deleteUserData(id)
    window.location.reload()
  }

  update(data:any, id:any){
    this.userservice.updateUserData(data, id)
  }

}
