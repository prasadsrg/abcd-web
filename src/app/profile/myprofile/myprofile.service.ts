import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';

@Injectable()
export class MyProfileService {
    constructor(private appService: AppService)    {
     }
}