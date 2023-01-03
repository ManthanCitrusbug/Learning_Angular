import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StaticService } from 'src/app/shared/json/static.service';
import { EditdataComponent } from '../editdata/editdata.component';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent {

  staticJsonData!:any;

  constructor(private jsonData:StaticService, private popup:MatDialog, private http:HttpClient) {
    this.staticJsonData = this.jsonData.todos
  }

  openPopUp(id:number){
    this.popup.open(EditdataComponent, {width:"50%", height:'75%', data:{id:id}})
  }
}
