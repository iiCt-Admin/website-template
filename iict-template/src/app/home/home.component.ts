import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { AppService } from '../services/app.service'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate : TranslateService, public authService : AuthenticationService, public appService : AppService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
	this.appService.switchPage('login');
  }

}
