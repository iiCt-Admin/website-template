import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	filter = Array<any>();

	portfolio = [{image:"assets/img/iiCt_Round_Light.png",alt:"alt App 1", title: "no title App 1", category : "App", detailsLink : "none" },
				{image:"assets/img/iiCt_contact.png",alt:"alt Web 1", title: "no title Web 1", category : "Web", detailsLink : "none"},
				{image:"assets/img/iiCt_Round_Plain.png",alt:"alt Media 1", title: "no title Media 1", category : "Media", detailsLink : "none"},
				{image:"assets/img/iiCt_chat.png",alt:"alt App 2", title: "no title App 2", category : "App", detailsLink : "none" },
				{image:"assets/img/iiCt_email.png",alt:"alt Web 2", title: "no title Web 2", category : "Web", detailsLink : "none"},
				{image:"assets/img/iiCt_menu.png",alt:"alt Media 2", title: "no title Media 2", category : "Media", detailsLink : "none"},
        {image:"assets/img/iiCt_support.png",alt:"alt App 3", title: "no title App 3", category : "App", detailsLink : "none" },
				{image:"assets/img/lang_en.png",alt:"alt Web 3", title: "no title Web 3", category : "Web", detailsLink : "none"},
				{image:"assets/img/lang_fr.png",alt:"alt Media 3", title: "no title Media 3", category : "Media", detailsLink : "none"},
			];

  constructor(public appService : AppService, public translate : TranslateService) { }

  ngOnInit(): void {
	  AOS.init();
	  this.filter = this.portfolio;
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

	CategoryTranslate(category: string) : string {
		if (category == "App") return this.returnText("GALLERY", "Gallery_filter_app");
		if (category == "Web") return this.returnText("GALLERY", "Gallery_filter_web");
		if (category == "Media") return this.returnText("GALLERY", "Gallery_filter_media");
		return "";
	}

  ChangeFilter(filterChange : string){
	  if (filterChange == "All") {
		  this.filter = this.portfolio;
		  return;
	  }
     // Loop thru portfolio array, can be easily changed to loop thru data that comes from other sources, such as firebase
	  this.filter = Array<any>();
	 	  for(var i = 0; i < this.portfolio.length; i++){
		  if (this.portfolio[i].category == filterChange) this.filter.push(this.portfolio[i]);
	  }

  }

}
