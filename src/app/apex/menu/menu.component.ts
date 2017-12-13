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
        "name": "Dashboard",
        "link": "/dashboard/admindashboard",
        "icon": "admin_dashboard"
      },
      {
        "id": 'Item2',
        "name": "Trip Activity",
        "link": "/dashboard/admindashboard",
        "icon": "trip_activity"
      },
      
      // {
      //   "id": 'Item3',
      //   "name": "Package Status",
      //   "link": "/dashboard/admindashboard",
      //   "icon": "package_status"
      // },
      // {
      //   "id": 'Item4',
      //   "name": "Vechile Activity",
      //   "link": "/dashboard/admindashboard",
      //   "icon": "vechile_activity"
      // },
      // {
      //   "id": 'Item5',
      //   "name": "Density Map",
      //   "link": "/dashboard/admindashboard",
      //   "icon": "density_map"
      // },
      {
        "id": 'Item7',
        "name": "User Profiles",
        "link": "/profile/search",
        "icon": "profile"
      },
      {
        "id": 'Item8',
        "name": "Menu Access",
        "link": "/menuaccess",
        "icon": "menu_access"
      },
      {
        "id": 'Item7',
        "name": "User Profiles",
        "link": "/profile/search",
        "icon": "profile"
      },
      {
        "id": 'Item12',
        "name": "Master Data",
        "link": "/masterdata",
        "icon": "package_status"
      },
      {
        "id": 'Item9',
        "name": "Consumers",
        "link": "/consumer",
        "icon": "package_status"
      },
      {
        "id": 'Item10',
        "name": "Branch",
        "link": "/branch",
        "icon": "package_status"
      },


    ]
  }
}
