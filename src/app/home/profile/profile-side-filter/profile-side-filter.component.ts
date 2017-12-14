import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from '../profile.service';
import { Profile } from '../../../apex/entities/profile';

@Component({
  selector: 'app-profile-side-filter',
  templateUrl: './profile-side-filter.component.html',
  styleUrls : ['./profile-side-filter.component.scss']
})
export class ProfileSideFilterComponent implements OnInit {
   paramId: any;
   profile: Profile = new Profile();
   @Output() close: EventEmitter<any> =  new EventEmitter()
   rolesList: any[] = [];
   @ViewChild('rolesListItems') rolelist : HTMLInputElement;
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
      this.dataLoadRoles();
   }

  ngOnInit() {
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes['filter']) {
  //           this.filter = changes['filter'].currentValue;
  //           console.log(this.filter);
  //         }
  //       }
  dataLoadRoles() {
    this.profileService.getRoles().subscribe((data: any) => {
      this.rolesList = data;
    })
  }
  onClose() {
      this.close.emit();
  }
  applyFilter() {
    let selectedItems: any[] = [];
    this.rolesList.forEach(element => {
      if (element.checked) {
        // delete element.checked;
        selectedItems.push(element)
      }
    });
    this.close.emit(selectedItems);
  }
  reset(){
    this.rolesList.forEach(element => {
      if (element.checked) {
        // delete element.checked;
        console.log(element)
        
      }
    });
  }
}
