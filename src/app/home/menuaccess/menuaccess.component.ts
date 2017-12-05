import { SessionUser } from './../../shared/common/interfaces';
import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { Menu } from '../../shared/common/interfaces';
import { MenuAccessForm } from './menuaccess.form';


import { ApexService } from '../../shared/service/apex.service';
import{MenuAccessService} from './menuaccess.service';
import { Storage } from './../../shared/utils/storage';
import {AppMenu} from './../../apex/entities/appmenu.entity'
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-menuaccess',
  templateUrl: './menuaccess.component.html',
  styleUrls: ['menuaccess.component.scss'],
})
export class MenuAccessComponent implements OnInit {
  sessionUser: any;
  menuaccess:AppMenu = new AppMenu();
  rolesList:any[] = [];
  menuRoleslistData:any[]=[];
  selectedIndex = 0;
  displayedColumns = ['Name','Priority','Active'];
  myForm: any = MenuAccessForm.init();
  
  
  
  dataSource = new MatTableDataSource(this.menuRoleslistData);
  
  constructor(private apexService: ApexService,private menuaccessservice: MenuAccessService) { 
    this.sessionUser = Storage.getSessionUser();
    console.log(this.sessionUser);
    MenuAccessForm.edit(this.myForm);
    
    // this.entity(this.menuaccessservice.getCurrentProfileId());
    this.dataLoadRoles();
   this.dataSource = new MatTableDataSource(this.menuRoleslistData);
    
    console.log(this.dataSource)
    
    
  }
  dataLoadRoles(){
    this.menuaccessservice.getMenuDataLoad().subscribe((data:any)=>{
    this.rolesList = data;
    if (this.rolesList.length > 0) {
      this.dataLoad(this.rolesList[0], 0);             
   }
    console.log(this.rolesList)
    })
  }
  dataLoad(searchObj: any, index) {
    this.selectedIndex = index;
    searchObj = {};
    
    searchObj.role = this.rolesList[this.selectedIndex].id;
    console.log(searchObj.role)
    
    this.menuaccessservice.getRolesDataLoad(searchObj.role).subscribe((data:any)=>{
      this.menuRoleslistData = data;
      this.dataSource = new MatTableDataSource(this.menuRoleslistData);
      console.log(this.menuRoleslistData)
    })
    // this.restService.menuSearch(searchObj)  
    //   .subscribe(results => {
    //     if (results) {
    //       this.menuData = results;
    //       console.log(this.menuData);
    //     }
    //   })
  }
  // entity(role: string){
  //   this.menuaccessservice.getMenuAccess(role).subscribe( (data: AppMenu) => {
  //     this.menuaccess = data;
  //   })
  // }
  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
    //   console.log('dasdas')
      
    // }
  
    };
    ngOnChanges(changes: any) {
      
           
      }
    }
  
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //     if (event.target.innerWidth < 768) {
  //         this.navMode = 'over';
  //         this.sidenav.close();
  //         console.log('hasdfj')
  //     }
  //     if (event.target.innerWidth > 768) {
  //        this.navMode = 'side';
  //        this.sidenav.open();

  //     }
  // }
  
