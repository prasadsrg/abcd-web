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
  elem:any;
  branchstatus:any;
  isActive:boolean;

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
  branchValue(value){
    this.userId = Storage.getSessionUser().id;
    this.branchData.id = this.userId
    this.branchData.branch.id = value;
    console.log(this.branchData); 
  }
  saveBranch(){
    this.settingsservice.saveBranch(this.branchData).subscribe((data)=>{
      // console.log(data)
    })
  }
  branchesDataLoad(){
    this.settingsservice.getBranches().subscribe((data)=>{
     this.branches = data
     console.log(this.branches)
    this.branchId = Storage.getBranch();
    console.log(this.branchId)    
     this.branches.forEach(element => {
      this.elem = element.id;
      this.branchstatus = this.branchId.id;
      
      this.isActive = this.elem == this.branchstatus;
      console.log(this.isActive)
      
     });
      
    })
  }
}
