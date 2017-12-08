import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { ConsumerService } from './../../consumer.service';
import { Consumer } from '../../../../apex/entities/consumer';
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
    consumerData: Consumer[] = [];
    consumer:any;
  constructor(private consumerService: ConsumerService) {
    this.searchConsumerdata();
    this.init();
   }
  ngOnInit() {
  }
  init(){
    this.consumer = new Consumer();
  }
  searchConsumerdata() {
    this.consumerService.searchConsumer(this.consumerData).subscribe( (data: Consumer[]) => {
     this.consumerData = data;
     console.log(data)
    })
  }
  editConsumer(item:any){
      if (!item) {
        item = new Consumer();
        this.consumerService.navigateConsumerEdit(null);
      }else {
        this.consumerService.navigateConsumerEdit(item.id);
      }
  }
}
