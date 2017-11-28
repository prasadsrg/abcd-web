import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Storage } from '../utils/storage';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor");
    request = request.clone({
      setHeaders: {
        Authorization: `${Storage.getJWT()}`
      }
    });
    return next.handle(request);
  }
}