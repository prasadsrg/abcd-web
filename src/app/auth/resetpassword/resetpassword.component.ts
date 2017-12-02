import { Component, OnInit } from '@angular/core';
import{ResetPasswordForm} from './resetpassword.form';
import { ResetPasswordService } from './resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  myForm: any = ResetPasswordForm.init();
  
  showorhide: string;
  constructor(private loginService: ResetPasswordService) {
    ResetPasswordForm.edit(this.myForm);
  }

  ngOnInit() {
  }
  auth_confirmpassword(){
    
  }

}
