import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from '../auth/register/register.component';
import { StepOneComponent } from './updateDetailForm/step-one/step-one.component';
import { StepTwoComponent } from './updateDetailForm/step-two/step-two.component';
import { StepThreeComponent } from './updateDetailForm/step-three/step-three.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    RegisterComponent
  ]
})
export class UserModule { }
