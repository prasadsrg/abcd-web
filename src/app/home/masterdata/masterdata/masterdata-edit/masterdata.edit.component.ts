import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { ApexService } from './../../../../shared/service/apex.service';
import { AppData } from '../../../../apex/entities/appdata.entity';
import { MasterService } from '../../masterdata.service';
import { MasterdataForm } from '../masterdata.form';

@Component({
  selector: 'app-masterdata-edit',
  templateUrl: './masterdata.edit.component.html',
//   styleUrls: ['./profile-edit.component.scss']
})
export class MasterdataEditComponent implements OnInit {
  appdata: AppData = new AppData();
   myForm: any = MasterdataForm.init();
   paramId: any;
  constructor(private masterService: MasterService, private apexservice: ApexService) {
     MasterdataForm.edit(this.myForm);
    this.paramId = this.masterService.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
    //this.init();
   }

  ngOnInit() {
  }
  entity(id: string) {
    this.masterService.getMasterdata(id).subscribe((data: AppData) => {
      this.appdata = data;
    })
  }
  saveEntity() {
    this.masterService.saveMasterdata(this.appdata).subscribe( (data) => {
      console.log(data);
      //this.apexservice.showMessage(data.message);
      this.masterService.navigateMaster();
    });
  }
  // init() {

  //   this.auth = new User();
  // }

}
