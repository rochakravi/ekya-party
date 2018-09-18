import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

import {ApiService} from '../../services/api.service' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private api : ApiService, private router : Router ) { }
  

  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.api.socialUser = userData ;
        sessionStorage.setItem("userInfo", JSON.stringify(this.api.socialUser));
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this.router.navigate(['/home'])
        
      });
  }

}
