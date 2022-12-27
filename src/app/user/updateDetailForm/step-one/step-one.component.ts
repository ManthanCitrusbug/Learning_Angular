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

  stepForm = this.newForm.group({
    stepOne: this.newForm.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]],
      gender: ['', [Validators.required]],
    }),
    stepTwo: this.newForm.group({
      city: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      age: [{value:0, disabled: true}, [Validators.required]]
    }),
    stepThree: this.newForm.group({
      range: ['', [Validators.required]],
      userType: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  })

  get stepOne(){
    return this.stepForm.get('stepOne')
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
