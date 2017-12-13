import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../shared/common/app.form';

export class BranchesForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('branch_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_mobile', this.getController(null, this.TYPE_NUMBER, null, 10));
        group.addControl('branch_phone', this.getController(null, this.TYPE_NUMBER, null, 10));
        group.addControl('branch_email', this.getController(null, this.TYPE_EMAIL, null, 50));
        //group.addControl('branch_password', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_pan', this.getController(null, this.TYPE_DATA, null, 11));
        group.addControl('branch_tan', this.getController(null, this.TYPE_DATA, null, 11));
        group.addControl('branch_gstin', this.getController(null, this.TYPE_DATA, null, 11));
        group.addControl('branch_lat', this.getController(null, this.TYPE_DECIMAL, null, 50));
        group.addControl('branch_lng', this.getController(null, this.TYPE_DECIMAL, null, 50));
        group.addControl('branch_city', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_country', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_zipcode', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_state', this.getController(null, this.TYPE_DATA, null, 50));
    }
}