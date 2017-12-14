import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-mandalwise-trips',
  templateUrl: './mandalwise-trips.component.html',
  styleUrls: ['./mandalwise-trips.component.scss']
})
export class MandalwiseTripsComponent {

 
  single: any[];
  multi: any[];

  view: any[] = [550, 220];
  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'trips';
  showYAxisLabel = true;
  yAxisLabel = 'Mandal';

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
