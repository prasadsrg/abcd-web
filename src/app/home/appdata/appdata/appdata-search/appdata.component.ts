import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { Appdataservice } from './../../appdata.service';
import { AppData } from '../../../../apex/entities/appdata';


@Component({
  selector: 'app-appdata',
  templateUrl: './appdata.component.html',
  styleUrls: ['./appdata.component.scss']
})
export class AppDataComponent implements OnInit {
    appdata: any = {};
    masterDataList:any;
    showSide: boolean = false;
  
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
    this.appdataservice.searchMasterdata(this.appdata).subscribe( data => {
     this.masterDataList = data;
     console.log(this.masterDataList)
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
