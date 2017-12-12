import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileForm } from './profile.form';

import { ProfileService } from './../profile.service';

import { Profile } from '../../../apex/entities/profile';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile: Profile = new Profile();
  myForm: any = ProfileForm.init();
  paramId: any;
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    ProfileForm.edit(this.myForm);
    this.paramId = this.profileService.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
    //this.init();
   }

  ngOnInit() {
  }
  entity(id: string) {
    this.profileService.getProfile(id).subscribe((data: Profile) => {
      this.profile = data;
      console.log(this.profile);
    })
  }
  saveEntity() {
    this.profileService.saveProfile(this.profile).subscribe( (data) => {
      console.log(data);
      //this.apexservice.showMessage(data.message);
    });
  }
  // init() {

  //   this.auth = new User();
  // }

}
