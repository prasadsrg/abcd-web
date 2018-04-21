import { SessionUser } from './../../../shared/common/interfaces';
import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../../shared/common/interfaces';
import { AccessMenuForm } from './../../access-menu/access-menu-list-edit/access-menu.form';
import { ApexService } from '../../../shared/service/apex.service';
import { AccessMenuService } from '../access-menu.service';
import { Storage } from './../../../shared/utils/storage';
import { AccessMenu } from '../../../entities/accessmenu';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-access-menu-search',
  templateUrl: './access-menu-search.component.html',
  styleUrls: ['./access-menu-search.component.scss']
})
export class AccessMenuSearchComponent implements OnInit {

  sessionUser: any;
  menuaccess: AccessMenu = new AccessMenu();
  rolesList: any[] = [];
  menuList: any[] = [];
  selectedIndex = 0;
  
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>
  constructor(private apexService: ApexService, private accessMenuService: AccessMenuService) {
    this.sessionUser = Storage.getSessionUser();
    this.dataLoadRoles();

  }
  dataLoadRoles() {
    this.accessMenuService.getRoles().subscribe((data: any) => {
      this.rolesList = data;
      if (this.rolesList.length > 0) {
        this.tabChanged(this.rolesList[0]);
      }
    })
  }

  ngOnInit() {

  };


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if(tabChangeEvent.tab){
      this.selectedIndex = tabChangeEvent.index;
      this.menuList = [];
      this.accessMenuService.getAccessMenu({role: this.rolesList[this.selectedIndex].id}).subscribe((data: any) => {
        this.menuList = data;
      })
    }

  }


  menusave(){
    this.accessMenuService.saveMenuAccess(this.menuList).subscribe((data:any)=>{
      console.log(data);
      this.apexService.showMessage(data.message);
    })
  }


}
