import { Address } from './address';
export class Profile {
    id: String;
    name: String = 'Anonymous';
    mobile: number;
    email: any;
    aadhar: number;
    password: any = '1234';
    role: String = 'User';
    address: Address = new Address();
    branchId: any;
    imgId: any;
    active: Boolean = true;
    grpcode: any;
}