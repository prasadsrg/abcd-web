import {Address} from './address';
export class Consumer {
    id:string;
    name:string;
    mobile:number;
    email:any;
    aadhar:any;
    address:Address =  new Address();
    active:boolean = true;
    grpcode:any;
}