import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {LoginService} from './login/login.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/forgotpassword', component: ForgotpasswordComponent },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, ForgotpasswordComponent
  ],
  providers: [LoginService],
  exports: [RouterModule]
})
export class AuthModule { }
