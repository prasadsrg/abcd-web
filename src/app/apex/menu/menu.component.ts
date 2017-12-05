import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { Menu } from '../../shared/common/interfaces';
import { ApexService } from '../../shared/service/apex.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _menuSubscription: any;
  menuList: any[];
  activeMenuObject: any;
  
  constructor(private apexService: ApexService,) { 
    console.log(this.menus());
    this.menuList = this.menus();
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
        "id": null,
        "name": "Home",
        "link": "/",
        "icon": "icon-profile"
      },
      {
        "id": null,
        "name": "Login",
        "link": "/auth/login",
        "icon": "icon-location"
      },
      {
        "id": null,
        "name": "Register",
        "link": "/auth/register",
        "icon": "icon-dashboard"
      }
    ]
  }
  // navigate(item) {
  //   this.activeMenuObject = item.name;
  //   event.stopPropagation();
  //   console.log(item.url)
  // }

 
}
