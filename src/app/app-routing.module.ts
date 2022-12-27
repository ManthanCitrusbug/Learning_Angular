import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './errors/not-authorized/not-authorized.component';
import { AdminguardGuard } from './shared/adminguard.guard';
import { AuthGuard } from './shared/auth.guard';
import { UserauthguardGuard } from './shared/userauthguard.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuard, AdminguardGuard],
  },
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AuthGuard, UserauthguardGuard]
  },
  {
    path:"error",
    component: NotAuthorizedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
