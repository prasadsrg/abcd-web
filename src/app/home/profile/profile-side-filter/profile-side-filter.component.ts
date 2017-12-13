import { Component, OnInit , Input , EventEmitter , Output, SimpleChanges} from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
// import { AppData } from '../../../../apex/entities/appdata';
 import { ProfileService } from '../profile.service';
// import { AppdataForm } from '../appdata.form';

@Component({
  selector: 'app-profile-side-filter',
  templateUrl: './profile-side-filter.component.html',
  styleUrls : ['./profile-side-filter.component.scss']
})
export class ProfileSideFilterComponent implements OnInit {
   paramId: any;
   @Input() filter;
   @Output() close: EventEmitter<any> =  new EventEmitter()
   rolesList: any[] = []
  constructor(private profileservice: ProfileService, private apexservice: ApexService) {
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
    this.profileservice.getRoles().subscribe((data: any) => {
      this.rolesList = data;
      console.log(this.rolesList)
    })
  }
  onClose() {
          this.close.emit();
  }
  applyFilter(){
    
  }

}
