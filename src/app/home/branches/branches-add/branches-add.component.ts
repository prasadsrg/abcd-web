import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { BranchesForm } from '../branches.form';
import { Branch } from '../../../apex/entities/branch';
import { BranchService } from '../branches.service';


@Component({
  selector: 'app-branch-add',
  templateUrl: './branches-add.component.html',
  // styleUrls: ['./../consumer.component.scss']
})
export class BranchAddComponent implements OnInit {
    branch: Branch = new Branch();
  myForm: any = BranchesForm.init();
  paramId: any;
  constructor(private branchService: BranchService, private apexservice: ApexService) {
    BranchesForm.edit(this.myForm);
    this.paramId = this.branchService.getParamId();
    // if(this.paramId != null){
    //   this.entity(this.paramId);
    // }
   }

  ngOnInit() {
  }
//   entity(id: string) {
//     this.branchService.getConsumer(id).subscribe((data: Consumer) => {
//       this.consumer = data;
//     })
//   }
  saveEntity() {
    this.branchService.saveBranch(this.branch).subscribe( (data) => {
      console.log(data);
      this.branchService.navigateBranch();
    });
  }
}
