import { Component, OnInit , Input , EventEmitter , Output, SimpleChanges} from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { BranchesForm } from '../branches.form';

import { BranchService } from './../branches.service';

import { Branch } from '../../../apex/entities/branch';


@Component({
  selector: 'app-branches-edit',
  templateUrl: './branches-edit.component.html',
  // styleUrls: ['./../consumer.component.scss']
})
export class BranchesEditComponent implements OnInit {

  myForm: any = BranchesForm.init();
  paramId: any;
  lat: number;
  lng:number;
  items:{};
  
  @Input() branch : Branch;
  @Output() close: EventEmitter<any> =  new EventEmitter()
  constructor(private branchService: BranchService, private apexservice: ApexService) {
    BranchesForm.edit(this.myForm);
    this.paramId = this.branchService.getParamId();
    if(this.paramId != null){
      this.entity(this.paramId);
    }
   
       this.lat = 51.678418;
       this.lng = 7.809007;

   }

  ngOnInit() {
  }  
  ngOnChanges(changes: SimpleChanges) {
          if(changes['branch']) {
            this.branch = changes['branch'].currentValue;
            console.log(this.branch);
          }
        }


  entity(id: string) {
    this.branchService.getBranchesData(id).subscribe((data: Branch) => {
      this.branch = data;
    })
  }
  saveEntity() {
    this.branchService.saveBranch(this.branch).subscribe( (data) => {
      console.log(data);
    //   this.branchService.navigateConsumer();
    });
    this.onClose();
  }
  onClose() {
    this.close.emit();
  }
}
