import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './errors/not-authorized/not-authorized.component';
import { AdminguardGuard } from './shared/adminguard.guard';
import { AuthGuard } from './shared/auth.guard';
import { TokenGuard } from './shared/token.guard';
import { UserauthguardGuard } from './shared/userauthguard.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [TokenGuard]
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
    path:"authentication",
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule),
  },
  {
    path:"static",
    loadChildren: () => import('./static/static.module').then(mod => mod.StaticModule)
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
