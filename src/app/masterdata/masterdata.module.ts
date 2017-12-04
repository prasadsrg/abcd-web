import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';
import { MasterDataComponent } from './masterdata.component';
import { MasterService } from './masterdata.service';



const routes: Routes = [
  { path: 'masterdata', component: MasterDataComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [
    MasterDataComponent
  ],
  exports: [RouterModule],
  providers:[MasterService]
})
export class MasterModule { }