import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSearchComponent } from './profile/profile-search/profile-search.component';
import { ProfileSearchTableComponent } from './profile/profile-search-table/profile-search-table.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { ProfileService} from './profile/profile.service';
import {MatTableModule} from '@angular/material/table';
import { SettingsComponent } from './settings/settings/settings.component';
import { SettingsService} from './settings/settings.service';
import { MenuAccessService } from './menu-access/menuaccess.service';
import { AppDataService } from './app-data/app-data.service';
import { ConsumerComponent } from './consumer/consumer/consumer-search/consumer.component';
import { ConsumerService } from './consumer/consumer.service';
import { ConsumerEditComponent } from './consumer/consumer/consumer-edit/consumer-edit.component';

import { MenuAccessListEditComponent } from './menu-access/menu-access-list-edit/menu-access-list-edit.component';
import { MenuAccessSearchComponent } from './menu-access/menu-access-search/menu-access-search.component';
import { BranchesEditComponent } from './branches/branches-edit/branches-edit.component';
import { BranchSearchComponent} from './branches/branches-search/branches-search.component';
import { BranchService } from './branches/branches.service';
import { BranchAddComponent } from './branches/branches-add/branches-add.component';
import { ProfileSideFilterComponent } from './profile/profile-side-filter/profile.side.filter.component';
import { AppDataListFormComponent } from './app-data/app-data-list-form/app-data-list-form.component';
import { AppDataComponent } from './app-data/app-data/app-data.component';




const routes: Routes = [
  { path: 'profile/search', component: ProfileSearchComponent},
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/myprofile', component: MyprofileComponent },
  { path: 'my/settings', component: SettingsComponent },
  { path: 'menuaccess', component: MenuAccessSearchComponent },
  { path: 'appdata',  component: AppDataComponent},
  { path: 'consumer',  component: ConsumerComponent},
  { path: 'consumer-edit',  component: ConsumerEditComponent},
  { path: 'branch',  component: BranchSearchComponent},
  { path: 'branch-edit', component: BranchesEditComponent},
  { path: 'branch-add', component: BranchAddComponent}


];

@NgModule({
  imports: [
  CommonModule,
    MatTableModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    ProfileSearchComponent,
    ProfileSearchTableComponent,
    ProfileEditComponent,
    MyprofileComponent,
    SettingsComponent,
    AppDataComponent,
    ConsumerComponent,
    ConsumerEditComponent,
    MenuAccessListEditComponent,
    MenuAccessSearchComponent,
    BranchesEditComponent,
    BranchSearchComponent,
    BranchAddComponent,
    ProfileSideFilterComponent,
    AppDataListFormComponent
  ],
  exports: [RouterModule],
  providers: [ ProfileService, SettingsService, MenuAccessService, AppDataService, ConsumerService , BranchService]
})
export class HomeModule { }
