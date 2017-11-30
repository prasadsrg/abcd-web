import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html'
})
export class AddVehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() close: EventEmitter<any> =  new EventEmitter()
  
 
  onSave() {
    this.close.emit();
  }

}
