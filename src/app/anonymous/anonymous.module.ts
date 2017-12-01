import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { PageService } from './pages/page.service';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';

import { AuthService } from './auth/auth.service';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'page/landingpage', component: LandingpageComponent },
  { path: 'page/contactus', component: ContactusComponent },
  { path: 'page/solutions', component: SolutionsComponent },
  { path: 'page/products', component: ProductsComponent },
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
  declarations: [LandingpageComponent, ForgotpasswordComponent, ContactusComponent, SolutionsComponent, ProductsComponent],
  providers: [PageService]
})
export class AnonymousModule { }
