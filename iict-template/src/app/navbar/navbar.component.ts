import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service'
import { AppService } from '../services/app.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService : AuthenticationService,public appService : AppService) { }

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
