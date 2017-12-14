import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { DashboardService } from './dashboard/dashboard.service';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { StatewiseTripsComponent } from './dashboard/statewise-trips/statewise-trips.component';
import { DistrictwiseTripsComponent } from './dashboard/districtwise-trips/districtwise-trips.component';
import { MandalwiseTripsComponent } from './dashboard/mandalwise-trips/mandalwise-trips.component';
import { PanchayatwiseTripsComponent } from './dashboard/panchayatwise-trips/panchayatwise-trips.component';
import { VillagewiseTripsComponent } from './dashboard/villagewise-trips/villagewise-trips.component';
import { HabitationwiseTripsComponent } from './dashboard/habitationwise-trips/habitationwise-trips.component';


const routes: Routes = [
  { path: 'dashboard/admindashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [AdminDashboardComponent, StatewiseTripsComponent, DistrictwiseTripsComponent, MandalwiseTripsComponent, PanchayatwiseTripsComponent, VillagewiseTripsComponent, HabitationwiseTripsComponent],
  providers: [DashboardService]
})
export class ReportsModule { }
