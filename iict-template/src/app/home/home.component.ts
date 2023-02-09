import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate : TranslateService,
              public authService : AuthenticationService,
              public appService : AppService,
              private router : Router) { }

  ngOnInit(): void {
  }

  returnText(key : string, value : string){
  return this.appService.returnText(key, value);
  }

  login(){
	this.appService.switchPage('login');
  }

}
