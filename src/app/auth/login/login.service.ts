import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    private host = Props.API_END_POINT;
    private auth_url = 'auth'
    constructor(private http: HttpClient, private appService: AppService)    {
        
     }
     login(data: any) {
         console.log(this.host);
         return this.http.post(this.host+this.auth_url, {data: data});
     }
}