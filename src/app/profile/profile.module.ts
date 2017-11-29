import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

import { MyProfileService } from './myprofile/myprofile.service';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'myprofile', component: MyprofileComponent },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forRoot(routes, { useHash: true }), SharedModule.forRoot()
    ],
    declarations: [
        ProfileComponent,
        MyprofileComponent
    ],
    providers: [MyProfileService],
    exports: [RouterModule]
})
export class ProfileModule { }