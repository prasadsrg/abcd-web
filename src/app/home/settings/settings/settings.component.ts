import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import { ApexService } from './../../../shared/service/apex.service';

import {Storage} from './../../../shared/utils/storage'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userId:any;
  branches:any;
  branchId:any;
  brnchid:any;
  selectedRow : Number;
  

  branchData = {
      id:null,
      branch:{
        id:null
      }
  }
  constructor(private settingsservice: SettingsService, private apexservice: ApexService) {
    this.branchesDataLoad();

   }

  ngOnInit() {
  }
  // branchValue(value){
  //   this.userId = Storage.getSessionUser().id;
  //   this.branchData.id = this.userId
  //   this.branchData.branch.id = value;
  //   // console.log(this.branchData); 
  // }
 
  branchesDataLoad(){
    this.settingsservice.getBranches().subscribe((data)=>{
     this.branches = data;
    //  console.log(this.branches)
     this.branchId = Storage.getBranch();
     this.brnchid = this.branchId.id; 

     
    })
  }
  setBranch(index,item){
    Storage.setBranch(item);
    // console.log(this.branchId)
    this.selectedRow = index
    this.branchesDataLoad();
   
  }
}
