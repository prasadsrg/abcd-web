import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { ApexService } from './../../../../shared/service/apex.service';
import { AppData } from '../../../../apex/entities/appdata';
import { Appdataservice } from '../../appdata.service';
import { AppdataForm } from '../appdata.form';

@Component({
  selector: 'app-masterdata-edit',
  templateUrl: './masterdata.edit.component.html',
//   styleUrls: ['./profile-edit.component.scss']
})
export class MasterdataEditComponent implements OnInit {
  appdata: AppData = new AppData();
   myForm: any = AppdataForm.init();
   paramId: any;
  constructor(private appdataservice: Appdataservice, private apexservice: ApexService) {
    AppdataForm.edit(this.myForm);
    this.paramId = this.appdataservice.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
    //this.init();
   }

  ngOnInit() {
  }
  entity(id: string) {
    this.appdataservice.getMasterdata(id).subscribe((data: AppData) => {
      this.appdata = data;
    })
  }
  saveEntity() {
    this.appdataservice.saveMasterdata(this.appdata).subscribe( (data) => {
      console.log(data);
      //this.apexservice.showMessage(data.message);
      this.appdataservice.navigateMaster();
    });
  }
  // init() {

  //   this.auth = new User();
  // }

}
