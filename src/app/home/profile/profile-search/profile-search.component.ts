import { Component, OnInit, SimpleChanges } from '@angular/core';
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
 ngOnChanges(changes: SimpleChanges) {
    if(changes['dataList']) {
            this.dataList = changes['dataList'].currentValue;
            console.log(this.filter);
          }
        }
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
  filters(){
    this.showSide = true;
  }
  // onClose(action: any) {
  //   this.showSide = false;
  // }
  onClose($event: any) {
    this.showSide = false;
    if (!$event) { return; }
    let roleList: any = [];
    console.log($event);
    $event.forEach(element => {
      let isFound = false;
      console.log(this.allUsers);
      this.dataList.forEach(item => {
        if (item.role.toLowerCase() === element.name.replace(' ', '').toLowerCase()) {
          roleList.push(item);
          console.log(roleList);
        }
      });
      if (!isFound) {
        isFound = true;
        this.dataList = roleList;
        this.dataList.forEach((eachObject) => {
          if (eachObject.active == true) {
            this.activeList.push(eachObject);
          } else {
            this.nonActiveList.push(eachObject);
          }
        });
        this.dataList = this.allUsers;

        console.log(roleList);
      }
    });
    // if (roleList.length > 0) {
    //   let obj: any = Object.assign({}, this.menu);
    //   obj.link = menuList;
    //   console.log(obj);
    // }
  }
}