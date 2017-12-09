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
import { Appdataservice } from './appdata/appdata.service';
import { ConsumerComponent } from './consumer/consumer/consumer-search/consumer.component';
import { ConsumerService } from './consumer/consumer.service';
import { ConsumerEditComponent } from './consumer/consumer/consumer-edit/consumer-edit.component';
import { AppDataComponent } from './appdata/appdata/appdata-search/appdata.component';
import { AppdataEditComponent } from './appdata/appdata/appdata-edit/appdata.edit.component';
import { MenuAccessListEditComponent } from './menu-access/menu-access-list-edit/menu-access-list-edit.component';
import { MenuAccessSearchComponent } from './menu-access/menu-access-search/menu-access-search.component';



const routes: Routes = [
  { path: 'profile/search', component: ProfileSearchComponent},
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/myprofile', component: MyprofileComponent },
  { path: 'my/settings', component: SettingsComponent },
  { path: 'menuaccess', component: MenuAccessSearchComponent },
  { path: 'masterdata',  component: AppDataComponent},
  { path: 'consumer',  component: ConsumerComponent},
  { path: 'consumer-edit',  component: ConsumerEditComponent}

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
    AppdataEditComponent,
    MenuAccessListEditComponent,
    MenuAccessSearchComponent
  ],
  exports: [RouterModule],
  providers: [ ProfileService, SettingsService, MenuAccessService, Appdataservice, ConsumerService]
})
export class HomeModule { }
