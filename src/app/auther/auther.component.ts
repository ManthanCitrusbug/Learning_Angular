import { Component } from '@angular/core';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css']
})
export class AutherComponent {

  name:string = ""

  getValue(event:any){
    this.name = event.target.value
  }
}
