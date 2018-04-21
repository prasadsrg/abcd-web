import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';

import { MyProfileForm } from './myprofile.form';

import { ProfileService } from './../profile.service';
import { Profile } from '../../../entities/profile';
import { Img } from '../../../entities/img';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  profile: Profile = new Profile();
  myForm: any = MyProfileForm.init();
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    MyProfileForm.edit(this.myForm);
    this.entity(this.profileService.getCurrentProfileId());
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }

  entity(id: string){
    this.profileService.getProfile(id).subscribe( (data: Profile) => {
      this.profile = data;
      if(!this.profile.img){
          this.profile.img = new Img();
      }
    })
  }
  saveEntity() {
    this.profileService.saveProfile(this.profile).subscribe( (data: any) => {
      const message = data.message
      this.apexservice.showMessage(data.message);
    });
  }

}
