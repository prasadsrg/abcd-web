import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { Menu } from '../../shared/common/interfaces';
import { ApexService } from '../../shared/service/apex.service';
import { RouterLinkActive } from '@angular/router';


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
    console.log(this.menus());
    this.menuList = this.menus();
    this.states.activeItem = 'item1'
  }


  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
    //   console.log('dasdas')
      
    // }
    this._menuSubscription = this.apexService.menuEvent;
    this._menuSubscription.subscribe(data => {
      console.log(data);
    });
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
  menus() {
    return [
      {
        "id": 'Item1',
        "name": "Home",
        "link": "/",
        "icon": "admin_dashboard"
      },
      {
        "id": 'Item2',
        "name": "Location",
        "link": "/profile/myprofile",
        "icon": "trip_activity"
      },
      
      {
        "id": 'Item3',
        "name": "Register",
        "link": "/profile/myprofile",
        "icon": "package_status"
      },
      {
        "id": 'Item4',
        "name": "Register",
        "link": "/profile/myprofile",
        "icon": "vechile_activity"
      },
      {
        "id": 'Item5',
        "name": "Register",
        "link": "/profile/myprofile",
        "icon": "density_map"
      },
      {
        "id": 'Item7',
        "name": "Register",
        "link": "/profile/myprofile",
        "icon": "profile"
      },
      {
        "id": 'Item8',
        "name": "Register",
        "link": "/menuaccess",
        "icon": "menu_access"
      }
      
    ]
  }
  // navigate(item) {
  //   this.activeMenuObject = item.name;
  //   event.stopPropagation();
  //   console.log(item.url)
  // }

  activeMenu(){
    this.isActive = true;
  }
}
