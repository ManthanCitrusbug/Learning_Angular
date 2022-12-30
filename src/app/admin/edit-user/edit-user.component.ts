import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { UserdataService } from 'src/app/shared/api/userdata.service';
import { confirmPasswordValidators } from '../../shared/matchpassword.validator'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(
    private updateForm: FormBuilder, 
    private userService: UserdataService, 
    private http: ActivatedRoute, 
    private rootComponent: RegisterComponent,
    private route: Router
  ){}

  cityList:string[] = this.rootComponent.cityList
  userTypeList:string[] = this.rootComponent.userTypeList
  hobbyList:string[] = this.rootComponent.hobbyList
  getage!:number;
  hobbyError:boolean = true;
  responce:boolean = false;

  ngOnInit(){
    this.userService.retriveUserData(this.http.snapshot.paramMap.get('id'))
    .subscribe( data => { 
      this.responce = true
      this.updateUserForm.patchValue(data)
    })
  }

  Age(event:any){
    this.getage = this.rootComponent.getAge(event)
    return this.getage
  }

  Hobby(event:any){
    return this.rootComponent.getHobby(event)
  }

  updateUserForm = this.updateForm.group({
    name : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    phoneNumber : ['', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]],
    gender : ['', [Validators.required]],
    city : ['', [Validators.required]],
    hobby : ['', [Validators.required]],
    dob : ['', [Validators.required]],
    age : ['', [Validators.required]],
    range : ['', [Validators.required]],
    userType : ['', [Validators.required]],
    password : ['', [Validators.required]],
    confirmPassword : ['', [Validators.required]],
  },
  {
    validator: confirmPasswordValidators('password', 'confirmPassword')
  })

  get name(){
    return this.updateUserForm.get('name')
  }
  get email(){
    return this.updateUserForm.get('email')
  }
  get phoneNumber(){
    return this.updateUserForm.get('phoneNumber')
  }
  get gender(){
    return this.updateUserForm.get('gender')
  }
  get city(){
    return this.updateUserForm.get('city')
  }
  get hobby(){
    return this.updateUserForm.get('hobby')
  }
  get dob(){
    return this.updateUserForm.get('dob')
  }
  get age(){
    return this.updateUserForm.get('age')
  }
  get range(){
    return this.updateUserForm.get('range')
  }
  get userType(){
    return this.updateUserForm.get('userType')
  }
  get password(){
    return this.updateUserForm.get('password')
  }
  get confirmPassword(){
    return this.updateUserForm.get('confirmPassword')
  }

  updateData(value:any){
    console.warn(value);
    
    // this.userService.updateUserData(value, this.http.snapshot.paramMap.get('id'))
    // this.route.navigate(['admin/dashboard'])
  }

}
