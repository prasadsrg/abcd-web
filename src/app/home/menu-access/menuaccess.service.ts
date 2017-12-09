import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage }from '../../shared/utils/storage';

@Injectable()
export class MenuAccessService {
  private host = Props.API_END_POINT;
  private url: string = '';  
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
    this.url = this.host+"/dataload/roles";
    return this.http.get(this.url);

  }
  getRolesDataLoad(data:any){
    this.url = this.host+"/appmenu/"+data;
    this.appService.showLoader(true);    
    return this.http.get(this.url);

  }
  getMenuAccess(data: any){
    this.appService.showLoader(true);
    this.url = this.host+"/appmenu/"+data;
    return this.http.get(this.url);
  }
  saveMenuAccess(data: any){
    this.appService.showLoader(true);
    this.url = this.host+"/appmenu";
    return this.http.put(this.url,data);
  }
}
