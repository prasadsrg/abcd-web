import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AnonymousModule } from './anonymous/anonymous.module';
import { HomeModule } from './home/home.module';
import { MenuComponent} from './apex/menu/menu.component';
import { ReportsModule } from './reports/reports.module';
import { MasterModule } from './masterdata/masterdata.module';


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
    AnonymousModule,
    HomeModule,
    ReportsModule,
    MasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
