import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldataComponent } from './alldata/alldata.component';
import { DetailComponent } from './detail/detail.component';
import { EditdataComponent } from './editdata/editdata.component';

const routes: Routes = [
  {
    path: "alldata",
    component: AlldataComponent,
  },
  {
    path: "editdata",
    component: EditdataComponent,
  },
  {
    path: "detail/:id",
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
