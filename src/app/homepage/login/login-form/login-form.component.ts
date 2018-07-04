import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', './../../../../../node_modules/materialize-css/dist/css/materialize.min.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService) { 
    this.authService = authService;
  }

  signInByEmailAndPassword(email:string, password:string){
    console.log("start calling login");
    console.log("Email : " + email);
    console.log("Password : " + password);
    this.authService.signInByEmailandPassword(email, password);
  }
  
  signInWithGoogle(){
    this.authService.signInWithGoogle();
  }  

  ngOnInit() {
  }

  // OnSubmit(userName,password){
  //    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
  //     localStorage.setItem('userToken',data.access_token);
  //     this.router.navigate(['/home']);
  //   },
  //   (err : HttpErrorResponse)=>{
  //     this.isLoginError = true;
  //   });
  // }
}
