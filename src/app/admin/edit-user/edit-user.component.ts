import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/shared/api/userdata.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(private updateForm: FormBuilder, private userService: UserdataService, private http: ActivatedRoute){}

  retrivedUserData!:any;

  ngOnInit(){
    var userId = this.http.snapshot.paramMap.get('id')
    this.userService.retriveUserData(userId)
      .subscribe( data => {
        this.retrivedUserData = data
      })
  }

  updateUserForm = this.updateForm.group({
    name: new FormControl(this.retrivedUserData.name, [Validators.required]),
    email: new FormControl(this.retrivedUserData.email, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(this.retrivedUserData.phoneNumber, [Validators.required, Validators.min(999999999), Validators.max(9999999999)]),
    gender: new FormControl(this.retrivedUserData.gender, [Validators.required]),
    city: new FormControl(this.retrivedUserData.city, [Validators.required]),
    hobby: new FormControl(this.retrivedUserData.hobby, [Validators.required]),
    dob: new FormControl(this.retrivedUserData.dob, [Validators.required]),
    age: new FormControl({value:this.retrivedUserData.age, disabled: true}, [Validators.required]),
    range: new FormControl(this.retrivedUserData.range, [Validators.required]),
    userType:new FormControl(this.retrivedUserData.userType, [Validators.required]),
    password: new FormControl(this.retrivedUserData.password, [Validators.required]),
    confirmPassword: new FormControl(this.retrivedUserData.confirmPassword, [Validators.required]),
  })

}
