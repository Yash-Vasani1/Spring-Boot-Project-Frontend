import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './User/login/login.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { HomePageComponent } from './User/home-page/home-page.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
