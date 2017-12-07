import { Component, OnInit , HostListener } from '@angular/core';
import { ForgotPasswordForm } from './forgotpassword.form';
import { AnimationService } from '../../../shared/service/animation.service';
import { User } from '../../../apex/entities/user';
import { AuthService } from '../auth.service';

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
  auth: User;
  constructor(private authService: AuthService) { 
    ForgotPasswordForm.edit(this.myForm);
    this.init();
  }

  ngOnInit() {
  }
  init() {
    this.auth = new User();
  }
  resetPassword(){
    this.authService.forgotPassword(this.auth).subscribe( (data: any) => {
      this.authService.showMessage(data);
      this.authService.navigateResetPassword(this.auth);
    })
  }
}
