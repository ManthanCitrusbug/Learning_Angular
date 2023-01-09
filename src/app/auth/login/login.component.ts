import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/shared/api/userdata.service';
import { TokenService } from 'src/app/shared/token/token.service';
import { UserauthguardService } from 'src/app/shared/userauthguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (
    private route: Router, 
    private loginUser: UserauthguardService, 
    private firebasedata: UserdataService,
    private http: TokenService) {
      // var token = localStorage.getItem("token")
      // if (token){
      //   this.route.navigate(['/authentication/dashboard'])
      // }
    }

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
    
    // this.http.login(formData.value)
    //   .subscribe((res) => {
    //     this.newData = res
    //     localStorage.setItem("token", this.newData.data.access)
    //   })
    // console.warn("before redirect");
    
    // this.route.navigate(['admin/dashboard'])
    // console.warn("after redirect");

    // localStorage.setItem("LoginUser", JSON.stringify({"userType":"Admin"}))
    
    for (let user in this.fireBaseData){
      if (formData.value.email == this.fireBaseData[user].email && formData.value.password == this.fireBaseData[user].password){
        this.authorizedUser = this.fireBaseData[user]  
      } 
    }

    var loginUser = {"isLoggedIn": true, "userData":JSON.stringify(this.authorizedUser)}
    localStorage.setItem("LoginUser", JSON.stringify(loginUser))
    
    if (this.authorizedUser){
      if (this.authorizedUser.userType == "User"){
        this.route.navigate(['/user/dashboard'])
      } else if (this.authorizedUser.userType == "Admin"){
        this.route.navigate(['/admin/dashboard'])
      }
    } else if (formData.value.email == "kishan1.citrusbug@gmail.com" && formData.value.password == "Patel@9999"){
      this.http.login(formData.value)
        .subscribe((data) => {
          this.newData = data
          localStorage.setItem("token", this.newData.data.access)
          this.route.navigate(['/authentication/dashboard'])
        })
    }
  }
}
