import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticService } from 'src/app/shared/json/static.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  getData!:any;

  constructor(
    private dataService:StaticService, 
    private http:ActivatedRoute, 
    private form:FormBuilder,
    private route:Router) {
    this.getData = this.dataService.todos.todos.find((opt:any) => opt.id == this.http.snapshot.paramMap.get('id'))
    this.newForm.patchValue(this.getData)
  }

  newForm = this.form.group({
    todo: ['', [Validators.required]],
    completed: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  })

  editData(){
    Object.assign(this.getData, this.newForm.value)
    this.route.navigate(['/static/alldata'])
  }

}
