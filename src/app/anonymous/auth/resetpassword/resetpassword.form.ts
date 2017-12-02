import { FormGroup } from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class ResetPasswordForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("resetpassword_userId", this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl("confirmpassword_userId", this.getController(null, this.TYPE_EMAIL, null, 50));
    }
}