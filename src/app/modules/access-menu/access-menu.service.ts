import { Injectable } from '@angular/core';
import { Props } from '../../common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage }from '../../shared/utils/storage';

@Injectable()
export class AccessMenuService {
  private host = Props.API_END_POINT;
  private url: string = '/access_menu';  
  constructor(private http: HttpClient, private appService: AppService) { 

  }
  getParamId(){
    return this.appService.getParam('id');
  }
  getCurrentProfileId(){
    // console.log(Storage.getSessionUser().id)
    
    return Storage.getSessionUser().id;
  }
  getRoles(){
    return this.appService.dataLoad(this.http, 'roles', null, null);

  }

  getAccessMenu(data: any){
    this.appService.showLoader(true);
    return this.http.post(this.host+this.url, {data: data});
  }
  saveMenuAccess(data: any){
    this.appService.showLoader(true);
    return this.http.put(this.host+this.url,{data: data});
  }
}
