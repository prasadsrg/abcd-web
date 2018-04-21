import { Injectable } from '@angular/core';

import { Props } from '../../common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppDataService {

  private host = Props.API_END_POINT;
  private url: string = '/app_data';

  constructor(private http: HttpClient, private appService: AppService)    {
      
   }
   getParamId(){
    return this.appService.getParam('id');
  }
  showMessage(message: string) {
    this.appService.showMessage(message);
  }

  getCodes(){
    return this.appService.dataLoad(this.http, 'codes', null, null);
  }
  search(data: any) {
    this.appService.showLoader(true);
    return this.http.post(this.host +this.url, {data: data});
  }

  save(data: any){
    this.appService.showLoader(true);
    return this.http.put(this.host +this.url, {data: data});
  }
}
