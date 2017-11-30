import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Storage } from '../utils/storage';
import { ApexService } from './apex.service';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  CONTENT_TYPE: string = "application/x-www-form-urlencoded";
  // CONTENT_TYPE : string = "application/json";
  constructor() {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': this.CONTENT_TYPE,
        'Authorization': `${this.getToken()}`
      }
    });
    return next.handle(request).map(
      (resp: HttpResponse<any>) => {
        if (resp && resp.type == 4) {
          if (resp.body && resp.body.status) {
            console.log(resp.body.status);
            if (resp.body.status == 1) {
              // let returnData =  new Observable( observer => {
              //   observer.next(resp.body.data);
              //   observer.complete();
              // });
              return resp.clone({
                body: resp.body.data
              });
            } else {
              this.errorMessage(resp.body.error);
              return null;
            }
          } else {
            return resp;
          }
        }
      });
  }



  public getToken(): string {
    return Storage.getJWT();
  }
  errorMessage(err: any) {
    let message = err.message ? err.message : err;
    //this.apexService.showMessage(message);
  }
}