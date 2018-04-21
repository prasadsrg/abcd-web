import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { MatTabChangeEvent } from '@angular/material';
import { AppComponent } from '../../../app.component';
import { AppData } from '../../../entities/appdata';
@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss']
})
export class AppDataComponent implements OnInit {
  codeList: any = [];
  txnList: any[] = [];
  currentCode: string = "";
  constructor(private appDataService: AppDataService) { 
    this.getCodes();
  }

  ngOnInit() {
  }

  getCodes() {
    this.appDataService.getCodes().subscribe( (data: any) => {
        this.codeList = data;
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if(tabChangeEvent.tab){
      this.txnList = [];
      this.currentCode = tabChangeEvent.tab.textLabel;
      this.appDataService.search({code: tabChangeEvent.tab.textLabel}).subscribe((data: any) => {
        this.txnList = data;
      })
    }

  }

  add(){
    let item = new AppData();
    item.code = this.currentCode;
    this.txnList.push(item);
  }

}
