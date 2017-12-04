import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ProfileForm } from './profile.form';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
   myForm: any = ProfileForm.init();
  constructor() {
    ProfileForm.edit(this.myForm);
    //this.init();
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }

}
