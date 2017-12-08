export class Branch {
    id: string;
    name: string;
    phone: number;
    mobile: number;
    email: any;
    pan: any;
    tan: any;
    gstin: string;
    lat: number;
    lng: number;
    address: any;
    city: string;
    state: string;
    country: string = 'India';
    zipcode: number;
    isMain: boolean = false;
    active: boolean = true;
    grpcode: string;
    updatedBy: string = 'system';
    updatedOn: Date;
}