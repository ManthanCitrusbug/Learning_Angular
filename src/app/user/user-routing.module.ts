import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepOneComponent } from './updateDetailForm/step-one/step-one.component';
import { StepThreeComponent } from './updateDetailForm/step-three/step-three.component';
import { StepTwoComponent } from './updateDetailForm/step-two/step-two.component';

const routes: Routes = [
  {
    path:"dashboard", 
    component: DashboardComponent,
  },
  {
    path:"step-form",
    children:[
      {
        path:"step-1",
        component: StepOneComponent
      },
      {
        path:"step-2",
        component: StepTwoComponent
      },
      {
        path:"step-3",
        component: StepThreeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
