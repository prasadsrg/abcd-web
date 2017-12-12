import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '../../shared/utils/storage';
import { ApexService } from '../../shared/service/apex.service';

@Injectable()
export class SettingsService {
    private host = Props.API_END_POINT;
    private url: string = '';

    constructor(private http: HttpClient, private appService: AppService)    {
        
     }
     getParamId(){
        return this.appService.getParam('id');
      }
      getBranches() {
        this.appService.showLoader(true);
        this.url = this.host+"/dataload/branchs";
        return this.http.get(this.url);
      }
   
      saveBranch(data: any) {
        this.appService.showLoader(true);
        this.url = this.host+"/profile";
        return this.http.put(this.url, {data: data});
      }
}