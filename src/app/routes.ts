//Angular Modules:
import { Routes } from "@angular/router"

//---------Applications : 
//Homepages:
import { HomepageComponent } from "./homepage/homepage.component"
//Authentications:
import { AuthGuard } from "./auth/auth.guard"
//Login:
import { LoginComponent } from "./homepage/login/login.component"
import { LoginFormComponent } from "./homepage/login/login-form/login-form.component"

//Managements: 
import { ManagementComponent } from "./management/management.component"
import { FormNotificationComponent } from "./management/form-notification/form-notification.component"
import { RestComponent } from "./management/rest/rest.component"
import { ChatboxComponent } from "./management/chatbox/chatbox.component"

//Company Pages:
import { CompanyPageComponent } from "./homepage/company-page/company-page.component";

export const appRoutes: Routes = [

    //------------------Home:
    { 
        path: '', 
        component: HomepageComponent,
        children: [
          {
            path: 'login', component: LoginComponent,
            children: [{ path: '', component: LoginFormComponent }]
          },
          {
            path: 'home', component: CompanyPageComponent
          }
        ]
    },
    // { path: 'home', component: HomepageComponent,canActivate:[AuthGuard] },    
    
    // { path : '', redirectTo:'/login', pathMatch : 'full'},
    //------------------Managements:
    {
        path: 'management',
        component: ManagementComponent,
        children: [
          {
            path: 'notification',
            component: FormNotificationComponent
          },
          {
            path: 'calendar',
            component: RestComponent
          },
          {
            path: 'chatbox',
            component: ChatboxComponent
          }
        ]
    }    
];