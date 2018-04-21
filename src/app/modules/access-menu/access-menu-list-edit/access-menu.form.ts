import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class AccessMenuForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("access_menu_name", this.getController(null, this.TYPE_DATA, null, 50));
    }
}