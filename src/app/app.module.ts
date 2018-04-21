import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './common/components/menu/menu.component';

import { ReportsModule } from './modules/reports/reports.module';
import { AnonymousModule } from './modules/anonymous/anonymous.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { AppDataModule } from './modules/app-data/app-data.module';
import { AccessMenuModule } from './modules/access-menu/access-menu.module';
import { SettingModule } from './modules/settings/setting.module';



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
    ReportsModule,
    ProfileModule,
    ConsumerModule,
    AppDataModule,
    AccessMenuModule,
    SettingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
