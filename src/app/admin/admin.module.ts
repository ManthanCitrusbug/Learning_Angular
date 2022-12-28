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


@NgModule({
  declarations: [
    DashboardComponent,
    IsAuthorizedPipe,
    AdvancePipe,
    HeaderDirectiveDirective,
    RangePipe,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
