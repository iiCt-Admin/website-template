import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AppService } from '../services/app.service'
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	collapsed = false;

	languages = [
		{
		name:'English',
		language: 'en'},
		{
		name:'francais',
		language: 'fr'
	},
]
  constructor(public firebaseService : FirebaseService, public appService : AppService) {
	  // this.translate.addLangs(['en', 'fr']);
	  //    this.translate.setDefaultLang('en');
		 this.appService.SetLanguage('en');

	     //const browserLang = this.translate.getBrowserLang();
	     //this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

returnText(key : string, value : string){
	return this.appService.returnText(key, value);
}
  ngOnInit(): void {
	//   this.authService.signedIn = false;
	//   this.auth.signedIn.subscribe(pp =>{
    //   return pp;
    // })
	this.load();
  }

  async selectLanguage(lang : string){

	  this.appService.currentTranslation = await this.appService.fetchJSON(lang);
	  // this.translate.use(lang);
	  this.appService.SetLanguage(lang);
	  await this.firebaseService.GetCategoryList();
	  await this.firebaseService.GetCategoryData();

	  // Used to refresh gallery page when language changes, otherwise it will
	  // not display the list in the current language, unless they change category
	  if (window.location.pathname == "/gallery") this.appService.refreshGallery.emit(true);

  }

  async load(){
	  await this.appService.defaultBrowserLanguage();
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

// login(){
// 		this.appService.switchPage('login');
// 		//this.auth.signedIn = true;
// 	}

// logout(){
// 		this.authService.signedIn = false;
// 		this.appService.switchPage('home');
// 	}

}
