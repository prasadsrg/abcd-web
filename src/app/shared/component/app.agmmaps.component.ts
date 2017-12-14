import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-map',
  template: `<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
  <agm-marker [latitude]="lat" [longitude]="lng" ></agm-marker>
</agm-map>`,
  styles: [`agm-map {
    height: 420px;
  }`]
})
export class MapComponent {
  title: string = 'My first AGM project';
  zoom: number = 16;
  @Input() lat: number;
  @Input() lng: any;
}