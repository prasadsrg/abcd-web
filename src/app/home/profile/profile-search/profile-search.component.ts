import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss']
})
export class ProfileSearchComponent implements OnInit {
  dataList: any[] = [];
  constructor() { }

  ngOnInit() {
    this.changeData(1000);
  }

  changeData(maxLength){
    this.dataList = [];
    for(let i=0; i< maxLength; i++) {
      this.dataList.push(i);
    }
  }

}
