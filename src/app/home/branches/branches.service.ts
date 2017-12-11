import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '../../shared/utils/storage';

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
  getBranchesData(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/branch/"+data;
    return this.http.get(this.url);
  }
  navigateBranch(){
    this.appService.navigate('branch', [ ]);
  }
  navigateaddBranch() {
    this.appService.navigate('branch-add', [ ]);
  }
  navigateBranchEdit(id: any){
    this.appService.navigate('branch-edit', [{id: id}]);
}
map(){
  return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=13.036669323115246,77.75676727294922&sensor=true')
  .map((res:Response) =>
   res.json());
}
}