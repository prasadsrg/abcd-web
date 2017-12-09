import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';

@Component({
  selector: 'app-profile-search-table',
  templateUrl: './profile-search-table.component.html',
  styleUrls: ['./profile-search-table.component.scss']
})
export class ProfileSearchTableComponent implements OnInit {
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  admin: any = [];
  superadmin: any = [];
  user: any = [];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
  }

  ngOnInit() {
  };
}
