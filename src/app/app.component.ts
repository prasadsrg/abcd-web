import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIconSetInNamespace('core',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/core-icon-set.svg'));
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

}
