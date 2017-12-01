import { FormGroup } from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class ForgotPasswordForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("forgotpassword_userId", this.getController(null, this.TYPE_EMAIL, null, 50));
    }
}