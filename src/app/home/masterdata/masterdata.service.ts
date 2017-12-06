import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '../../shared/utils/storage';
import { ApexService } from '../../shared/service/apex.service';

@Injectable()
export class MasterService {
    private host = Props.API_END_POINT;
    private url: string = '';

    constructor(private http: HttpClient, private appService: AppService)    {
        
     }
     searchMasterdata(data: any) {
        this.appService.showLoader(true);
        this.url = this.host + "appdata/";
        return this.http.post(this.url, {data: data});
      }
}