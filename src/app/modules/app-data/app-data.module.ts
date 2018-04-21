import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { AppDataService } from './app-data.service';
import { AppDataComponent } from './app-data/app-data.component';
import { AppDataListFormComponent } from './app-data-list-form/app-data-list-form.component';



const routes: Routes = [
  { path: 'appdata/search',  component: AppDataComponent},


];

@NgModule({
  imports: [
  CommonModule,
    MatTableModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    AppDataComponent,
    AppDataListFormComponent
  ],
  exports: [RouterModule],
  providers: [ AppDataService]
})
export class AppDataModule { }
