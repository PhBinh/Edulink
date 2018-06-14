import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {  

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

}
