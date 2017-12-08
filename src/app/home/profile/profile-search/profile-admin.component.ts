import { Component, OnInit , Input} from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
//   styleUrls: ['./profile-search.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  @Input() admin: Profile[];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    // this.search();
    console.log(this.admin)
   }

  ngOnInit() {
    // this.changeData(1000);
  }
  // search() {
  //   this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
  //           this.dataList = data;
  //           console.log(this.dataList);
  //   })
  // }
  editProfile(id: any) {
      this.profileService.navigateProfileEdit(id);
  }
  // changeData(maxLength){
  //   this.dataList = [];
  //   for(let i=0; i< maxLength; i++) {
  //     this.dataList.push(i);
  //   }
  // }

}
