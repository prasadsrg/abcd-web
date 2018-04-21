import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-data-list-form',
  templateUrl: './app-data-list-form.component.html',
  styleUrls: ['./app-data-list-form.component.scss']
})
export class AppDataListFormComponent {
  @Output()
  outputEvent: EventEmitter<any> =  new EventEmitter<any>();

  @Input()
  inputData: any[];
  txnList: any[] = [];


  constructor(private appDataService: AppDataService) {
    this.init();
  }

  ngOnChanges( changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
      this.txnList = this.inputData;
     
    }
  }
  private init() {
 
  }


  send(item: any){
    if(!item.name || item.name.trim().length == 0) {
      this.appDataService.showMessage("Please enter field.");
      return;
    }
    this.appDataService.save(item).subscribe( (data: any) => {
      if(data){
        item.id = data.id;
        this.appDataService.showMessage(data.message);
      } 
    })
  }
}
