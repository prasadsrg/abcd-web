import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ApexService } from './shared/service/apex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  activeMenuObject: any;
  

  constructor(private apexService: ApexService) {
      this.apexService.loadIcons();
   }

  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
    // }
  }
  navigate(item) {
    this.activeMenuObject = item.name;
  
    event.stopPropagation();
    console.log(item.url)
  }
  // @HostListener('window:resize', ['$event'])
  //   onResize(event) {
  //       if (event.target.innerWidth < 768) {
  //           this.navMode = 'over';
  //           this.sidenav.close();
  //       }
  //       if (event.target.innerWidth > 768) {
  //          this.navMode = 'side';
  //          this.sidenav.open();
  //       }
  //   }

}
