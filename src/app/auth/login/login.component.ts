import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/shared/api/userdata.service';
import { UserauthguardService } from 'src/app/shared/userauthguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private route: Router, private loginUser: UserauthguardService, private firebasedata: UserdataService) {}

  isSubmitted:boolean = false;
  fireBaseData!:any;
  newData:any = localStorage.getItem("UserData")
  lastLogin:any = localStorage.getItem("LastLogin")
  lastloginData:any = JSON.parse(this.lastLogin)
  userData:any = JSON.parse(this.newData)
  authorizedUser:any;

  enteredEmail!:string;
  enteredPassword!:string;

  ngOnInit(){
    if (this.lastLogin) {
      this.enteredEmail = this.lastloginData.email
      this.enteredPassword = this.lastloginData.password
    }
    this.firebasedata.getAllUserData().subscribe( data => {this.fireBaseData = data})
  }

  emailError(){
    if (this.fireBaseData){
      for (let i of this.fireBaseData){
        if (i.email != this.enteredEmail){
          return true
        }
      }
    }
    return false
  }

  passwordError(){
    if (this.fireBaseData){
      for (let i of this.fireBaseData){
        if (i.password != this.enteredPassword){
          return true
        }
      }
    }
    return false
  }

  submitForm(formData:any){
    localStorage.removeItem("LastLogin")
    this.isSubmitted = true
    
    for (let user in this.fireBaseData){
      if (formData.value.email == this.fireBaseData[user].email && formData.value.password == this.fireBaseData[user].password){
        this.authorizedUser = this.fireBaseData[user]  
      } 
    }

    var loginUser = {"isLoggedIn": true, "userData":JSON.stringify(this.authorizedUser)}
    localStorage.setItem("LoginUser", JSON.stringify(loginUser))
    
    if (this.authorizedUser){
      if (this.authorizedUser.userType == "User"){
        this.route.navigate(['user/dashboard'])
      } else if (this.authorizedUser.userType == "Admin"){
        this.route.navigate(['admin/dashboard'])
      }
    }
  }
}
