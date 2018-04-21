import { Injectable } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '../../shared/utils/storage';
import { ApexService } from '../../shared/service/apex.service';
import { Props } from '../../common/props';

@Injectable()
export class ConsumerService {
    private host = Props.API_END_POINT;
    private url: string = '';

    constructor(private http: HttpClient, private appService: AppService)    {
        
     }
     getParamId(){
        return this.appService.getParam('id');
      }
      getConsumer(data: any) {
        this.appService.showLoader(true);
        this.url = this.host+"/consumer/"+data;
        return this.http.get(this.url);
      }
     searchConsumer(data: any) {
        this.appService.showLoader(true);
        this.url = this.host + "/consumer";
        return this.http.post(this.url, {data: data});
      }
      saveConsumer(data: any) {
        this.appService.showLoader(true);
        this.url = this.host+"/consumer/";
        return this.http.put(this.url, {data: data});
      }
      navigateConsumerEdit(id:any){
        this.appService.navigate(Props.CONSUMER_EDIT_PAGE, [{id: id}]);
    }
    navigateConsumer(){
      this.appService.navigate(Props.CONSUMER_PAGE, []);
    }
}