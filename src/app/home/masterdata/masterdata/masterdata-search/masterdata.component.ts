import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { MasterService } from './../../masterdata.service';
import { ApexData } from '../../../../apex/entities/apexdata.entity';


@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterDataComponent implements OnInit {
    masterData: any =  ApexData;
    masterDataList:any;
  
  constructor(private masterService: MasterService) {
    this.searchMasterdata();
   
    // this.init();
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }
  searchMasterdata() {
    this.masterService.searchMasterdata(this.masterData).subscribe( data => {
     this.masterDataList = data;
     console.log(this.masterDataList)
    })
  }
  editMaster(item: ApexData){
    if (!item) {
      item = new ApexData();
      this.masterService.navigateMasterEdit(null);
    }else {
      this.masterService.navigateMasterEdit(item);
    }
  }
}
