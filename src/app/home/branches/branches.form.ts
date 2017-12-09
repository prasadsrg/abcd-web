import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../shared/common/app.form';

export class BranchesForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('branch_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('branch_country', this.getController(null, this.TYPE_DATA, null, 50));
    }
}