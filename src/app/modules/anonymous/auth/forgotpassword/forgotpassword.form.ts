import { FormGroup } from '@angular/forms';
import { AppFormGroup } from '../../../../shared/common/app.form';

export class ForgotPasswordForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("forgotpassword_userId", this.getController(null, this.ALL_PATTERN, null, 50));
    }
}