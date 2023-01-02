import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { UserDataModelService } from 'src/app/auth/user-data-model.service';
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
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
        } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.errorMessage = errorMsg
        return this.errorMessage
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
    if (confirm("Wanna delete this data?")){
      this.userservice.deleteUserData(id)
    }
  }

  update(data:any, id:any){
    this.userservice.updateUserData(data, id)
  }

}
