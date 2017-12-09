import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { AppMenu } from '../../../apex/entities/appmenu';
import { AppMenuAccessForm } from './menu-access.form';
@Component({
  selector: 'app-menu-access-list-edit',
  templateUrl: './menu-access-list-edit.component.html',
  styleUrls: ['./menu-access-list-edit.component.scss']
})
export class MenuAccessListEditComponent {

  @Output()
  outputEvent: EventEmitter<any> =  new EventEmitter<any>();

  @Input()
  inputData: any;
  txnList: any[] = [];
  myForms: any[] = [];
  appMenu:AppMenu = new AppMenu();

  constructor() {
      this.init();
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
      if (changes.hasOwnProperty('inputData')) {
          this.txnList = this.inputData;
          this.formsList();
      }
  }

  private init() {
      this.formsList();
  }
  private formsList() {
      this.txnList.forEach( item => {
          this.myForms.push(this.getMyForm());
      });
  }
  private getMyForm() {
      let myForm = AppMenuAccessForm.init();
      AppMenuAccessForm.edit(myForm);
      return myForm;
  }

  valid() {
      let isValid = true;
      this.txnList.forEach( item => {
          if(!item.valid) {
              isValid = false;
          }
      });
      return isValid;
  }


  add() {
      this.myForms.push(this.getMyForm());
      this.txnList.push(new AppMenu());
      this.eventEmit();
  }

  remove(index: any) {
      this.txnList.splice(index, 1);
      this.eventEmit();
  }

  eventEmit() {
      this.outputEvent.emit(this.valid());
  }

}
