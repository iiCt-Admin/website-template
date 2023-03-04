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

	portfolio = [{image:"assets/img/iiCt_Round_Light.png",alt:"none alt", title: "no title App 1", category : "App", detailsLink : "none" },
				{image:"none image",alt:"none alt", title: "no title Web 1", category : "Web", detailsLink : "none"},
				{image:"none image",alt:"none alt", title: "no title Media 1", category : "Media", detailsLink : "none"},

				{image:"none image",alt:"none alt", title: "no title App 2", category : "App", detailsLink : "none" },
				{image:"none image",alt:"none alt", title: "no title Web 2", category : "Web", detailsLink : "none"},
				{image:"none image",alt:"none alt", title: "no title Media 2", category : "Media", detailsLink : "none"}
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
	  this.filter = Array<any>();
	  // Loop thru portfolio array, can be easily changed to loop
	  // thru data that comes from other sources, such as firebase
	  for(var i = 0; i < this.portfolio.length; i++){
		  if (this.portfolio[i].category == filterChange) this.filter.push(this.portfolio[i]);
	  }

  }

}
