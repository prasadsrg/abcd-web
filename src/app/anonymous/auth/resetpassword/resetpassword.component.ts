import { Component, OnInit , HostListener } from '@angular/core';
import { ResetPasswordForm } from './resetpassword.form';
import { AnimationService } from '../../../shared/service/animation.service';
import { User } from '../../../apex/entities/user';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  myForm: any = ResetPasswordForm.init();
  //auth: User;
  showorhide: string;
  isVisible: string;
  error: any;
  constructor() { 
    ResetPasswordForm.edit(this.myForm);
    this.init();
  }

  ngOnInit() {
  }
  init() {
    //this.auth = new User();
  }

}
