import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Company-page Components:
import { CompanyPageComponent } from './company-page.component';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule
  ],
  declarations: [
      CompanyPageComponent
  ]
})
export class CompanyPageModule { }
