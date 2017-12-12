
import { Img } from './img';
import { Address } from './address';
import { Branch } from './branch';
export class Profile {
    id: String;
    name: String = 'Anonymous';
    mobile: number;
    email: any;
    aadhar: number;
    password: any = '1234';
    role: String = 'User';
    address: Address = new Address();
    branch:Branch = new Branch();
    // branchId: any;
    img: Img = new Img();
    active: Boolean = true;
    grpcode: any;
}