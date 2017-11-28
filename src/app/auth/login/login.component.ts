import { Component, OnInit, HostBinding, HostListener} from '@angular/core';
import { MyForm } from './login.form';
import { AnimationService } from '../../shared/service/animation.service';
import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: AnimationService.host,
  animations: AnimationService.page
})
export class LoginComponent  {
  myForm: any = MyForm.init();
  auth: any;
  showorhide: string;
  isVisible: string;
  error: any;
  constructor() {
     MyForm.edit(this.myForm);
  }

  // ngOnInit() {
  // }

}
