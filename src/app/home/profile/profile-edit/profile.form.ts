import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class ProfileForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('profile_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_mobile', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_email', this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl('profile_password', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_aadhar', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_lane', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_city', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_country', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_zipcode', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('profile_state', this.getController(null, this.TYPE_DATA, null, 50));
    }
}