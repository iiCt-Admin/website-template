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

	collapsed = false;
	languages = [
		{name:'English',
		language: 'en'},
		{name:'French',
			language: 'fr'},
]
  constructor(public translate: TranslateService, public authService : AuthenticationService,public appService : AppService) {
	  this.translate.addLangs(['en', 'fr']);
	     this.translate.setDefaultLang('en');

	     //const browserLang = this.translate.getBrowserLang();
	     //this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

returnText(key : string, value : string){
	return this.appService.returnText(key, value);
}
  ngOnInit(): void {
	  this.authService.signedIn = false;
	//   this.auth.signedIn.subscribe(pp =>{
    //   return pp;
    // })

  }

  async selectLanguage(lang : string){

	  // this.translate.setDefaultLang(lang);
	  this.appService.currentTranslation = await this.appService.fetchJSON(lang);
	  this.translate.use(lang);
	  //await alert(this.translate.currentLang);
  }

  returnLanguageString(lang : string) : string{

	  for(let index = 0; index < this.languages.length; index++){
		  if (lang == this.languages[index].language) return this.languages[index].name;
	  }
	  return 'English';
  }

  returnLanguageImage(lang : string) : string{

	  for(let index = 0; index < this.languages.length; index++){
		  if (lang == this.languages[index].language) return './assets/img/lang_' + lang + '.png';
	  }
	  return '';
  }

	login(){
		//alert("login");
		this.appService.switch('login');
		//this.auth.signedIn = true;
	}

	logout(){
		//alert("logout");
		this.authService.signedIn = false;
		this.appService.switch('home');
	}

	// checkLogin():boolean{
	// 	if (this.auth.signedIn == true)
	// 		return true;
	// 	else
	// 	return true;
	// }

}
