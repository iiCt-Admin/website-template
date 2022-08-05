import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthenticationService,private router : Router) { }

  ngOnInit(): void {

	  this.auth.signedIn.subscribe(pp =>{
      return pp;
    })

  }

	login(){
		this.auth.signedIn = of(true);
	}

	logout(){
		this.auth.signedIn = of(false);
	}

	checkLogin():boolean{
		if (this.auth.signedIn === of(true))
			return false;
		else
		return true;
	}

	switch(page : string): void {
		 this.router.navigate([page]);
	}
}
