import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ApexService } from './shared/service/apex.service';
import { MatIconRegistry } from '@angular/material';
import { Util } from './shared/utils/util';
import { AppService } from './shared/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  showLoader: boolean = false;
  private _userSubscription: any;
  private _loaderSubscription: any;
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  showMenu = true;
  sessionUser: any;

  constructor(private apexService: ApexService,  private _iconRegistry: MatIconRegistry, private appService:AppService) {
      this.loadIcons();
      this.sessionUsers();
      
   }

  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        this.showLoader = data;
      }
    });
    this._userSubscription = this.apexService.sessionUserEvent.subscribe(data => {
      console.log(data);
     // this.menuChange(data);
    });
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
  }
  sessionUsers(){
    this.appService.getSessionUser();
    // console.log()
  }

  loadIcons(){
        this._iconRegistry.addSvgIconSetInNamespace('core',
            this.apexService.bypassURL('/assets/icons/core-icon-set.svg'));
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

}
