import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { AppService } from '../services/app.service';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public translate: TranslateService, public authService: AuthenticationService, private appService : AppService, private router : Router) { }

  ngOnInit(): void {
  }

  async handleLogin(): Promise<void> {
    var email = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    var password = (<HTMLInputElement>document.getElementById('inputPassword')).value;

	this.authService.signedIn = true;
	this.appService.switchPage('home');
    //var good: boolean = await this.authService.login(email, password);

  }

}
