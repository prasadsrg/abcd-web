import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
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
  constructor(private profileService: ProfileService) {
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

}
