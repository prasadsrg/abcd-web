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
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  nonactive:any = [];
  active:any =[];
  rolesList: any[] = [];
  tabList:any = ['All users', 'Active', 'Non Active']
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    this.search();
   }

  ngOnInit() {
  };

  search() {
    let activeList : any = [];
    let nonactiveList:any=[];

    this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
      this.dataList = data;
      console.log(this.dataList);
      this.dataList.forEach((eachObject)=>{
          if(eachObject.active == true) {
            activeList.push(eachObject);
            console.log(activeList);
            this.active = activeList;
          }
      })
      this.dataList.forEach((eachObject)=>{
        if(eachObject.active == false) {
          nonactiveList.push(eachObject);
          console.log(nonactiveList);
          this.nonactive = nonactiveList;
        }
    })
    })
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent.tab.textLabel);
    if (tabChangeEvent.tab.textLabel == 'Non Active'){
      this.dataList = this.nonactive;
    } else if (tabChangeEvent.tab.textLabel == 'Active'){
      this.dataList = this.active;
    }else{
      this.search();
    }
  }
}
