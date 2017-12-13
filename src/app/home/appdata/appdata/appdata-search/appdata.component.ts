import { AppData } from './../../../../apex/entities/appdata';
import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { AppdataService } from './../../appdata.service';

import { AppdataForm } from '../appdata-edit/appdata.form';

@Component({
  selector: 'app-appdata',
  templateUrl: './appdata.component.html',
  styleUrls: ['./appdata.component.scss']
})
export class AppDataComponent implements OnInit {
    appdata:AppData = new AppData();
    dataList:any;
    codeList: any[] = [];
    paramId: any;    
    showSide: boolean = false;
    panelOpenState: boolean = false;
    myForm: any = AppdataForm.init();
    
  
  constructor(private appdataService: AppdataService) {
    AppdataForm.edit(this.myForm);    
   }
   entity(id: string) {
    this.appdataService.getMasterdata(id).subscribe((data: AppData) => {
      this.appdata = data;
    })
  }
  saveEntity() {
    this.appdataService.saveMasterdata(this.appdata).subscribe( (data) => {
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
    this.appdataService.searchMasterdata(this.appdata).subscribe( data => {
     this.dataList = data;
    
     
    })
  }

  onClose(action: any) {
    this.showSide = false;
  }
  getCodes(){
    this.appdataService.getCodes().subscribe( (data: any[]) =>{
      this.codeList = data;
    })
  }
}
