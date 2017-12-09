import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';
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
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    this.search();

   }

  ngOnInit() {
    // this.changeData(1000);
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
  editProfile(id:any){
      this.profileService.navigateProfileEdit(id);
  }
  // changeData(maxLength){
  //   this.dataList = [];
  //   for(let i=0; i< maxLength; i++) {
  //     this.dataList.push(i);
  //   }
  // }
tab(){
  console.log('jskdfk')
}
}
