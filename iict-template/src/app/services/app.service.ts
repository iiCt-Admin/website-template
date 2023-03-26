import { Injectable, Output } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const { EventEmitter } = require("events");

// for possible use of on-the-fly translations

// import * as deepl from 'deepl';

// const deepl_apikey = "b050ff2c-49e5-7856-fab5-d84b9e4aa7ae:fx";

// const translate = require('@iamtraction/google-translate');
// const translator = new deepl.Translator(deepl_apikey);
// const translate = require("deepl");

// interface Translations {
// 	// detected_source_language:string; // for deepl
// 	text : string; // for deepl and google

// 	from : object; // the rest is for use with google
// // 	from.language	Object	-
// // from.language.didYouMean	Boolean	Whether or not the API suggest a correction in the source language.
// // from.language.iso	String	The ISO 639-1 code of the language that the API has recognized in the text.
// // from.text	Object	-
// // from.text.autoCorrected	Boolean	Whether or not the API has auto corrected the original text.
// // from.text.value	String	The auto corrected text or the text with suggested corrections. Only returned if from.text.autoCorrected or from.text.didYouMean is true.
// // from.text.didYouMean	Boolean	Wherether or not the API has suggested corrections to the text
// // raw	String
// }


@Injectable({
  providedIn: 'root'
})

export class AppService {
	// translations =  Array<Response>();
	currentLanguage = "en";

	@Output() refreshGallery = new EventEmitter();
	// text = "Hello world";

  constructor(private router : Router) {
	  this.init();
	  // this.newTranslate("Hello World");
  }

  //  newTranslate(text : string) : string {
	//   var returnText : string = "";

	// use for deepl translate which does work
	//    // translate({
	//    //    free_api: true,
	//    //    text: text,
	//    //    target_lang: this.currentLanguage.toUpperCase(),
	//    //    auth_key: deepl_apikey,
	//    //  })

	 // for google translate - if it will work
	//    translate(text, { to: this.currentLanguage })

	// for use with deepl to process response and return translated text
	// 	.then(result => {
	// 		let t = Object.assign(new Array<Translations>(), result.data)
	// 		const keys = Object.keys(t);
	// 			for (const key of keys) {

	// 					returnText = t[key][0].text;
  	// 		   }
	// 		return returnText;
  // 		})
  // 		.catch(error => {
  //     		console.error(error)
	// 		return "";
  // 		});
  //
	// 	return returnText;
  // }

  async init(){
	  this.currentTranslation = await this.fetchJSON(await this.defaultBrowserLanguage());
  }

/*
	SetLanguage
*/
  SetLanguage(lang : string){
	  this.currentLanguage = lang;
  }

	currentTranslation = new Object();

/*
	switchPage - switches to page within the router configuration
*/

  switchPage(page : string): void {
	   this.router.navigate([page]);
  }

/*
	defaultBrowserLanguage - detects default browser language
*/
async defaultBrowserLanguage() : Promise<string>{
	let lang = await window.navigator.languages ? window.navigator.languages[0] : 'en';
    lang = lang || window.navigator.language;// || window.navigator.browserLanguage;// || window.navigator.userLanguage;

	let shortLang = lang;

	if (shortLang.indexOf('-') !== -1)
    	shortLang = shortLang.split('-')[0];

		if (shortLang.indexOf('_') !== -1)
    	shortLang = shortLang.split('_')[0];

		console.log(lang, shortLang);

		return await shortLang.match(/en|fr/) ? shortLang : 'en'
}

/*
	fetchJSON - Fetches specified language json data
*/
async fetchJSON(lang : string) : Promise<string> {
	const res = await fetch('/assets/i18n/' + lang + '.json')
	.then((response) => {
		return response.json()
	});
	return await res;
}

async loadDefaultTranslations(){
	this.currentTranslation = await this.fetchJSON('en');
}

/*
	returns the text from the json file based on language - key: Json Title & value: display text
*/
returnText(key : string, value : string) : string {
		return this.parseObject(this.currentTranslation, key, value);
	}

/*
	parseObject - parses json data and returns a string
*/
parseObject(obj : any, inKey : string, inValue : string) : string {
	 var o = Object.entries(obj);
	 var k = Object.keys(obj);
	 var u = Object.values(obj);

	 for (var index = 0; index < k.length; index++){
		 if (k[index] == inKey) {
			 var t = Object.values(JSON.parse(JSON.stringify(u[index])));
			 var t2 = Object.keys(JSON.parse(JSON.stringify(u[index])));

			 for (var index2 = 0; index2 < t.length; index2++)
			 {
				 if (t2[index2] == inValue) return t[index2] as string;

			 }
		 }
	 }
	 return '';
}

}
