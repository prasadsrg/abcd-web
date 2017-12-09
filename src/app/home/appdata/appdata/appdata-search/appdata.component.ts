import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { Appdataservice } from './../../appdata.service';
import { ApexData } from '../../../../apex/entities/apexdata';


@Component({
  selector: 'app-appdata',
  templateUrl: './appdata.component.html',
  styleUrls: ['./appdata.component.scss']
})
export class MasterDataComponent implements OnInit {
    masterData: any =  ApexData;
    masterDataList:any;
  
  constructor(private appdataservice: Appdataservice) {
    this.searchMasterdata();
   
    // this.init();
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }
  searchMasterdata() {
    this.appdataservice.searchMasterdata(this.masterData).subscribe( data => {
     this.masterDataList = data;
     console.log(this.masterDataList)
    })
  }
  editMaster(item: ApexData){
    if (!item) {
      item = new ApexData();
      this.appdataservice.navigateMasterEdit(null);
    }else {
      this.appdataservice.navigateMasterEdit(item);
    }
  }
}
