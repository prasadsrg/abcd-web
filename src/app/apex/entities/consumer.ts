import {Address} from './address';
import { Branch } from './branch';
export class Consumer {
    id:string;
    name:string;
    mobile:number;
    email:any;
    aadhar:any;
    address:Address =  new Address();
    branch: Branch = new Branch();
    active:boolean;
    grpcode:any;
}