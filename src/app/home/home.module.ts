import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [LandingpageComponent],
  exports: [RouterModule]
})
export class HomeModule { }
