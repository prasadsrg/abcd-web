import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../../shared/common/app.form';

export class ConsumerForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl('consumer_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_mobile', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_email', this.getController(null, this.TYPE_EMAIL, null, 50));
        //group.addControl('consumer_password', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_aadhar', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_lane', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_city', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_country', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_zipcode', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('consumer_state', this.getController(null, this.TYPE_DATA, null, 50));
    }
}