import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AlldataComponent } from './alldata/alldata.component';
import { EditdataComponent } from './editdata/editdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AlldataComponent,
    EditdataComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class StaticModule { }
