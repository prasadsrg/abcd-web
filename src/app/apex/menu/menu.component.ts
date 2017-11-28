import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { Menu } from '../../shared/common/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: any[];
  activeMenuObject: any;
  
  constructor() { 
    console.log(this.menus());
    this.menuList = this.menus();
  }


  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
    //   console.log('dasdas')
      
    // }
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
        "icon": "alarm"
      },
      {
        "id": null,
        "name": "Login",
        "link": "/auth/login",
        "icon": "accessibility"
      },
      {
        "id": null,
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
