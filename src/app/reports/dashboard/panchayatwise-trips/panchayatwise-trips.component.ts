import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-panchayatwise-trips',
  templateUrl: './panchayatwise-trips.component.html',
  styleUrls: ['./panchayatwise-trips.component.scss']
})
export class PanchayatwiseTripsComponent {

 
 
  single: any[];
  multi: any[];

  view: any[] = [450, 220];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Trips';
  showYAxisLabel = true;
  yAxisLabel = 'Panchayath';

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
