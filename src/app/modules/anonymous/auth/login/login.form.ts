import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../../shared/common/app.form';

export class LoginForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("auth_userId", this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl("auth_password", this.getController(null, this.TYPE_DATA, null, 20));
        group.addControl("auth_vid", this.getController(null, this.TYPE_DATA, null, 50));
    }
}