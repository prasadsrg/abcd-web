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
  list:any = [];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {

  }
  ngOnInit() {
    this.search();
  };
 ngOnChanges(changes: SimpleChanges) {
    if(changes['dataList']) {
            this.dataList = changes['dataList'].currentValue;
            console.log(this.dataList);
          }
        }
  search() {
    this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
      this.list = data;
      this.userSeperation(this.list);
    })
  }
  userSeperation(userList){
    this.activeList = [];
    this.nonActiveList = [];
    userList.forEach((eachObject) => {
      if (eachObject.active == true) {
        this.activeList.push(eachObject);
        console.log(this.activeList)
      } else {
        this.nonActiveList.push(eachObject);
        console.log(this.nonActiveList)
      }
    });
    this.dataList = userList;
    this.allUsers = userList;
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
  onClose($event: any) {
    this.showSide = false;
    if (!$event) { return; }
    let filteredList: any = [];
    console.log($event);
    $event.forEach(element => {
      let isFound = false;
      console.log(this.allUsers);
      this.list.forEach(item => {
        if (item.role.toLowerCase() === element.name.replace(' ', '').toLowerCase()) {
          filteredList.push(item);
          console.log(filteredList);
        }
        this.dataList = filteredList;
        this.userSeperation(filteredList);
      });
      // if (!isFound) {
      //   isFound = true;
      //   this.dataList = roleList;
      //   this.userSeperation(roleList);
      // }
    });
    console.log(filteredList)
    //this.allUsers = this.dataList;    
  }
}