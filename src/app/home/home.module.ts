import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: LandingpageComponent },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [LandingpageComponent],
  exports: [RouterModule]
})
export class HomeModule { }
