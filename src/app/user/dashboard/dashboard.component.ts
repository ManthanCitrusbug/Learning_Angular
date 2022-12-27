import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserauthguardService } from 'src/app/shared/userauthguard.service';
import { RegisterComponent } from '../../auth/register/register.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor (private register:RegisterComponent, private loginservice: UserauthguardService) { }

  loginUserData:any = this.loginservice.isUserLoggedIn()

  age:number = this.loginUserData.age
  rangeVal:number = 0;
  hobbyError:boolean = true;
  cityList:string[] = ["Ahmedabad", "Surat", "Gandhinagar", "Rajkot"]
  userTypeList:string[] = ["Admin", "User"]
  hobbyList:string[] = ["Music", "Travel", "Play", "Drawing"]

  userDetailForm = new FormGroup({
    name: new FormControl(this.loginUserData.name, [Validators.required]),
    email: new FormControl(this.loginUserData.email, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(this.loginUserData.phoneNumber, [Validators.required, Validators.min(999999999), Validators.max(9999999999)]),
    gender: new FormControl(this.loginUserData.gender, [Validators.required]),
    city: new FormControl(this.loginUserData.city, [Validators.required]),
    hobby: new FormControl(this.loginUserData.hobby, [Validators.required]),
    dob: new FormControl(this.loginUserData.dob, [Validators.required]),
    age: new FormControl({value:this.loginUserData.age, disabled: true}, [Validators.required]),
    range: new FormControl(this.loginUserData.range, [Validators.required]),
    userType:new FormControl(this.loginUserData.userType, [Validators.required]),
    password: new FormControl(this.loginUserData.password, [Validators.required]),
    confirmPassword: new FormControl(this.loginUserData.confirmPassword, [Validators.required]),
  })

  get name(){
    return this.userDetailForm.get('name')
  }
  get email(){
    return this.userDetailForm.get('email')
  }
  get phoneNumber(){
    return this.userDetailForm.get('phoneNumber')
  }
  get gender(){
    return this.userDetailForm.get('gender')
  }
  get city(){
    return this.userDetailForm.get('city')
  }
  get hobby(){
    return this.userDetailForm.get('hobby')
  }
  get dob(){
    return this.userDetailForm.get('dob')
  }
  get range(){
    return this.userDetailForm.get('range')
  }
  get userType(){
    return this.userDetailForm.get('userType')
  }
  get password(){
    return this.userDetailForm.get('password')
  }
  get confirmPassword(){
    return this.userDetailForm.get('confirmPassword')
  }

  updateAge(event:any){
    this.age = this.register.getAge(event)
  }

  updateHobby(event:any){
    this.register.getHobby(event)
  }

  userDetailUpdate(){
    this.userDetailForm.value.age = this.age
    localStorage.setItem('UserData', JSON.stringify(this.userDetailForm.value))
    window.location.reload()
  }

  logout(){
    var lastlogin = this.loginUserData
    localStorage.setItem("LastLogin", JSON.stringify({"email": lastlogin.email, "password": lastlogin.password}))
    localStorage.removeItem("LoginUser")
    window.location.reload()
  }

}
