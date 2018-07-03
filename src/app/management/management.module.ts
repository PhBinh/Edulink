import { RouterModule } from '@angular/router';
import { HomepageModule } from './../homepage/homepage.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RestComponent } from './rest/rest.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    HomepageModule,
    CommonModule
  ],
  declarations: [
      ManagementComponent,
      RestComponent,
      SidebarComponent,
      TopbarComponent,
  ],
  exports: [ TopbarComponent, SidebarComponent]
})
export class ManagementModule { }

