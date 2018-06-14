import { HomepageModule } from './../homepage/homepage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HomepageModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
