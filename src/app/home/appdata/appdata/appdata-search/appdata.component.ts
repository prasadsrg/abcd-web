import { AppData } from './../../../../apex/entities/appdata';
import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { Appdataservice } from './../../appdata.service';

import { AppdataForm } from '../appdata-edit/appdata.form';

@Component({
  selector: 'app-appdata',
  templateUrl: './appdata.component.html',
  styleUrls: ['./appdata.component.scss']
})
export class AppDataComponent implements OnInit {
    appdata:AppData = new AppData();
    masterDataList:any;;
    paramId: any;    
    showSide: boolean = false;
    panelOpenState: boolean = false;
    myForm: any = AppdataForm.init();
    
  
  constructor(private appdataservice: Appdataservice) {
    AppdataForm.edit(this.myForm);    
    this.paramId = this.appdataservice.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
    
    this.searchMasterdata();
   
    // this.init();
   }
   entity(id: string) {
    this.appdataservice.getMasterdata(id).subscribe((data: AppData) => {
      this.appdata = data;
    })
  }
  saveEntity() {
    this.appdataservice.saveMasterdata(this.appdata).subscribe( (data) => {
      console.log(data);
      // this.apexservice.showMessage(data.);
    });
    
  }
  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }
  searchMasterdata() {
    this.appdataservice.searchMasterdata(this.appdata).subscribe( data => {
     this.masterDataList = data;
    
     
    })
  }
  editMaster(item: AppData) {
    this.showSide = true;
    if (!item) {
      item = new AppData();
    }
    this.appdata = Object.assign({}, item);
    
  }
  onClose(action: any) {
    this.showSide = false;
  }
}
