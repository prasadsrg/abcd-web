import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';

import { MyProfileForm } from './myprofile.form';

import { ProfileService } from './../profile.service';

import { Profile } from '../../../apex/entities/profile.entity';
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
    })
  }
  saveEntity() {
    this.profileService.saveProfile(this.profile).subscribe( (data) => {
      console.log(data);
<<<<<<< HEAD
      // this.apexservice.showMessage(data.message);
=======
      // const message = data.message
      //this.apexservice.showMessage(data.message);
>>>>>>> 309df1400d0ef3d3c3fbe8b6f566f7b8326ad2ea
    });
  }

}
