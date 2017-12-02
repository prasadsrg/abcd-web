export class ApexMenu {
    id: string;
    name: string;
    menu: string;
    role: string;
    active: boolean = true;
    priority: number = 999;
    updatedBy: string = 'system';
    updatedOn: Date;
}