import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private router : Router) {
	  this.init();
  }

  async init(){
	  this.currentTranslation = await this.fetchJSON(await this.defaultBrowserLanguage());
  }

	currentTranslation = new Object();

  switch(page : string): void {
	   this.router.navigate([page]);
  }

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

returnText(key : string, value : string) : string {
		return this.parseObject(this.currentTranslation, key, value);
	}

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
