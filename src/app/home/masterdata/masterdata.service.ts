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
     getParamId(){
      return this.appService.getParam('id');
    }
     searchMasterdata(data: any) {
        this.appService.showLoader(true);
        this.url = this.host + "/appdata";
        return this.http.post(this.url, {data: data});
      }
      getMasterdata(data: any) {
        this.appService.showLoader(true);
        this.url = this.host+"/appdata/"+data;
        return this.http.get(this.url);
      }
      saveMasterdata(data: any) {
        this.appService.showLoader(true);
        this.url = this.host+"/appdata/";
        return this.http.put(this.url, {data: data});
      }
      navigateMasterEdit(id:any){
        this.appService.navigate(Props.MASTER_EDIT_PAGE, [{id: id}]);
    }
    navigateMaster(){
      this.appService.navigate(Props.MASTER_PAGE, []);
    }
}