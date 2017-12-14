import { Component, OnInit , Input , EventEmitter , Output, SimpleChanges} from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { BranchesForm } from '../branches.form';
import { Branch } from '../../../apex/entities/branch';
import { BranchService } from '../branches.service';


@Component({
  selector: 'app-branches-edit',
  templateUrl: './branches-edit.component.html',
  // styleUrls: ['./../consumer.component.scss']
})
export class BranchesEditComponent implements OnInit {

  myForm: any = BranchesForm.init();
  paramId: any;
  lat: number;
  lng: number;
  items:{};
  branch: Branch = new Branch();
  map: any;
  
  constructor(private branchService: BranchService, private apexService: ApexService ) {
    BranchesForm.edit(this.myForm);
    this.mapData();
    this.paramId = this.branchService.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
       this.lat = 17.3850;
       this.lng = 78.4867;

   }

  ngOnInit() {

  }


  entity(id: string) {
    this.branchService.getBranchesData(id).subscribe((data: Branch) => {
      this.branch = data;
    console.log(this.branch);
    })
  }
  saveEntity() {
    this.branchService.saveBranch(this.branch).subscribe( (data) => {
      // this.apexService.showMessage(data.message);
      this.branchService.navigateBranch();
    });
  }
  mapData(){
    this.branchService.map()
      .subscribe(data => this.map = data);
      console.log(this.map);
  }
  back() {
    this.branchService.navigateBranch();
  }
}