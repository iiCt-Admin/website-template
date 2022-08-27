import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private router : Router) { }

	languages = new Array<string>();
	currentTranslation = new Object();
	themeFile : string = "";
	language : string = "en";
	data = new Object;
	myMap : any;

  switch(page : string): void {
	   this.router.navigate([page]);
  }

 async fetchJSON(lang : string) : Promise<string> {
	const res = await fetch('http://127.0.0.1:4201/assets/i18n/' + lang + '.json')
	.then((response) => {
		return response.json()
	});
	return await res;
}

async loadDefaultTranslations(){
	this.currentTranslation = await this.fetchJSON('en');
}

async getJSON() {
  	let data  = ''
	this.languages = new Array<string>();
	this.languages.push('en');
	this.languages.push('fr');
		 this.currentTranslation = await this.fetchJSON('en')
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
