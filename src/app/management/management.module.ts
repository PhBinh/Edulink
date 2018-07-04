import { RouterModule } from '@angular/router';
import { HomepageModule } from './../homepage/homepage.module';
import { RestComponent } from './rest/rest.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    HomepageModule,
    CommonModule
  ],
  declarations: [
      ManagementComponent,
      RestComponent
  ]
})
export class ManagementModule { }

