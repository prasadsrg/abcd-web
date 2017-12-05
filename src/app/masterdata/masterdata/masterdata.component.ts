import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../shared/service/animation.service';
import { MasterService } from './../masterdata.service';
import { ApexData } from '../../apex/entities/apexdata.entity';


@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterDataComponent implements OnInit {
    masterData: ApexData;
  
  constructor(private masterService: MasterService) {
   
    // this.init();
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }
  masterdata() {
    this.masterService.login(this.masterData).subscribe( data => {
    //   this.masterService.storageSave(data);
    })
  }
}
