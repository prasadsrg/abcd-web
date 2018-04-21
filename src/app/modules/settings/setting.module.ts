import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService} from './settings.service';



const routes: Routes = [
  { path: 'my/settings', component: SettingsComponent },
];

@NgModule({
  imports: [
  CommonModule,
    MatTableModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    SettingsComponent,
  ],
  exports: [RouterModule],
  providers: [  SettingsService]
})
export class SettingModule { }
