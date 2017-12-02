import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import {AdminDashBoardService } from './admin-dash-board/admin-dash-board.service';

const routes: Routes = [
  { path: 'dashboard/admin', component: AdminDashBoardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [AdminDashBoardComponent],
  providers: [AdminDashBoardService]
})
export class DashboardModule { }
