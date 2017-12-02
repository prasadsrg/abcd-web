import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LoginService } from './login/login.service';

import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { ResetPasswordService } from './resetpassword/resetpassword.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/forgotpassword', component: ForgotpasswordComponent },
  { path: 'auth/resetpassword', component: ResetPasswordComponent },


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent

  ],
  providers: [LoginService, ResetPasswordService],
  exports: [RouterModule]
})
export class AuthModule { }
