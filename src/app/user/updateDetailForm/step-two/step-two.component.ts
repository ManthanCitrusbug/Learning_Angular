import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {

  @Input() cityList!:string[];
  @Input() formGroupName!:string;

  stepTwoForm!:FormGroup;
  age!:number;
  hobbyList:string[] = ["Music", "Travel", "Play", "Drawing"]
  hobbyError:boolean = true;

  constructor(private rootForm:FormGroupDirective, private rootComponent: RegisterComponent) {}

  ngOnInit(){
    this.stepTwoForm = this.rootForm.control.get(this.formGroupName) as FormGroup
  }

  get city(){
    return this.stepTwoForm.get('city')
  }
  get hobby(){
    return this.stepTwoForm.get('hobby')
  }
  get dob(){
    return this.stepTwoForm.get('dob')
  }

  getHobbyValue(event:any){
    this.rootComponent.getHobby(event)
  }

  getAgeValue(event:any){
    this.age = this.rootComponent.getAge(event)
  }

}
