import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';


@Component({
  selector: 'app-profile-search-table',
  templateUrl: './profile-search-table.component.html',
  styleUrls: ['./profile-search-table.component.scss']
})
export class ProfileSearchTableComponent {
  inputData : any
  profile: any;
  admin: any = [];
  superadmin: any = [];
  user: any = [];
  item: any
  @Input() dataList: Profile[];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    this.init()
  }

  ngOnInit() {

  };
 
  init() {
    this.profile = new Profile();
  }
  editProfile(item) {
    if (!item) {
      item = new Profile();
  this.profileService.navigateProfileEdit(item.id);
  }else {
    this.profileService.navigateProfileEdit(item.id);
  }

}}
