import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { AccessMenu } from '../../../entities/accessmenu';
import { AccessMenuForm } from './access-menu.form';
@Component({
  selector: 'app-access-menu-list-edit',
  templateUrl: './access-menu-list-edit.component.html',
  styleUrls: ['./access-menu-list-edit.component.scss']
})
export class MenuAccessListEditComponent {

  @Output()
  outputEvent: EventEmitter<any> =  new EventEmitter<any>();

  @Input()
  inputData: any;
  txnList: any[] = [];
  myForms: any[] = [];
  accessMenu:AccessMenu = new AccessMenu();

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
      let myForm = AccessMenuForm.init();
      AccessMenuForm.edit(myForm);
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
      this.txnList.push(new AccessMenu());
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
