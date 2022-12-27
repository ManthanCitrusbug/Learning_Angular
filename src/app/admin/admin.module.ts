import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { IsAuthorizedPipe } from '../pipes/is-authorized.pipe';
import { AdvancePipe } from '../pipes/advance.pipe';
import { HeaderDirectiveDirective } from '../directives/header-directive.directive';
import { RangePipe } from '../pipes/range.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    IsAuthorizedPipe,
    AdvancePipe,
    HeaderDirectiveDirective,
    RangePipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule
  ]
})
export class AdminModule { }
