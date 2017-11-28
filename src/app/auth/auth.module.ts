import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true }), SharedModule.forRoot()
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [RouterModule]
})
export class AuthModule { }
