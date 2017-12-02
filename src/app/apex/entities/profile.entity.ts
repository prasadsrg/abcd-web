export class Profile {
    id: string;
    name: string = 'Anonymous';
    mobile: number;
    email: any;
    aadhar: number;
    password: any = '1234';
    role: string = 'User';
    address_id: any;
    branchId: any;
    imgId: any;
    active: boolean = true;
    grpcode: any;
    createdBy: string = 'system';
    createdOn: any;
    updatedBy: string = 'system'
    updatedOn: Date;
}