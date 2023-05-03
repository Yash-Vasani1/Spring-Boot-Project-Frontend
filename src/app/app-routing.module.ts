import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './User/add-user/add-user.component';
import { LoginComponent } from './User/login/login.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { HomePageComponent } from './User/home-page/home-page.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';

const routes: Routes = [
  {
    component:AddUserComponent,
    path:"addUser"
  },
  {
    component:LoginComponent,
    path:"Login"
  },
  {
    component:ForgotPasswordComponent,
    path:"ForgotPassword"
  },
  {
    component:HomePageComponent,
    path:"homePage"
  },
  {
    component:ResetPasswordComponent,
    path:"ResetPassword"
  },
  {
    component:AddUserComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
