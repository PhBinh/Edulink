import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Routing:
import { appRoutes } from './routes';

//In-App components:
import { LoginModule } from './homepage/login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { ManagementModule } from './management/management.module';
import { FormNotificationModule } from './management/form-notification/form-notification.module';

//FireBase:
//Authentication:
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Services:
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormNotificationModule,
    HomepageModule,
    LoginModule,
    ManagementModule,
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
