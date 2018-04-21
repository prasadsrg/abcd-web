import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ConsumerForm } from './consumer.form';

import { ConsumerService } from './../consumer.service';
import { Consumer } from '../../../entities/consumer';


@Component({
  selector: 'app-consumer-edit',
  templateUrl: './consumer-edit.component.html',
  // styleUrls: ['./../consumer.component.scss']
})
export class ConsumerEditComponent implements OnInit {
  consumer: Consumer = new Consumer();
  myForm: any = ConsumerForm.init();
  paramId: any;
  constructor(private consumerService: ConsumerService, private apexservice: ApexService) {
    ConsumerForm.edit(this.myForm);
    this.paramId = this.consumerService.getParamId();
    if(this.paramId != null){
      this.entity(this.paramId);
    }
   }

  ngOnInit() {
  }
  entity(id: string) {
    this.consumerService.getConsumer(id).subscribe((data: Consumer) => {
      this.consumer = data;
    })
  }
  saveEntity() {
    this.consumerService.saveConsumer(this.consumer).subscribe( (data) => {
      console.log(data);
      this.consumerService.navigateConsumer();
    });
  }
}
