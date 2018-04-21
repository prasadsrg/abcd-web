import { Component, OnInit,ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Menu } from '../../../shared/common/interfaces';
import { ApexService } from '../../../shared/service/apex.service';
import { RouterLinkActive } from '@angular/router';
import { Storage} from '../../../shared/utils/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _menuSubscription: any;
  menuList: any[];
  activeMenuObject: any;
  isActive:boolean = false;
  states:any = {};
  
  constructor(private apexService: ApexService,) { 
  //  console.log(this.menus());
   // this.menuList = this.menus();
    this.states.activeItem = 'dashboard';
    let data = Storage.getMenuList();
    if(data){
      this.doAccess(data);
      if(Storage.getSessionItem('active_menu')){
        this.states.activeItem = Storage.getSessionItem('active_menu');
      }
    }
  }


  ngOnInit() {
    this._menuSubscription = this.apexService.menuEvent.subscribe(data => {
      console.log(data);
      this.doAccess(data);

    });

  }
  doActiveMenu(item: any) {
    Storage.setSessionItem('active_menu', item);
  }

  doAccess(data: any){
    this.menuList = []
    if(data){
      data.forEach(element => {
        if(element.active == true){
          this.menus().forEach( item => {
            if(element.menu == item.id){
              this.menuList.push({
                id : item.id,
                link:  item.link,
                name: element.name,
                icon: item.id
              })
            }
          });
        }
      });
    }
  }
  menus() {
    return [
      {
        id: "dashboard",
        link: "/dashboard/dashboard",
      },
      {
        id: 'profiles',
        link: "/profile/search",
      },
      {
        id: 'access_menu',
        link: "/accessmenu/search",
      },
      {
        id: 'app_data',
        link: "/appdata/search",
      },
      {
        id: 'reports',
        link: "/appdata/search",
      },
      {
        id: 'consumers',
        link: "/consumer/search",
      },      
      {
        id: 'settings',
        link: "/settings",
      },{
        id: 'branches',
        link: "/branche/search"
      }
    ]
  }
}
