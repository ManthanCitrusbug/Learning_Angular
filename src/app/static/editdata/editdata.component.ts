import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaticService } from 'src/app/shared/json/static.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent {

  getData!:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    private jsonData:StaticService, 
    private route:ActivatedRoute, 
    private form: FormBuilder) {

    this.getData = this.jsonData.todos
    this.getData = this.getData.todos.find((opt:any) => opt.id == this.data.id);
    // this.getData = this.getData.todos.find((opt:any) => opt.id == this.route.snapshot.paramMap.get('id'));
    this.editDataForm.patchValue(this.getData)
  }

  editDataForm = this.form.group({
    todo: ['', [Validators.required]],
    completed: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  })

  updateData(){
    console.warn(this.editDataForm.value);
  }

}
