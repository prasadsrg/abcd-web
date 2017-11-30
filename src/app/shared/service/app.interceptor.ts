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

import {Storage } from '../utils/storage';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  CONTENT_TYPE: string = "application/x-www-form-urlencoded";
  // CONTENT_TYPE : string = "application/json";
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor: "+ this.CONTENT_TYPE);
    request = request.clone({
      setHeaders: {
        'Content-Type': this.CONTENT_TYPE
      }
    });
    console.log(request);
    return next.handle(request);
  }
}