import { SessionUser } from './../../../shared/common/interfaces';
import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../../shared/common/interfaces';
import { AppMenuAccessForm } from './../../menu-access/menu-access-list-edit/menu-access.form';
import { ApexService } from '../../../shared/service/apex.service';
import { MenuAccessService } from './../menuaccess.service';
import { Storage } from './../../../shared/utils/storage';
import { AppMenu } from './../../../apex/entities/appmenu';
import { MatTableDataSource, MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-menuaccess',
  templateUrl: './menuaccess.component.html',
  styleUrls: ['menuaccess.component.scss'],
})
export class MenuAccessComponent implements OnInit {
  sessionUser: any;
  menuaccess: AppMenu = new AppMenu();
  rolesList: any[] = [];
  menuList: any[] = [];
  selectedIndex = 0;
  displayedColumns = ['Name', 'Priority', 'Active'];
  myForm: any = AppMenuAccessForm.init();
  savedata = {
    data:null
  };
  // dataSource = new MatTableDataSource(this.menuRoleslistData);
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>
  constructor(private apexService: ApexService, private menuaccessservice: MenuAccessService) {
    this.sessionUser = Storage.getSessionUser();
    AppMenuAccessForm.edit(this.myForm);
    this.dataLoadRoles();
    // this.dataSource = new MatTableDataSource(this.menuRoleslistData);

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

  ngOnInit() {

  };
  // ngOnChanges(changes: any) {


  //   }

  public tabChanged(tabChangeEvent: MatTabChangeEvent, index): void {
    if(tabChangeEvent.tab.textLabel){
      
    this.menuaccessservice.getRolesDataLoad(tabChangeEvent.tab.textLabel).subscribe((data: any) => {
      this.menuList = data;
      // this.dataSource = new MatTableDataSource(this.menuRoleslistData);
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
