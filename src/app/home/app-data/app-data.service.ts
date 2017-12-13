import { Injectable } from '@angular/core';

import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppDataService {

  private host = Props.API_END_POINT;
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService)    {
      
   }
   getParamId(){
    return this.appService.getParam('id');
  }

  getCodes(){
    this.url = this.host+"/dataload/codes";
    return this.http.get(this.url);
  }
  search(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + "/appdata";
    return this.http.post(this.url, {data: data});
  }
}
