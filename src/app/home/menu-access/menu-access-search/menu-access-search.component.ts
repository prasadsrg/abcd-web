import { SessionUser } from './../../../shared/common/interfaces';
import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../../shared/common/interfaces';
import { AppMenuAccessForm } from './../../menu-access/menu-access-list-edit/menu-access.form';
import { ApexService } from '../../../shared/service/apex.service';
import { MenuAccessService } from './../menuaccess.service';
import { Storage } from './../../../shared/utils/storage';
import { AppMenu } from './../../../apex/entities/appmenu';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-menu-access-search',
  templateUrl: './menu-access-search.component.html',
  styleUrls: ['./menu-access-search.component.scss']
})
export class MenuAccessSearchComponent implements OnInit {

  sessionUser: any;
  menuaccess: AppMenu = new AppMenu();
  rolesList: any[] = [];
  menuList: any[] = [];
  selectedIndex = 0;
  myForm: any = AppMenuAccessForm.init();
  savedata = {
    data:null
  };
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>
  constructor(private apexService: ApexService, private menuaccessservice: MenuAccessService) {
    this.sessionUser = Storage.getSessionUser();
    AppMenuAccessForm.edit(this.myForm);
<<<<<<< HEAD
    // this.dataLoadRoles();
    // this.dataSource = new MatTableDataSource(this.menuRoleslistData);

  }
  // dataLoadRoles() {
  //   this.menuaccessservice.getMenuDataLoad().subscribe((data: any) => {
  //     this.rolesList = data;
  //     if (this.rolesList.length > 0) {
  //       this.tabChanged(this.rolesList[0], 0);
  //     }
  //     console.log(this.rolesList)
  //   })
  // }
  // dataLoad(searchObj: any, index) {
  //   this.selectedIndex = index;
  //   searchObj = {};
  //   searchObj.role = this.rolesList[this.selectedIndex].id;
  //   console.log(searchObj.role);
=======
    this.dataLoadRoles();

  }
  dataLoadRoles() {
    this.menuaccessservice.getRoles().subscribe((data: any) => {
      this.rolesList = data;
      if (this.rolesList.length > 0) {
        this.tabChanged(this.rolesList[0], 0);
      }
      console.log(this.rolesList)
    })
  }
>>>>>>> 796caed962899bd6d56e8d62f1f281104cb7cbb5

  ngOnInit() {

  };
  // ngOnChanges(changes: any) {


  //   }

  public tabChanged(tabChangeEvent: MatTabChangeEvent, index): void {
    if(tabChangeEvent.tab){
      this.menuaccessservice.getRolesDataLoad(tabChangeEvent.tab.textLabel).subscribe((data: any) => {
        this.menuList = data;
        console.log(this.menuList);
      })
    }

  }


  menusave(){
    
    console.log(this.menuList);
    this.savedata.data = this.menuList;
    console.log(this.savedata);
    
    this.menuaccessservice.saveMenuAccess(this.savedata).subscribe((data:any)=>{
      console.log(data);
    })
  }


}
