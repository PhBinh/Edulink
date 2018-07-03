import { RouterModule } from '@angular/router';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HomepageComponent } from './homepage.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanyPageModule } from './company-page/company-page.module';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule,
    CompanyPageModule
  ],
  declarations: [
    HomepageComponent,
    TopmenuComponent
  ]
})
export class HomepageModule { }
