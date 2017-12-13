import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../../shared/common/app.form';

export class AppdataForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('masterdata_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('masterdata_code', this.getController(null, this.TYPE_DATA, null, 50));

    }
}