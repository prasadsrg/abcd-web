import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { AppData } from '../../../../apex/entities/appdata';
import {AppdataForm} from './appdata.form';
@Component({
  selector: 'app-data-edit',
  templateUrl: './appdataedit.component.html',
  styleUrls: ['./appdataedit.component.scss']
})
export class AppDataEditComponent {

  @Output()
  outputEvent: EventEmitter<any> =  new EventEmitter<any>();

  @Input()
  inputData: any;
  appDataList: any[] = [];
  myForms: any[] = [];
  appData:AppData = new AppData();
  panelOpenState: boolean = false;
  
  constructor() {
      this.init();
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
      if (changes.hasOwnProperty('inputData')) {
          this.appDataList = this.inputData;
          this.formsList();
      }
  }

  private init() {
      this.formsList();
  }
  private formsList() {
    if(this.appDataList){
        this.appDataList.forEach( item => {
            this.myForms.push(this.getMyForm());
        });
    }

  }
  private getMyForm() {
      let myForm = AppdataForm.init();
      AppdataForm.edit(myForm);
      return myForm;
  }

  valid() {
      let isValid = true;
      this.appDataList.forEach( item => {
          if(!item.valid) {
              isValid = false;
          }
      });
      return isValid;
  }


  add() {
      this.myForms.push(this.getMyForm());
      this.appDataList.push(new AppData());
      this.eventEmit();
  }

  remove(index: any) {
      this.appDataList.splice(index, 1);
      this.eventEmit();
  }

  eventEmit() {
      this.outputEvent.emit(this.valid());
  }

}
