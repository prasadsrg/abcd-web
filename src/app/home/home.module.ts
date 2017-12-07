import { MenuAccessComponent } from './menuaccess/menuaccess.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';
import { ProfileSearchComponent } from './profile/profile-search/profile-search.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { ProfileService} from './profile/profile.service';
import {MatTableModule} from '@angular/material/table';

import { SettingsComponent } from './settings/settings/settings.component';
import { MasterDataComponent} from './masterdata/masterdata/masterdata.component';
import { SettingsService} from './settings/settings.service';
import { MenuAccessService } from './menuaccess/menuaccess.service';
import { MasterService } from './masterdata/masterdata.service';
import { ProfileAdminComponent } from './profile/profile-search/profile-admin.component';
import { ProfileSuperAdminComponent} from './profile/profile-search/profile-superadmin.component';
import { ProfileUserComponent } from './profile/profile-search/profile-user.component';
import { ProfileAllUsersComponent } from './profile/profile-search/profile-allusers.component';
import { ConsumerComponent } from './consumer/consumer/consumer.component';
import { ConsumerService } from './consumer/consumer.service';
import { ConsumerEditComponent } from './consumer/consumer/consumer-edit.component';




const routes: Routes = [
  { path: 'profile/search', component: ProfileSearchComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/myprofile', component: MyprofileComponent },
  { path: 'my/settings', component: SettingsComponent },
  { path: 'menuaccess', component: MenuAccessComponent },
  { path: 'masterdata',  component: MasterDataComponent},
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
    ProfileEditComponent,
    MyprofileComponent,
    SettingsComponent,
    MenuAccessComponent,
    MasterDataComponent,
    ProfileAdminComponent,
    ProfileSuperAdminComponent,
    ProfileUserComponent,
    ProfileAllUsersComponent,
    ConsumerComponent,
    ConsumerEditComponent
  ],
  exports: [RouterModule],
  providers: [ ProfileService, SettingsService, MenuAccessService, MasterService, ConsumerService]
})
export class HomeModule { }
