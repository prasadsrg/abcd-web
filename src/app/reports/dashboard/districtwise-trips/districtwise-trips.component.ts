import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-districtwise-trips',
  templateUrl: './districtwise-trips.component.html',
  styleUrls: ['./districtwise-trips.component.scss']
})
export class DistrictwiseTripsComponent {

  single: any[];
  multi: any[];

  view: any[] = [550, 120];
  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'District';
  showGridLines = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

}
