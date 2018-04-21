import { Component, OnInit , HostListener } from '@angular/core';
import { ResetPasswordForm } from './resetpassword.form';
import { AnimationService } from '../../../../shared/service/animation.service';
import { AuthService } from '../auth.service';
import { User } from '../../../../entities/user';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  myForm: any = ResetPasswordForm.init();
  auth: User;
  showorhide: string;
  isVisible: string;
  error: any;
  constructor(private authService:AuthService) { 
    ResetPasswordForm.edit(this.myForm);
    this.init();
  }

  ngOnInit() {
  }
  init() {
    this.auth = new User();
    this.auth.email = this.authService.getParamUserId();
  }
  resetPassword(){
    this.authService.resetPassword(this.auth).subscribe( (data: any) => {
      this.authService.showMessage(data);
      this.authService.navigateSignin();
    })
  }

}
