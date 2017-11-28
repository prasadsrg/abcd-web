import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Menu } from '../../shared/common/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  menuList: any[];
  activeMenuObject: any;
  
  constructor() { 
    console.log(this.menus());
    this.menuList = this.menus();
  }


  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 768) {
          this.navMode = 'over';
          this.sidenav.close();
      }
      if (event.target.innerWidth > 768) {
         this.navMode = 'side';
         this.sidenav.open();
      }
  }
  menus() {
    return [
     
      {
        "_id": null,
        "name": "Home",
        "link": "/",
        "icon": "alarm"
      },
      {
        "_id": null,
        "name": "Login",
        "link": "/auth/login",
        "icon": "accessibility"
      },
      {
        "_id": null,
        "name": "Register",
        "link": "/auth/register",
        "icon": "alarm"
      }
    ]
  }
  // navigate(item) {
  //   this.activeMenuObject = item.name;
  //   event.stopPropagation();
  //   console.log(item.url)
  // }

 
}
