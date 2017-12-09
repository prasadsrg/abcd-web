import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage }from '../../shared/utils/storage';

@Injectable()
export class BranchService {
  private host = Props.API_END_POINT;
  private url: string = '';
  constructor(private http: HttpClient, private appService: AppService) { 

  }
  getParamId(){
    return this.appService.getParam('id');
  }
  getCurrentProfileId(){
    return Storage.getSessionUser().id;
  }

  searchBranch(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/branch/";
    return this.http.post(this.url, {data: data});
  }
  saveBranch(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/branch/";
    return this.http.put(this.url, {data: data});
  }
  getBranchesData(data: any){
    this.appService.showLoader(true);
    this.url = this.host+"/branch/";
    return this.http.post(this.url, {data: data});
  }
}
