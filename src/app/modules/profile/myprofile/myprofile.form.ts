import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class MyProfileForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('myprofile_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_mobile', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_email', this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl('myprofile_aadhar', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_lane', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_land_mark', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_city', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_country', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_zipcode', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('myprofile_state', this.getController(null, this.TYPE_DATA, null, 50));
    }
}