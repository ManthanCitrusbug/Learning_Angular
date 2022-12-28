import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent {

  constructor(private route:Router, private newForm: FormBuilder) {}

  stepOneFormData!:any;
  age!:number;
  userTypeList:string[] = ["Admin", "User"]
  cityList:string[] = ["Ahmedabad", "Surat", "Gandhinagar", "Rajkot"]
  stepOne!:any;

  stepForm = this.newForm.group({
    stepOne: this.newForm.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]],
      gender: ['', [Validators.required]],
    }),
    stepTwo: this.newForm.group({
      city: [this.cityList[0], [Validators.required]],
      hobby: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      age: [{value:this.age, disabled: true}, [Validators.required]]
    }),
    stepThree: this.newForm.group({
      range: [0, [Validators.required]],
      userType: [this.userTypeList[1], [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  })

  ngOnInit(){
    this.stepOne = this.stepForm.controls.stepOne as FormGroup;
  }

  get name(){
    return this.stepForm.get('stepOne')?.get('name')
  }
  get email(){
    return this.stepForm.get('stepOne')?.get('email')
  }
  get phoneNumber(){
    return this.stepForm.get('stepOne')?.get('phoneNumber')
  }
  get gender(){
    return this.stepForm.get('stepOne')?.get('gender')
  }

  get stepTwo(){
    return this.stepForm.get('stepTwo')
  }
  get stepThree(){
    return this.stepForm.get('stepThree')
  }

  submitStepOne(){
    this.stepOneFormData = this.stepForm.value
    console.warn(this.stepOneFormData);
  }

}
