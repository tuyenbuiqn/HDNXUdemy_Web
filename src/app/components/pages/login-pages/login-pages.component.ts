import { Component, OnInit } from '@angular/core';
import { AuthenticationServices } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {
  constructor(
    private readonly authenticationService: AuthenticationServices,
  ) { }

  ngOnInit() { }

  loginWithGoogle = () =>  {
    this.authenticationService.clientLoginWithGoogle();
    this.authenticationService.extAuthChanged.subscribe(res => {
      console.log("login", res);
    })
  }

  loginWithFaceBook() {

  }

}
