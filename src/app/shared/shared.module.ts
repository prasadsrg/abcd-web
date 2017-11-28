import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppInterceptor} from './service/app.interceptor';
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { AppService } from "./service/app.service";



import { AppImgUploadComponent } from "./component/app.imgupload.component";
import { AppImgLoadComponent } from "./component/app.imgload.component";
import { FormMessagesComponent } from "./component/form.messages.component";
import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';

import { 
    MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
    MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
    MatTooltipModule, MatSnackBarModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
    imports: [
        CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule,
    ],
    declarations: [FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent],
    exports: [
        CommonModule,FormsModule, ReactiveFormsModule, FlexLayoutModule, 
        FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule,
    
    ]

 })
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ApexService, ReportService, AppService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppInterceptor,
                    multi: true
                }
            ],
        };
    }
}