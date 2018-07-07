import { ManagementModule } from './../management.module';
import { NgModule } from '@angular/core';
import { FormNotificationComponent } from './form-notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FileUploadModule } from 'ng2-file-upload';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    ManagementModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    MatCardModule,
    MatListModule,
    ModalModule.forRoot(),
    Daterangepicker
  ],
  declarations: [
    FormNotificationComponent
  ],
})


export class FormNotificationModule { }
