import { Component, OnInit,Input } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile.entity';
@Component({
  selector: 'app-profile-superadmin',
  templateUrl: './profile-superadmin.component.html',
//   styleUrls: ['./profile-search.component.scss']
})
export class ProfileSuperAdminComponent implements OnInit {
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  @Input() superadmin: Profile[];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    this.search();
   }

  ngOnInit() {
    // this.changeData(1000);a
  }
  search() {
    this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
      this.dataList = data;
      console.log(this.dataList);
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

}
