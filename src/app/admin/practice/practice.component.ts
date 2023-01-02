import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  constructor(private form: FormBuilder){}

  valList:string[] = ["A", "B", "C", "D"]
  val:string[] = []

  newForm = this.form.group({
    arr: this.form.array([])
  })

  // newForm = new FormGroup({
  //   arr: new FormArray([])
  // })

  getArrVal(){
    const arrayval = this.newForm.get('arr') as FormArray
    for (let i of this.valList){
      arrayval.push(this.form.control(i))
    }
    return arrayval as FormArray
  }

  getVal(event:any){
    const arrayval = this.newForm.get('arr') as FormArray
    // var isInList = this.hobbyVal.includes(event.target.value)
    if (event.target.checked){
      arrayval.push(new FormControl(event.target.value))
      this.val.push(event.target.value)
    } else {
      this.val = this.val.filter(e => e != event.target.value)
    }
  }

  onSubmit(){
    console.warn(this.newForm.value);
  }

}
