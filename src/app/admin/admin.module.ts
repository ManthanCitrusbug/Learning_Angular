import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { IsAuthorizedPipe } from '../pipes/is-authorized.pipe';
import { AdvancePipe } from '../pipes/advance.pipe';
import { HeaderDirectiveDirective } from '../directives/header-directive.directive';
import { RangePipe } from '../pipes/range.pipe';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../auth/register/register.component';
import { PracticeComponent } from './practice/practice.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    DashboardComponent,
    IsAuthorizedPipe,
    AdvancePipe,
    HeaderDirectiveDirective,
    RangePipe,
    EditUserComponent,
    PracticeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers:[
    RegisterComponent
  ]
})
export class AdminModule { }
