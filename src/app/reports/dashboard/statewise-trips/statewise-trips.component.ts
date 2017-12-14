import { Component, OnInit } from '@angular/core';
import {single,multi} from './data';

@Component({
  selector: 'app-statewise-trips',
  templateUrl: './statewise-trips.component.html',
  styleUrls: ['./statewise-trips.component.scss']
})
export class StatewiseTripsComponent {

  single: any[];
  multi: any[];

  view: any[] = [1000, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  

}
