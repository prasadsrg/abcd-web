import { Component, OnInit, HostBinding, HostListener} from '@angular/core';
import { LoginForm } from './login.form';
import { AnimationService } from '../../shared/service/animation.service';
import { User } from '../../apex/entities/user'; 


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

  constructor() {
    LoginForm.edit(this.myForm);
    this.init();
  }


  ngOnInit() {
  }
  
  init() {

    this.auth = new User();
  }
}