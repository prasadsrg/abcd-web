import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { ConsumerComponent } from './consumer-search/consumer.component';
import { ConsumerService } from './consumer.service';
import { ConsumerEditComponent } from './consumer-edit/consumer-edit.component';
import { RouterModule,Routes } from '@angular/router';



const routes: Routes = [
  { path: 'consumer/search',  component: ConsumerComponent},
  { path: 'consumer/edit',  component: ConsumerEditComponent}

];

@NgModule({
  imports: [
  CommonModule,
    MatTableModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    ConsumerComponent,
    ConsumerEditComponent,
  ],
  exports: [RouterModule],
  providers: [ConsumerService]
})
export class ConsumerModule { }
