import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {

  @Input() stepOneData!:any;

  ngOnInit(){
    console.warn(this.stepOneData);
  }

}
