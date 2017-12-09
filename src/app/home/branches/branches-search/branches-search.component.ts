import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { BranchService } from './../branches.service';
import { Branch } from '../../../apex/entities/branch';


@Component({
  selector: 'app-branch-search',
  templateUrl: './branches-search.component.html',
//   styleUrls: ['./appdata.component.scss']
})
export class BranchSearchComponent implements OnInit {
    branch: Branch = new Branch();
    branchDataList:any;
    showSide: boolean = false;
  
  constructor(private branchService: BranchService) {
    this.searchBranch();
   
    // this.init();
   }

  ngOnInit() {
  }
  // init() {

  //   this.auth = new User();
  // }
  searchBranch() {
    this.branchService.searchBranch(this.branch).subscribe( data => {
     this.branchDataList = data;
     console.log(this.branchDataList)
    })
  }
  editBranch(item: Branch) {
    this.showSide = true;
    if (!item) {
      item = new Branch();
    }else {
      this.branch = Object.assign({}, item);
    }
  }
  onClose(action: any) {
    this.showSide = false;
  }
}
