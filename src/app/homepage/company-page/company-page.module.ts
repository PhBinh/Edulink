import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Company-page Components:
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ServiceComponent } from './service/service.component';
import { CompanyPageComponent } from './company-page.component';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule
  ],
  declarations: [
      ContactComponent,
      FooterComponent,
      HomeComponent,
      IntroComponent,
      ServiceComponent,
      CompanyPageComponent
  ]
})
export class CompanyPageModule { }
