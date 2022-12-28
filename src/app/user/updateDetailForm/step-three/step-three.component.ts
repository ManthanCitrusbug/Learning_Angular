import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent {

  @Input() userTypeList:string[] = []
  @Input() formGroupName!:string;

  stepThreeForm!:FormGroup;

  constructor(private rootForm:FormGroupDirective) {}

  ngOnInit(){ 
    this.stepThreeForm = this.rootForm.control.get(this.formGroupName) as FormGroup
  }

  get range(){
    return this.stepThreeForm.get('range')
  }
  get userType(){
    return this.stepThreeForm.get('userType')
  }
  get password(){
    return this.stepThreeForm.get('password')
  }
  get confirmPassword(){
    return this.stepThreeForm.get('confirmPassword')
  }

}
