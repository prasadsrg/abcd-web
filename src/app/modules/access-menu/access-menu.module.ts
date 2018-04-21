import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { AccessMenuService } from './access-menu.service';
import { AccessMenuSearchComponent } from './access-menu-search/access-menu-search.component';
import { MenuAccessListEditComponent } from './access-menu-list-edit/access-menu-list-edit.component'


const routes: Routes = [
  { path: 'accessmenu/search', component: AccessMenuSearchComponent },

];

@NgModule({
  imports: [
  CommonModule,
    MatTableModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    AccessMenuSearchComponent, MenuAccessListEditComponent
  ],
  exports: [RouterModule],
  providers: [AccessMenuService]
})
export class AccessMenuModule { }
