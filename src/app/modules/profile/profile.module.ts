import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ProfileService} from './profile.service';
import {MatTableModule} from '@angular/material/table';
import { ProfileAdminComponent } from './profile-search/profile-admin.component';
import { ProfileAllUsersComponent } from './profile-search/profile-allusers.component';
import { ProfileSuperAdminComponent } from './profile-search/profile-superadmin.component';
import { ProfileUserComponent } from './profile-search/profile-user.component';



const routes: Routes = [
  { path: 'profile/search', component: ProfileSearchComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/myprofile', component: MyprofileComponent },

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
    ProfileAdminComponent,
    ProfileAllUsersComponent,
    ProfileSuperAdminComponent,
    ProfileUserComponent
  ],
  exports: [RouterModule],
  providers: [ ProfileService]
})
export class ProfileModule { }
