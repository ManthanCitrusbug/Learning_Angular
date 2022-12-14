import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css']
})
export class AutherComponent implements OnInit {

  dataname:string = ""
  basicFormData:any={}

  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  get name(){
    return this.reactiveForm.get('name')
  }

  get email(){
    return this.reactiveForm.get('email')
  }

  get password(){
    return this.reactiveForm.get('password')
  }

  constructor () {}

  ngOnInit(): void {
      console.warn("asdyasuydfasuyf"); 
  }

  // getValue(value:string){
  //   this.dataname = value;
  // }

  getBasicFormValue(data:any){
    this.basicFormData = data    
  }

  getReactiveFormData(){
    this.basicFormData = this.reactiveForm.value
  }

}
