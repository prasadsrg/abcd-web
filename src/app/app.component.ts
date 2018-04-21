import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ApexService } from './shared/service/apex.service';
import { MatIconRegistry } from '@angular/material';
import { Util } from './shared/utils/util';
import { AppService } from './shared/service/app.service';
import { Storage } from './shared/utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  showLoader: boolean = false;
  private _userSubscription: any;
  private _loaderSubscription: any;
  concat:string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  showMenu = true;
  sessionUser: any;
  username : String;
  concatString : any = '';
  constructor(private apexService: ApexService,  private _iconRegistry: MatIconRegistry, private appService:AppService) {
      this.loadIcons();
      this.sessionUser = Storage.getSessionUser();
      console.log(this.sessionUser);

   }

  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        this.showLoader = data;
      }
    });
    this._userSubscription = this.apexService.sessionUserEvent.subscribe(data => {
      console.log(data);
      this.sessionUser = Storage.getSessionUser();
    });
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
    if(Storage.getSessionUser()){
        this.apexService.sessionUserEmit(Storage.getSessionUser());
    }
  }  
  loadIcons(){
        this._iconRegistry.addSvgIconSetInNamespace('core',
          this.apexService.bypassURL('/assets/icons/app-icons.svg'));    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if(this.sidenav){
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
  logout(){
    Storage.clearSession();
    sessionStorage.clear();
    this.apexService.sessionUserEmit(null);
    this.appService.navigate('auth/login', []);
  }
  myProfile() {
    this.appService.navigate('profile/myprofile', []);
  }
}
