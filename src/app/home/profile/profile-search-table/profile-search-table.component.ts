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
export class ProfileSearchTableComponent implements OnChanges {
  inputData : any
  profile: Profile = new Profile();
  admin: any = [];
  superadmin: any = [];
  user: any = [];
  @Input() dataList: Profile[];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
      this.dataList = this.inputData;
      console.log(this.dataList)
    }
  }
  ngOnInit() {
  };
}
