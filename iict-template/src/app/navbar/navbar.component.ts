import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TranslateService} from '@ngx-translate/core';

import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service'
import { AppService } from '../services/app.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService, public authService : AuthenticationService,public appService : AppService) {
	  this.translate.addLangs(['en', 'fr']);
	     this.translate.setDefaultLang('en');

	     //const browserLang = this.translate.getBrowserLang();
	     //this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
	  this.authService.signedIn = false;
	//   this.auth.signedIn.subscribe(pp =>{
    //   return pp;
    // })

  }

	login(){
		//alert("login");
		this.appService.switch('login');
		//this.auth.signedIn = true;
	}

	logout(){
		//alert("logout");
		this.authService.signedIn = false;
	}

	// checkLogin():boolean{
	// 	if (this.auth.signedIn == true)
	// 		return true;
	// 	else
	// 	return true;
	// }

}
