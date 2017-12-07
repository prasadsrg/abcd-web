import {Address} from './address.entity'
export class consumer {
    id:string;
    name:string;
    mobile:number;
    email:any;
    aadhar:any;
    address:any =  new Address();
    active:boolean = true;
    grpcode:any;
    updatedBy :string = 'system';
    updateddate:Date;
}