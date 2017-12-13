import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss']
})
export class ProfileSearchComponent implements OnInit {
  filter:any;
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  allUsers: any = [];
  activeList: any = [];
  nonActiveList: any = [];
  showSide:boolean = false;
  constructor(private profileService: ProfileService, private apexservice: ApexService) {

  }

  ngOnInit() {
    this.search();
  };

  search() {


    this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
      this.allUsers = data;
      this.allUsers.forEach((eachObject) => {
        if (eachObject.active == true) {
          this.activeList.push(eachObject);
        } else {
          this.nonActiveList.push(eachObject);
        }
      });
      this.dataList = this.allUsers;
    })
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent.tab.textLabel);
    if (tabChangeEvent.tab.textLabel == 'allUsers') {
      this.dataList = this.allUsers;
    } else if (tabChangeEvent.tab.textLabel == 'activeUsers') {
      this.dataList = this.activeList;
    } else {
      this.dataList = this.nonActiveList;
    }
  }
  add(item) {
    if (!item) {
      item = new Profile();
      this.profileService.navigateProfileEdit(item.id);
    }
  }
  filter(){
    this.showSide = true;
  }
  onClose(action: any) {
    this.showSide = false;
  }
}