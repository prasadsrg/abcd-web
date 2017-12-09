import { Component, OnInit , Input , EventEmitter , Output, SimpleChanges} from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { ApexService } from './../../../../shared/service/apex.service';
import { AppData } from '../../../../apex/entities/appdata';
import { Appdataservice } from '../../appdata.service';
import { AppdataForm } from '../appdata.form';

@Component({
  selector: 'app-appdata-edit',
  templateUrl: './appdata.edit.component.html',
//   styleUrls: ['./profile-edit.component.scss']
})
export class AppdataEditComponent implements OnInit {
   myForm: any = AppdataForm.init();
   paramId: any;
   @Input() appdata: AppData;
   @Output() close: EventEmitter<any> =  new EventEmitter()
  constructor(private appdataservice: Appdataservice, private apexservice: ApexService) {
    AppdataForm.edit(this.myForm);
    this.paramId = this.appdataservice.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
    //this.init();
   }

  ngOnInit() {
    
  }
  ngOnChanges(changes: SimpleChanges) {
          if(changes['appdata']) {
            this.appdata = changes['appdata'].currentValue;
            console.log(this.appdata);
          }
        }
  onClose() {
          this.close.emit();
        }
  entity(id: string) {
    this.appdataservice.getMasterdata(id).subscribe((data: AppData) => {
      this.appdata = data;
    })
  }

  saveEntity() {
    this.appdataservice.saveMasterdata(this.appdata).subscribe( (data) => {
      console.log(data);
      // this.apexservice.showMessage(data.);
    });
    this.onClose();
  }
  // init() {

  //   this.auth = new User();
  // }

}
