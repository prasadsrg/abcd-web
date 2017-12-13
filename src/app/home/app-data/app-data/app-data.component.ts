import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service'
@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss']
})
export class AppDataComponent implements OnInit {
  private codeList: any = [];
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

}
