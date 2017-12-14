import { Component, OnInit } from '@angular/core';
import {single,multi} from './data';
@Component({
  selector: 'app-habitationwise-trips',
  templateUrl: './habitationwise-trips.component.html',
  styleUrls: ['./habitationwise-trips.component.scss']
})
export class HabitationwiseTripsComponent {

 
 
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
  yAxisLabel = 'Habitation';

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
