import { Component, OnInit, HostBinding, HostListener} from '@angular/core';
import { LoginForm } from './login.form';
import { AnimationService } from '../../../../shared/service/animation.service';
import { AuthService } from '../auth.service';
import { User } from '../../../../entities/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent  {
  myForm: any = LoginForm.init();
  auth: User;
  showorhide: string;
  isVisible: string;
  error: any;

  constructor(private authService: AuthService) {
    LoginForm.edit(this.myForm);
    this.init();
    this.showorhide = "password";
    this.isVisible = "show";
  }


  ngOnInit() {
  }
  
  init() {

    this.auth = new User();
  }
  showPassword(){
    this.showorhide = "password";
     this.isVisible = "show"
 }
 hidePassword(){
   this.showorhide = "text";
    this.isVisible = "hide"
 }
  signInEmail(){
    this.authService.login(this.auth).subscribe( data => {
      this.authService.storageSave(data);
      this.authService.navigateDashBoard();
    })
  }
  forgotPassword(){
    this.authService.navigateForgotPassword();
  }
}