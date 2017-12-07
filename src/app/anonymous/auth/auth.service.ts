import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage }from '../../shared/utils/storage';
import { ApexService } from '../../shared/service/apex.service';
@Injectable()
export class AuthService {
    private host = Props.API_END_POINT;
    private auth_url = '/auth';
    private forgotPassword_url = '/auth/forgotpassword';
    private resetPassword_url = '/auth/resetpassword';
    constructor(private http: HttpClient, private appService: AppService)    {
        
     }
     getParamUserId(){
        return this.appService.getParam('userId');
     }
     showMessage(message: string){
         this.appService.showMessage(message);
     }
     login(data: any) {
         data.grpcode = Storage.pid;
         this.appService.showLoader(true);
         return this.http.post(this.host+this.auth_url, {data: data});
     }
     forgotPassword(data:any) {
         delete data.userId;
         data.grpcode = Storage.pid;
         this.appService.showLoader(true);
         return this.http.put(this.host+this.forgotPassword_url, {data: data})
     }
     resetPassword(data:any){
        data.grpcode = Storage.pid;
        this.appService.showLoader(true);
        return this.http.put(this.host+this.resetPassword_url, {data: data})
     }
     storageSave(data: any){
        console.log(data);
        if(data.jwt){
            Storage.setJWT(data.jwt);
        }
        if(data.user) {
            Storage.setSessionUser(data.user);
            this.appService.sessionUserEmit(data.user);
        }
        if(data.menuList) {
            Storage.setMenuList(data.menuList);
            this.appService.menuEmit(data.menuList);
        }
        if(data.branch) {
            Storage.setBranch(data.branch);
        }
     }

     navigateAdmin(){
         this.appService.navigate(Props.ADMIN_DASHBOARD_PAGE, []);
     }
     navigateForgotPassword(){
        this.appService.navigate(Props.FORGOT_PASSWORD_PAGE, []);
     }
     navigateResetPassword(data: any){
         this.appService.navigate(Props.RESET_PASSWORD_PAGE, [{userId: data.email}]);
     }
     navigateSignin(){
         this.appService.navigate(Props.SIGN_IN_PAGE,[])
     }
}