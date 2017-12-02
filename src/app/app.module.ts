import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { HomeModule } from './home/home.module';
import { MenuComponent} from './apex/menu/menu.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule.forRoot(),
    HttpClientModule,
    AuthModule,
    HomeModule,
    ProfileModule,
    VehicleModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
