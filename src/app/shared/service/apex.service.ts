import { MatSnackBar} from '@angular/material';
import {Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Injectable()
export class ApexService {

     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
     menuEvent:  EventEmitter<any>  = new EventEmitter( );
     loaderEvent: EventEmitter<any>  = new EventEmitter( );

    constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar){

    }
     showMessage(message: string){
        this._snackBarService.open(message, 'x',{ duration: 3000 });
    }
     showLoader(show: Boolean) {
        this.loaderEvent.next(show);       
    }

   sessionUserEmit (sessionUser: any) {
        //console.log(sessionStorage.getItem("user"));
        this.sessionUserEvent.emit(sessionUser);
    }
    menuEmit(menu: any){
         this.menuEvent.next(menu);
    }

    loadIcons() {
        this._iconRegistry
            .addSvgIconSetInNamespace('core',
            this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/core-icon-set.svg'));
    }

}