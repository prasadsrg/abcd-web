import { Component, OnInit , HostListener } from '@angular/core';
import { ForgotPasswordForm } from './forgotpassword.form';
import { AnimationService } from '../../../shared/service/animation.service';
import { User } from '../../../apex/entities/user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  myForm: any = ForgotPasswordForm.init();
  //auth: User;
  showorhide: string;
  isVisible: string;
  error: any;
  constructor() { 
    ForgotPasswordForm.edit(this.myForm);
    this.init();
  }

  ngOnInit() {
  }
  init() {
    //this.auth = new User();
  }

}
