import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/shared/api/userdata.service';
import { UserDataModelService } from '../user-data-model.service';
// import { UserDataModelService } from '../user-data-model.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (private route: Router, private postData: UserdataService) {}

  userData!:any;
  dataToStore!:any;

  age!:number;
  hobbyError:boolean = true;
  rangeVal:number = 0;
  cityList:string[] = ["Ahmedabad", "Surat", "Gandhinagar", "Rajkot"]
  userTypeList:string[] = ["Admin", "User"]
  hobbyList:string[] = ["Music", "Travel", "Play", "Drawing"]
  hobbyVal:string[] = []

  registerForm = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]),
    gender: new FormControl('', [Validators.required]),
    city: new FormControl(this.cityList[0], [Validators.required]),
    hobby: new FormArray([]),
    dob: new FormControl('', [Validators.required]),
    age: new FormControl({value:this.age, disabled: true}, [Validators.required]),
    range: new FormControl(this.rangeVal, [Validators.required]),
    userType:new FormControl(this.userTypeList[1], [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get name(){
    return this.registerForm.get('name')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get phoneNumber(){
    return this.registerForm.get('phoneNumber')
  }
  get gender(){
    return this.registerForm.get('gender')
  }
  get city(){
    return this.registerForm.get('city')
  }
  get hobby(){
    return this.registerForm.get('hobby') as FormArray
  }
  get dob(){
    return this.registerForm.get('dob')
  }
  get range(){
    return this.registerForm.get('range')
  }
  get userType(){
    return this.registerForm.get('userType')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword')
  }

  getAge(event:any){
    var selectedData = event.target.value
    var selectedDOB = new Date(selectedData)
    var todaydate = new Date()
    this.age = todaydate.getFullYear() - selectedDOB.getFullYear()
    return this.age
  }

  getHobby(event:any){
    var checkedVal = this.registerForm.get('hobby') as FormArray;

    if (event.target.checked){
      checkedVal.push(new FormControl(event.target.value))
    } else {
      let i = 0;
      checkedVal.controls.forEach( (e) => {
        if(e.value == event.target.value){
          checkedVal.removeAt(i)
        }
        i++;
      })
    }
    if (checkedVal.controls.length == 0) {
      this.hobbyError = true
    } else {
      this.hobbyError = false
    }
    return this.hobbyError
  }

  registerUser(){
    this.registerForm.value.age = this.age
    
    this.userData = this.registerForm.value
    this.dataToStore = new UserDataModelService(this.userData.name, this.userData.email, this.userData.phoneNumber, this.userData.gender,
      this.userData.city, this.userData.hobby, this.userData.dob, this.userData.age, this.userData.range, this.userData.userType,
      this.userData.password, this.userData.confirmPassword)
    this.postData.postUserData(this.dataToStore)
    localStorage.setItem('UserData', JSON.stringify(this.userData))

    this.route.navigate([''])
  }

}